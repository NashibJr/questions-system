import { OrganizationType, UserTypes } from "./types";

export const users: UserTypes[] = [
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Marcus Harry",
    enrolled: false,
    key: `${Math.round(Math.random() * 10000)}`,
    password: "1234567",
    role: "user",
    email: "marcus@email.com",
    invited: false,
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Nashrah Monika",
    enrolled: false,
    key: `${Math.round(Math.random() * 10000)}`,
    password: "1234567",
    role: "user",
    email: "nashrah@email.com",
    invited: false,
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "John Doe",
    enrolled: false,
    key: `${Math.round(Math.random() * 10000)}`,
    password: "1234567",
    role: "admin",
    email: "johne@email.com",
    invited: false,
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Ibra Musana",
    enrolled: false,
    key: `${Math.round(Math.random() * 10000)}`,
    password: "1234567",
    role: "admin",
    email: "ibra@email.com",
    invited: false,
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Ibra Musana JR",
    enrolled: false,
    key: `${Math.round(Math.random() * 10000)}`,
    password: "1234567",
    role: "user",
    email: "musamajr10@email.com",
    invited: false,
  },
];

export const organizations: OrganizationType[] = [
  {
    email: "info@company1.com",
    id: `${Math.round(Math.random() * 10000)}`,
    key: `${Math.round(Math.random() * 10000)}`,
    name: "Company 1",
  },
  {
    email: "info@company1.com",
    id: `${Math.round(Math.random() * 10000)}`,
    key: `${Math.round(Math.random() * 10000)}`,
    name: "Company 1",
  },
  {
    email: "info@comp2.com",
    id: `${Math.round(Math.random() * 10000)}`,
    key: `${Math.round(Math.random() * 10000)}`,
    name: "Company 2",
  },
  {
    email: "info@x.com",
    id: `${Math.round(Math.random() * 10000)}`,
    key: `${Math.round(Math.random() * 10000)}`,
    name: "Company XX",
  },
  {
    email: "info@xyz.com",
    id: `${Math.round(Math.random() * 10000)}`,
    key: `${Math.round(Math.random() * 10000)}`,
    name: "Company XYZ",
  },
];
