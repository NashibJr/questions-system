"use client";

import React from "react";
import Input from "@/components/Input";
import { QuestionType } from "@/types/types";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/redux/hooks";
import { createQuestion } from "@/redux/slices/questionSlice";

const TrueOrFalse = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = React.useState<QuestionType[]>([]);
  const [question, setQuestion] = React.useState<string>("");
  const id = nanoid();
  const [myQuestion, setMyquestion] = React.useState<QuestionType>({
    answer: "",
    id: "",
    question: "",
  });
  const [answer, setAnswer] = React.useState<"true" | "false" | "">("");
  React.useEffect(() => {
    setMyquestion((prevState) => ({
      ...prevState,
      answer,
      id,
      question,
    }));
  }, [answer, question]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuestions((prevState) => [...prevState, myQuestion]);
    setAnswer("");
    setQuestion("");
    dispatch(createQuestion(myQuestion));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        {questions?.map((question, index) => (
          <div className="mt-5 pl-5 flex flex-col gap-4" key={index}>
            <p>
              {index + 1}. {question.question}
            </p>
            <div className="flex flex-col gap-1">
              <p>Answer: {question.answer}</p>
            </div>
          </div>
        ))}
        {questions.length > 0 && (
          <Button
            label="Submit"
            type="submit"
            className="bg-black text-white p-[6px] h-10 mt-8 rounded-md w-36 ml-5"
            onClick={() => router.push("/dashboard/users")}
          />
        )}
      </div>
      <form className="flex flex-col gap-5 p-5" onSubmit={handleSubmit}>
        <div className="w-2/3">
          <Input
            label="Question"
            placeholder="Enter question"
            required
            name="question"
            value={question}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setQuestion(event.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <p>Chose answer</p>
          <div className="flex gap-16">
            <div className="flex gap-5">
              <label>
                <input
                  type="radio"
                  name="true/false"
                  value={answer}
                  onChange={() => setAnswer("true")}
                  checked={answer === "true"}
                />{" "}
                True
              </label>
              <label>
                <input
                  type="radio"
                  name="true/false"
                  value={answer}
                  onChange={() => setAnswer("false")}
                  checked={answer === "false"}
                />{" "}
                False
              </label>
            </div>
          </div>
          <Button
            label="Add"
            type="submit"
            className="bg-black text-white p-[6px] h-10 mt-8 rounded-md w-36"
          />
        </div>
      </form>
    </div>
  );
};

export default TrueOrFalse;
