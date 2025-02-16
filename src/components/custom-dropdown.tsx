import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Icon, { IconName } from "./icon";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type InputType = {
  name: string;
  label?: string;
  fill?: boolean;
};

interface DropdownProps {
  inputTypes: InputType[];
  setQuestionType: (item: InputType) => void;
  triggerType: 'icon' | 'button';
  currentType?: InputType;
}

const Dropdown = ({ inputTypes, setQuestionType, currentType }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<InputType | null>(currentType || inputTypes[0]);

  const handleSelect = (item: InputType) => {
    setSelectedItem(() => item);
    setQuestionType(item);
  };


  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-400 outline-none">
        <Icon
          name={selectedItem?.name as IconName || "shortAnswer"}
          fill={selectedItem?.fill !== undefined ? selectedItem.fill : false}
          width={20}
          height={20}
        />
        <ChevronDown className="w-5 h-5" strokeWidth={1.5} />

      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-[240px] sm:min-w-[300px] border-gray-200 shadow-xl rounded-[16px]"
      >
        <DropdownMenuLabel className="bg-gray-50 py-[10px] px-4 text-sm font-semibold text-gray-500 rounded-sm">
          Input Types
        </DropdownMenuLabel>
        {inputTypes.map((item, index) => (
          <DropdownMenuItem
            className="shrink-0 flex items-center gap-2"
            key={index}
            onClick={() => handleSelect(item)}
          >
            <Icon name={item.name as IconName} fill={item.fill} width={20} height={20} />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;