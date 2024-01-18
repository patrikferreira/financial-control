"use client"
import { createContext, useState } from "react";

export type UserCtx = {
    user: User,
    setUser: (user: User | ((u: User) => User)) => void,
}

export type User = {
    id: number,
    name: string,
    userName: string,
    password: string,
    email: string,
    balance: number,
    income: number,
    outcome: number,
    transactions: Transactions[]
}

export type Transactions = {
    id: number,
    description: string,
    notes: string,
    amount: number,
    transactionType: number,
    inComeCategoryId: number,
    outComeCategoryId: number,
}

type Props = {
    children: React.ReactNode,
}

export const userCtx = createContext<UserCtx>({} as UserCtx);

export default function UserProvider({children} : Props) {
    const [user, setUser] = useState<User>({} as User);


    return (
        <userCtx.Provider value={{user, setUser}}>{children}</userCtx.Provider>
    )
}