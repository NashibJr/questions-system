export interface QuestionType {
  id: string;
  question: string;
  choices?: { choice: string; value: any }[];
  answer: string;
  givenAnswer?: string;
}

export interface UserTypes {
  id: string;
  key?: string;
  name: string;
  password: string;
  role: "admin" | "user";
  enrolled: boolean;
  token?: string;
  email: string;
  avator?: string;
  invited?: boolean;
}

export type OrganizationType = {
  key: string;
  id: string;
  name: string;
  email: string;
  logo?: string;
};
