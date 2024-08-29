import { UserTypes } from "./types";

export const users: UserTypes[] = [
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Marcus Harry",
    enrolled: false,
    password: "1234567",
    role: "user",
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Nashrah Monika",
    enrolled: false,
    password: "1234567",
    role: "user",
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "John Doe",
    enrolled: false,
    password: "1234567",
    role: "admin",
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Ibra Musana",
    enrolled: false,
    password: "1234567",
    role: "admin",
  },
];
