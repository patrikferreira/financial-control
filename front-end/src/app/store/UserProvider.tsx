"use client"
import { createContext, useState } from "react";

export type UserCtx = {
    user: User,
    setUser: (user: User) => void,
}

export type User = {
    id: number,
    name: string,
    userName: string,
    password: string,
    email: string,
    balance: number,
    transactions?: Transactions[]
}

export type Transactions = {
    description: string,
    amount: number,
    transactionType: number,
    incomeType: number,
    outcomeType: number,
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