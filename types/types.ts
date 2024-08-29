export interface QuestionType {
  id: string;
  question: string;
  choices?: { choice: string; value: any }[];
  answer: string;
  givenAnswer?: string;
}
