import { useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CommandList } from "cmdk";
import { cn } from "@/lib/utils";

const Combobox: React.FC<{
  options: { value: string | number; label: string | number }[];
  value: any;
  onChange: (value: string | number) => void;
  formType: string;
  triggerClassName?: string;
  contentClassName?: string;
}> = ({ options, value, onChange, formType, triggerClassName, contentClassName }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: { value: string | number; label: string | number }) => {
    onChange(option.value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={cn("rounded-md", triggerClassName)} asChild>
        <button type="button" className="flex-between w-full h-fit overflow-hidden" aria-haspopup="listbox" aria-expanded={open}>
          {value ? options.find((option) => option.value === value)?.label : `Select a ${formType}`}
          <ChevronsUpDown className={cn("ml-2 max-h-5 max-w-5 min-h-5 min-w-5", contentClassName)} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-dark-2">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search views..." />
            <CommandEmpty> {`${formType} not valid`} </CommandEmpty>
            <CommandGroup className="max-h-60 overflow-y-auto">
              {options.map((option) => (
                <CommandItem key={option.value} onSelect={() => handleSelect(option)} className="cursor-pointer hover:bg-dark-4">
                  {option.label}
                  {value === option.value && <Check className="ml-auto h-5 w-5" />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
