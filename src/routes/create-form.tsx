import Question from "@/components/question";
import { Button } from "@/components/ui/button";
import usePersistentState from "@/hooks/usePersistentState";
import { FormQuestion } from "@/model/form-model";
import { validateQuestions } from "@/utils/validate";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/create-form")({
  component: CreateForm,
});

function CreateForm() {
  const navigate = useNavigate({ from: "/create-form" });

  const [formTitle, setFormTitle, , saveStatusTitle] = usePersistentState(
    "form-title",
    "",
  );

  const [questions, setQuestions, , saveStatus] = usePersistentState<
    FormQuestion[]
  >("form-questions", []);

  const formTitleRef = useRef<HTMLInputElement>(null);

  const handleUpdateQuestion = (questionId: string, data: FormQuestion) => {
    setQuestions((prev) => {
      const updatedQuestions = prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              ...data,
              validations: { ...q.validations, ...data.validations },
              options: data.options ?? q.options,
            }
          : q,
      );
      return updatedQuestions;
    });
  };

  useEffect(() => {
    if (formTitleRef.current) {
      formTitleRef.current.focus();
    }

    console.log("render");
  }, []);

  const addQuestion = () => {
    const newQuestion: FormQuestion = {
      id: String(Date.now()),
      type: "text",
      title: "",
      sub_title: "",
    };

    setQuestions((prev) => [...prev, newQuestion]);
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== questionId));
  };

  return (
    <div>
      <header className="py-3 px-6 flex items-center space-x-2 justify-between border-b sticky top-0 z-10 backdrop-blur-sm ">
        <input
          type="text"
          placeholder="Untitled form"
          value={formTitle}
          ref={formTitleRef}
          onChange={(e) => setFormTitle(e.target.value)}
          className={`font-semibold ${
            formTitle ? "text-gray-1k" : "text-gray-400"
          } bg-transparent border-none outline-none w-full`}
        />
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500">
            {saveStatus === "saving" || saveStatusTitle === "saving"
              ? "Saving"
              : saveStatus === "saved" || saveStatusTitle === "saved"
                ? "Saved"
                : ""}
          </div>

          <Button
            size={"sm"}
            disabled={questions.length <= 0}
            onClick={() => {
              if (formTitle.trim() === "") {
                toast.error("Please add a title to publish your form");
                return;
              }

              if (validateQuestions(questions)) {
                navigate({
                  to: "/preview",
                });
              } else {
                toast.error(
                  "Please ensure all questions have titles and options (if applicable).",
                );
              }
            }}
            variant={"outline"}
            className="shadow-none font-semibold"
          >
            <span>Preview</span>
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </header>

      <div className="space-y-4 mt-10">
        {questions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            type={question.type}
            title={question.title}
            sub_title={question.sub_title}
            updateQuestion={handleUpdateQuestion}
            options={question.options || []}
            validations={question.validations}
            onDelete={() => handleDeleteQuestion(question.id)}
          />
        ))}
      </div>

      <div className="grid place-items-center py-10">
        <Button variant={"outline"} onClick={addQuestion}>
          <Plus />
          Add Question
        </Button>
      </div>
    </div>
  );
}
