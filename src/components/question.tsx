import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import Dropdown from "./custom-dropdown";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { FormQuestion } from "@/model/form-model";

const inputTypes = [
  { label: "Text", name: "text", fill: false },
  { label: "Single Select", name: "select", fill: false },
  { label: "Number", name: "number", fill: false },
];

type QuestionPropsType = {
  updateQuestion: (id: string, question: FormQuestion) => void;
  onDelete: (id: string) => void;
} & FormQuestion;


const Question = ({
  id,
  type,
  title,
  sub_title,
  updateQuestion
}: QuestionPropsType) => {
  const [localType, setLocalType] = useState(type);
  const [localTitle, setLocalTitle] = useState(title);
  const [localSubtitle, setLocalSubtitle] = useState(sub_title);
  const [options, setOptions] = useState(["", ""]); // Options for single-select

  // Notify parent whenever local state changes
  useEffect(() => {
    updateQuestion(id, {
      id,
      type: localType,
      title: localTitle,
      sub_title: localSubtitle,
      options: localType === "select" ? options : undefined, // Send options only for single select
    });
  }, [id, updateQuestion, localType, localTitle, localSubtitle, options]);

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions((prev) => [...prev, ""]);
  };

  return (
    <div className="border  space-y-1 p-4 bg-gray-00 max-w-[592px] w-full hover:bg-gray-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-2 justify-between">
        <div className="flex-grow space-y-1">
          <input
            type="text"
            placeholder="Write a question"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            className={`font-semibold ${localTitle ? "text-gray-1k" : "text-gray-400"
              } bg-transparent border-none outline-none w-full text-sm flex-grow `}
          />
          {/* Subtitle Input */}
          <input
            type="text"
            placeholder="Write a help text or caption (leave empty if not needed)"
            value={localSubtitle}
            onChange={(e) => setLocalSubtitle(e.target.value)}
            className={`font-normal text-xs ${localSubtitle ? "text-gray-1k" : "text-gray-400"
              } bg-transparent border-none outline-none w-full`}
          />
        </div>
        <div className="flex items-center text-gray-1k">
          {/* Dropdown for question type */}
          <Dropdown
            currentType={inputTypes.find((item) => item.name === localType)}
            triggerType="icon"
            inputTypes={inputTypes}
            setQuestionType={(item) => setLocalType(item.name as "number" | "text" | "select")}
          />
        </div>
      </div>

      {/* Render input based on question type */}
      <div>
        {localType === "text" && (
          <Textarea
            disabled
            placeholder=""
            rows={2}
            className="w-full p-2 border rounded resize-none"
          />
        )}
        {localType === "select" && (
          <div>
            <div className="flex flex-col space-y-2 flex-grow">
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    id={`option-${index}`}
                    className="w-4 h-4 shrink-0 rounded-full border border-gray-500 flex items-center justify-center"
                  ></div>
                  <Input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(index, e.target.value)
                    }
                    placeholder={`Option ${index + 1}`}
                    className="text-gray-1k text-sm placeholder:text-gray-400"
                  />
                  {index === options.length - 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={addOption}
                      className="shadow-none"
                    >
                      <Plus
                        className="w-6 h-6 text-gray-1k"
                        strokeWidth={1.5}
                      />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {localType === "number" && (
          <Input disabled type="number" placeholder="" />
        )}
      </div>
    </div>
  );
};

export default Question;