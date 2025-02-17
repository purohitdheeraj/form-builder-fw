import { useEffect, useState } from "react";
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

  const [responses, setResponses] = useState<
    { question: string; answer: string }[]
  >([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleResponseChange = (question: FormQuestion, value: string) => {
    setResponses((prev) => {
      const updatedResponses = prev.map((resp) =>
        resp.question === question.title ? { ...resp, answer: value } : resp,
      );

      if (!updatedResponses.some((resp) => resp.question === question.title)) {
        updatedResponses.push({ question: question.title, answer: value });
      }

      return updatedResponses;
    });

    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [question.title]: "" }));
    }
  };

  const handleSubmit = () => {
    let hasError = false;
    const validationErrors: { [key: string]: string } = {};

    questions.forEach((question) => {
      if (
        question.validations?.required &&
        !responses.some(
          (resp) => resp.question === question.title && resp.answer.trim(),
        )
      ) {
        validationErrors[question.title] = "This question is required.";
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(validationErrors);
      toast.error("Please answer all required questions.");
    } else {
      toast.success("Form submitted successfully!");
    }
  };

  useEffect(() => {
    console.log("Form Responses:", responses);
  }, [responses]);

  return (
    <>
      <header className="py-3 px-6 flex items-center space-x-2 justify-between border-b sticky top-0 z-10 backdrop-blur-sm">
        <h1 className="text-lg font-semibold">
          {formTitle || "Untitled Form"}
        </h1>

        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.history.back()}>
            Continue Editing
          </Button>

          <Button
            size="sm"
            onClick={handleSubmit} // Trigger form validation
            className="shadow-none font-semibold"
          >
            <span>Publish</span>
            <Send size={16} />
          </Button>
        </div>
      </header>

      <div className="space-y-8 my-6 px-6 mx-auto w-full ">
        {questions.length === 0 ? (
          <p className="text-gray-500">No questions added yet.</p>
        ) : (
          questions.map((question) => (
            <div key={question.title} className="w-full flex justify-center">
              <QuestionPreview
                {...question}
                response={
                  responses.find((resp) => resp.question === question.title)
                    ?.answer || ""
                }
                onChange={(value) => handleResponseChange(question, value)}
              />
              {/* Display error message if validation fails */}
              {errors[question.title] && (
                <p className="text-red-500 text-sm">{errors[question.title]}</p>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Preview;
