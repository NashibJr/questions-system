"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { QuestionType } from "@/types/types";
import Button from "@/components/Button";

const Questions = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.users.user);
  const questions = useAppSelector((state) => state.questions.questions);
  const [myQuestions, setMyQuestions] = React.useState<QuestionType[]>([]);

  React.useEffect(() => {
    if (!user?.enrolled) {
      router.back();
    }
  }, [user?.email, user?.enrolled]);

  React.useEffect(() => {
    setMyQuestions(() =>
      questions?.map((question) => {
        const myQn = Object.assign(question, { givenAnswer: "" });

        return myQn;
      })
    );
  }, [questions]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMyQuestions((prevState) => {
      const id = event.target.id;
      const question = prevState?.find((question) => question.id === id);
      if (question) {
        question.givenAnswer = event.target.value;
      }
      const qnIndex = prevState.findIndex((question) => question.id === id);
      prevState.splice(qnIndex, 1, question!);

      return prevState;
    });

  const handleClick = () => {
    try {
      const attemptedQns = {
        qns: myQuestions,
        user: user,
      };
      sessionStorage.setItem("attemptedQns", JSON.stringify(attemptedQns));
      console.log(myQuestions, ">>>>");
      router.replace("/user-dashboard/finish");
    } catch (error) {
      console.log(error, ">>>>");
    }
  };

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-5 top-0 sticky bg-white w-full">
        <h2 className="text-2xl font-semibold">{user?.name}</h2>
        <hr />
      </div>
      <div className="flex flex-col gap-5">
        {myQuestions?.map((question, index) => (
          <div className="mt-5 pl-5 flex flex-col gap-4" key={index}>
            <p>
              {index + 1}. {question.question}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-5">
                {question.choices!?.map((choice) => (
                  <p key={choice.choice}>
                    {choice.choice}. {choice.value}
                  </p>
                ))}
              </div>
              <Input
                type="text"
                label="Write answer here"
                placeholder={
                  question.choices
                    ? "Enter A, B, C or D"
                    : "Enter True or False"
                }
                onChange={handleChange}
                id={question.id}
                value={question[question.id]}
                required
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        type="button"
        label="Finish"
        className="bg-black text-white hover:opacity-75 rounded-md p-[6px] min-w-16 m-5 w-52"
        onClick={handleClick}
      />
    </div>
  );
};

export default Questions;
