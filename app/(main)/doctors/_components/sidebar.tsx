"use client";

import React from "react";

import { MapPin, Trash, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AppointmentType,
  FilterType,
  Gender,
  Language,
  specialties,
} from "./data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Sidebar = () => {
    const { replace } = useRouter();
    const pathname = usePathname();
  return (
    <div className="sidebar space-y-4  w-[300px] px-4 ">

      <div className="space-y-2">
        <span className="font-medium">Filters</span>
        <div className="filters space-y-2 text-sm font-normal">
          <Filter
            type="Speciality"
            values={specialties}
            placeholder="Select a Speciality"
          />
          <Filter type="Language" values={Language} />
          <Filter type="Appointment Type" values={AppointmentType} />
          <Filter type="Gender" values={Gender} />
        </div>
        <Button
          variant="secondary"
          className="w-full gap-2"
          onClick={() => {replace(`${pathname}`)}}
        >
          <Trash2 /> Clear All
        </Button>
      </div>
    </div>
  );
};

const Filter = ({
  type,
  placeholder,
  values,
}: {
  type: string;
  placeholder?: string;
  values: FilterType[];
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  return (
    <div>
      <span className="text-muted-foreground">{type}</span>

      <Select
        defaultValue={values[0].value}
        onValueChange={(value) => {
          const params = new URLSearchParams(searchParams);
          params.set(type.toLowerCase(), value);
          replace(`${pathname}?${params.toString()}`);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder || "All"} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value) => (
            <SelectItem
              key={value.value}
              value={value.value}
              className="cursor-pointer data-[state=checked]:bg-primary-background-500 data-[state=checked]:text-primary-foreground"
            >
              {value.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
