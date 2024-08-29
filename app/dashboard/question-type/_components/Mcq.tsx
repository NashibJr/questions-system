"use client";

import React from "react";
import Input from "@/components/Input";
import { QuestionType } from "@/types/types";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { createQuestion } from "@/redux/slices/questionSlice";

const Mcq = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = React.useState<QuestionType[]>([]);
  const [question, setQuestion] = React.useState<string>("");
  const id = React.useId();
  const [myQuestion, setMyquestion] = React.useState<QuestionType>({
    answer: "",
    choices: [],
    id: "",
    question: "",
  });
  const [choice, setChoice] = React.useState<{
    a: string;
    b: string;
    c: string;
    d: string;
  }>({ a: "", b: "", c: "", d: "" });
  const [answer, setAnswer] = React.useState<string>("");

  const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  React.useEffect(() => {
    setMyquestion((prevState) => ({
      ...prevState,
      answer,
      id,
      question,
      choices: [
        { choice: "A", value: choice.a },
        { choice: "B", value: choice.b },
        { choice: "C", value: choice.c },
        { choice: "D", value: choice.d },
      ],
    }));
  }, [answer, id, question, choice.a, choice.b, choice.c, choice.d]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuestions((prevState) => [...prevState, myQuestion]);
    dispatch(createQuestion(myQuestion));
    setAnswer("");
    setChoice({ a: "", b: "", c: "", d: "" });
    setQuestion("");
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
              <div className="flex gap-5">
                {question.choices!.map((choice) => (
                  <p key={choice.choice}>
                    {choice.choice}. {choice.value}
                  </p>
                ))}
              </div>
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
          <p>Enter choices</p>
          <div className="flex gap-16">
            <Input
              label="A"
              placeholder="Enter choice"
              name="a"
              value={choice.a}
              required
              onChange={handleChoiceChange}
            />
            <Input
              label="B"
              placeholder="Enter choice"
              name="b"
              value={choice.b}
              required
              onChange={handleChoiceChange}
            />
          </div>
          <div className="flex gap-16">
            <Input
              label="C"
              placeholder="Enter choice"
              required
              name="c"
              value={choice.c}
              onChange={handleChoiceChange}
            />
            <Input
              label="D"
              placeholder="Enter choice"
              required
              name="d"
              value={choice.d}
              onChange={handleChoiceChange}
            />
          </div>
          <div className="flex gap-16">
            <Input
              label="Answer"
              placeholder="Enter the correct ahoice e.g A"
              name="answer"
              value={answer}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAnswer(event.target.value)
              }
              required
            />
            <Button
              label="Add"
              type="submit"
              className="bg-black text-white p-[6px] h-10 mt-8 rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mcq;
