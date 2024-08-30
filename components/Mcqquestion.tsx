import React from "react";
import { QuestionType, UserTypes } from "@/types/types";

type Iprops = {
  questions: QuestionType[];
  user: UserTypes;
  element?: JSX.Element;
};

const Mcqquestion: React.FC<Iprops> = ({ questions, user, element }) => {
  return (
    <>
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
            {user?.role === "admin" ? (
              <p>Answer: {question.answer}</p>
            ) : (
              element
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Mcqquestion;
