import {createSlice} from "@reduxjs/toolkit"

export interface User{
  name: string,
  email: string,
  github: string,
}

export interface UserWithId extends User{
  id: string
}

const initialState:  UserWithId[] = [
  {
    id: "1",
    name: "Peter Doe",
    email: "email@email.com",
    github: "peter1",
  },
  {
    id: "2",
    name: "Diana Doe",
    email: "email@email.com",
    github: "diana",
  },
  {
    id: "3",
    name: "Emilio Doe",
    email: "email@email.com",
    github: "emilio",
  },
  {
    id: "4",
    name: "Pumuki Camper",
    email: "email@email.com",
    github: "pumuki",
  },
  {
    id: "5",
    name: "Max Balmoore",
    email: "email@email.com",
    github: "max",
  },
  {
    id: "6",
    name: "Peter Moore",
    email: "email@email.com",
    github: "peter2",
  },
  {
    id: "7",
    name: "Bertus Ramos",
    email: "email@email.com",
    github: "BertoRamosM",
  },
];


export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers:{}
})

export default usersSlice.reducer