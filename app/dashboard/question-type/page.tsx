"use client";

import React from "react";
import Head from "@/components/Head";
import ShouldRender from "@/components/ShouldRender";
import Mcq from "./_components/Mcq";
import TrueOrFalse from "./_components/TrueOrFalse";

const QuestionTypes = () => {
  const [questionType, setQuestionType] = React.useState<
    "true/false" | "mcq" | ""
  >("true/false");
  const handleChange = (value: "true/false" | "mcq") => setQuestionType(value);

  return (
    <>
      <Head title="Question types" />
      <p className="ml-4">Create questions</p>
      <form className="flex gap-5 p-4">
        <label>
          <input
            type="radio"
            name="true/false"
            onChange={() => handleChange("true/false")}
            checked={questionType === "true/false"}
          />{" "}
          True/False
        </label>
        <label>
          <input
            type="radio"
            name="mcq"
            onChange={() => handleChange("mcq")}
            checked={questionType === "mcq"}
          />{" "}
          Multi Choice Questions
        </label>
      </form>
      <ShouldRender visible={questionType === "mcq"}>
        <Mcq />
      </ShouldRender>
      <ShouldRender visible={questionType === "true/false"}>
        <TrueOrFalse />
      </ShouldRender>
    </>
  );
};

export default QuestionTypes;
