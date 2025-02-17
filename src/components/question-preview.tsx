import { FormQuestion } from "@/model/form-model";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

type QuestionPreviewProps = FormQuestion & {
  response: string;
  onChange: (value: string) => void;
};

const QuestionPreview = ({ title, sub_title, type, options, response, validations, onChange }: QuestionPreviewProps) => {
  const [selectedOption, setSelectedOption] = useState(response);

  return (
    <div className="border p-4 max-w-[692px] w-full bg-gray-50 rounded-lg shadow-sm">
      {/* Question Title */}
      <h3 className="font-semibold text-gray-800">{title}

        <span className="text-red-500">{validations?.required ? ' * ' : null}</span>

      </h3>

      {/* Subtitle / Help Text */}
      {sub_title && <p className="text-sm text-gray-600">{sub_title}</p>}

      {/* Render input based on type */}
      <div className="mt-3">
        {type === "text" && (
          <Textarea
            value={response}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter your response..."
            rows={2}
            className="w-full p-2 border rounded resize-none"
          />
        )}

        {type === "number" && (
          <Input
            type="number"
            value={response}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter a number"
          />
        )}

        {type === "select" && (
          <div className="space-y-2">
            {options?.map((option, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="select"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => {
                    setSelectedOption(e.target.value);
                    onChange(e.target.value);
                  }}
                  className="w-4 h-4"
                />
                <span className="text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPreview;
