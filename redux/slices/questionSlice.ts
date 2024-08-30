import { QuestionType } from "@/types/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface QueProps {
  questions: QuestionType[];
}

const initialState = {
  questions: [],
} as QueProps;

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    createQuestion: (state, action: PayloadAction<QuestionType>) => {
      state.questions.push(action.payload);
    },
  },
});

export const { createQuestion } = questionSlice.actions;

export default questionSlice;
