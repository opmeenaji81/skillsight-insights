import { useState } from "react";
import { Filter, ChevronDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roleCategories, experienceLevels, cities, skills, timeRanges } from "@/data/mockData";

interface FilterPanelProps {
  onFilterChange?: (filters: Record<string, string>) => void;
}

export function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [filters, setFilters] = useState({
    role: "All Roles",
    experience: "All Experience",
    city: "All Cities",
    skill: "All Skills",
    timeRange: "Last 30 Days",
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      role: "All Roles",
      experience: "All Experience",
      city: "All Cities",
      skill: "All Skills",
      timeRange: "Last 30 Days",
    };
    setFilters(defaultFilters);
    onFilterChange?.(defaultFilters);
  };

  return (
    <div className="filter-panel">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-foreground">Filters</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={resetFilters} className="text-muted-foreground">
          <RotateCcw className="w-3 h-3 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        {/* Role Filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Role Category
          </label>
          <Select value={filters.role} onValueChange={(v) => handleFilterChange("role", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              {roleCategories.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Experience Level
          </label>
          <Select value={filters.experience} onValueChange={(v) => handleFilterChange("experience", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City Filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            City / Location
          </label>
          <Select value={filters.city} onValueChange={(v) => handleFilterChange("city", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Skill Filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Required Skill
          </label>
          <Select value={filters.skill} onValueChange={(v) => handleFilterChange("skill", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select skill" />
            </SelectTrigger>
            <SelectContent>
              {skills.map((skill) => (
                <SelectItem key={skill} value={skill}>
                  {skill}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Time Range Filter */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Time Range
          </label>
          <Select value={filters.timeRange} onValueChange={(v) => handleFilterChange("timeRange", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              {timeRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Apply Button */}
      <Button variant="hero" className="w-full mt-6">
        Apply Filters
      </Button>
    </div>
  );
}
