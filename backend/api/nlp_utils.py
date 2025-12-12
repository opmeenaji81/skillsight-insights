# backend/api/nlp_utils.py
import re
import os
import spacy

BASE_DIR = os.path.dirname(__file__)
SKILLS_FILE = os.path.join(BASE_DIR, "skills_list.txt")

# Load spaCy model once
nlp = spacy.load("en_core_web_sm")

# Load canonical skill list
with open(SKILLS_FILE, "r", encoding="utf-8") as f:
    CANONICAL_SKILLS = [line.strip().lower() for line in f if line.strip()]

def clean_text(text: str) -> str:
    text = text.replace("\n", " ").replace("\r", " ")
    text = re.sub(r"<[^>]+>", " ", text)  # remove HTML tags
    text = re.sub(r"\s+", " ", text).strip()
    return text.lower()

def extract_skills(text: str):
    cleaned = clean_text(text)
    found = []

    # direct dictionary matching
    for skill in CANONICAL_SKILLS:
        if skill in cleaned:
            found.append(skill)

    # fallback using spaCy noun chunks
    if not found:
        doc = nlp(cleaned)
        candidates = {chunk.text.strip().lower() for chunk in doc.noun_chunks}

        for cand in candidates:
            for skill in CANONICAL_SKILLS:
                if cand in skill or skill in cand:
                    found.append(skill)

    # remove duplicates
    return sorted(set(found))

def extract_experience(text: str):
    m = re.search(r"(\d{1,2})\+?\s*years?", text)
    if m:
        return int(m.group(1))
    return None

#import re

# ---------- helper to convert number-like string to float LPA ----------
def _to_lpa(value_str: str) -> float | None:
    if not value_str:
        return None
    s = value_str.strip().lower()
    # remove currency symbols and words
    s = re.sub(r'[₹,$]', '', s)
    # replace words
    s = s.replace(' lpa', ' lpa').replace(' lakh', ' lakh').replace(' lakhs', ' lakh').replace(' lacs', ' lakh')
    s = s.replace('per annum', '').replace('pa', '')
    s = s.strip()

    # if contains 'lakh' or 'lac' -> number * 1 LPA
    m_lakh = re.search(r'([\d\.,]+)\s*(?:lakh|lpa|lac)', s)
    if m_lakh:
        num = m_lakh.group(1).replace(',', '')
        try:
            return round(float(num), 2)
        except:
            pass

    # plain rupee numbers like 500000 or 5,00,000 -> convert to LPA
    m_num = re.search(r'([\d\.,]+)', s)
    if m_num:
        raw = m_num.group(1).replace(',', '')
        try:
            val = float(raw)
        except:
            return None
        # heuristic: if value seems rupees (>= 10000), convert to LPA
        if val >= 10000:
            return round(val / 100000, 2)  # e.g. 500000 -> 5.0 LPA
        # if value small (<=100) treat as LPA directly
        if val <= 100:
            return round(val, 2)
    return None

# ---------- robust salary extractor ----------
def parse_salary(text: str):
    if not text:
        return None, None, None
    txt = text.lower().replace('\u2013', '-').replace('\u2014', '-')
    # normalise 'to' separators
    txt = re.sub(r'\s+to\s+', '-', txt)

    # try range patterns first: "5-10 lpa", "5 - 10 lpa", "₹5,00,000 - ₹10,00,000"
    m_range = re.search(r'([\d\.,\s]*\d+\.?\d*)\s*(?:-|to|–|—)\s*([\d\.,\s]*\d+\.?\d*)\s*(lpa|lakh|lac|₹|rs)?', txt)
    if m_range:
        left = m_range.group(1)
        right = m_range.group(2)
        left_val = _to_lpa(left)
        right_val = _to_lpa(right)
        raw = m_range.group(0).strip()
        return left_val, right_val, raw

    # single value like "6 lpa", "₹600000", "6.5 LPA", "6 lac"
    m_single = re.search(r'([\d\.,]+)\s*(lpa|lakh|lac|₹|rs)?', txt)
    if m_single:
        v = _to_lpa(m_single.group(1) + (' ' + (m_single.group(2) or '')).strip())
        raw = m_single.group(0).strip()
        return v, v, raw

    return None, None, None

__all__ = ["parse_salary", "_to_lpa"]

# --- add this to the bottom of backend/api/nlp_utils.py ---
def extract_all(text: str) -> dict:
    """
    Wrapper that returns a unified dict:
      {
        "text": cleaned_text,
        "skills": [...],
        "experience_years": int|None,
        "salary_min": float|None,
        "salary_max": float|None,
        "salary_text": str|None
      }
    Uses existing functions: clean_text, extract_skills, extract_experience, parse_salary
    """
    cleaned = clean_text(text or "")
    # skills: try dictionary-based extractor, fallback handled inside if necessary
    try:
        skills = extract_skills(cleaned)
    except Exception:
        # if your file uses a different extractor name, try alternative calls
        skills = []
        if "extract_skills_by_dictionary" in globals():
            skills = extract_skills_by_dictionary(cleaned)

    # experience
    exp = None
    try:
        exp = extract_experience(cleaned)
    except Exception:
        exp = None

    # salary
    salary_min, salary_max, salary_text = None, None, None
    # prefer parse_salary if available, else try extract_salary
    if "parse_salary" in globals():
        try:
            salary_min, salary_max, salary_text = parse_salary(cleaned)
        except Exception:
            salary_min, salary_max, salary_text = None, None, None
    elif "extract_salary" in globals():
        try:
            salary_min, salary_max = extract_salary(cleaned)
            salary_text = None
        except Exception:
            salary_min, salary_max, salary_text = None, None, None

    return {
        "text": cleaned,
        "skills": skills or [],
        "experience_years": exp,
        "salary_min": salary_min,
        "salary_max": salary_max,
        "salary_text": salary_text,
    }
# --- end addition ---
