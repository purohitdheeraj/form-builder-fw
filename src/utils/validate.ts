import { FormQuestion } from "@/model/form-model";

export const validateQuestions = (questions: FormQuestion[]) => {
  for (const question of questions) {
    if (!question.title.trim()) return false; // Title is required
    if (
      question.type === "select" &&
      (!question.options || question.options.some((opt) => !opt.trim()))
    ) {
      return false; // Options must not be empty
    }
  }
  return true;
};