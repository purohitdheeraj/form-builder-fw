import { useState } from "react";
import { Button } from "@/components/ui/button";
import usePersistentState from "@/hooks/usePersistentState";
import { FormQuestion } from "@/model/form-model";
import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import toast from "react-hot-toast";
import QuestionPreview from "@/components/question-preview";
import { useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/preview")({
  component: Preview,
});

function Preview() {
  const router = useRouter();

  const [formTitle] = usePersistentState("form-title", "");
  const [questions] = usePersistentState<FormQuestion[]>("form-questions", []);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleResponseChange = (id: string, value: string) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      {/* Header */}
      <header className="py-3 px-6 flex items-center space-x-2 justify-between border-b sticky top-0 z-10 backdrop-blur-sm">
        <h1 className="text-lg font-semibold">{formTitle || "Untitled Form"}</h1>

        <div className="flex gap-2">

            <Button variant={'outline'} onClick={() => router.history.back()}>
            Continue Editing
            </Button>


          <Button
            size="sm"
            onClick={() => {
              if (formTitle.trim() === "") {
                toast.error("Please add a title to publish your form");
                return;
              }
              console.log("Form Responses:", responses);
              toast.success("Form submitted successfully!");
            }}
            className="shadow-none font-semibold"
          >
            <span>Publish</span>
            <Send size={16} />
          </Button>
        </div>
      </header>

      {/* Form Preview */}
      <div className="space-y-8 my-6 px-6 flex justify-center flex-col items-center">
        {questions.length === 0 ? (
          <p className="text-gray-500">No questions added yet.</p>
        ) : (
          questions.map((question) => (
            <QuestionPreview
              key={question.id}
              {...question}
              response={responses[question.id] || ""}
              onChange={(value) => handleResponseChange(question.id, value)}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Preview;
