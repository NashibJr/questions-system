import React from "react";
import { FaUsers } from "react-icons/fa";
import { SlOrganization } from "react-icons/sl";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import MyLink from "./link";

type linkProps = {
  label: string;
  link: string;
  icon: JSX.Element;
};

const links: linkProps[] = [
  { icon: <FaUsers size={25} />, label: "Users", link: "/dashboard/users" },
  {
    icon: <SlOrganization size={20} />,
    label: "Organizations",
    link: "/dashboard/organizations",
  },
  {
    icon: <BsFillQuestionSquareFill size={23} />,
    label: "Question types",
    link: "/dashboard/question-type",
  },
];

const SideLinks = () => {
  return (
    <ul className="p-2">
      {links.map((link) => (
        <MyLink
          key={link.link}
          label={link.label}
          link={link.link}
          icon={link.icon}
        />
      ))}
    </ul>
  );
};

export default SideLinks;
