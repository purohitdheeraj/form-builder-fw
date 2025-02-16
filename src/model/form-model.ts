export type ValidationRules = {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: string;
};

export type FormQuestion = {
  id: string;
  type: "text" | "number" | "select";
  title: string;
  sub_title: string;
  options?: string[];
  validations?: ValidationRules;
  value?: string | number;
};

export type FormSchema = {
  title: string;
  questions: FormQuestion[];
  updatedAt?: Date;
};
