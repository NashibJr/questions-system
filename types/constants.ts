import { UserTypes } from "./types";

export const users: UserTypes[] = [
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Marcus Harry",
    enrolled: false,
    password: "1234567",
    role: "user",
    email: "marcus@email.com",
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Nashrah Monika",
    enrolled: false,
    password: "1234567",
    role: "user",
    email: "nashrah@email.com",
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "John Doe",
    enrolled: false,
    password: "1234567",
    role: "admin",
    email: "johne@email.com",
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Ibra Musana",
    enrolled: false,
    password: "1234567",
    role: "admin",
    email: "ibra@email.com",
  },
  {
    id: `${Math.round(Math.random() * 10000)}`,
    name: "Ibra Musana JR",
    enrolled: false,
    password: "1234567",
    role: "user",
    email: "musamajr10@email.com",
  },
];
