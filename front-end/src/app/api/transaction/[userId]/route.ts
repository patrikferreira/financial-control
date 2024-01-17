import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
    const { params } = context
    const secretKey = process.env.SECRET as string

    const response = await fetch(`https://localhost:7229/transaction/${params.userId}`, { headers: { Secret: secretKey } });
    const json = await response.json();

    return NextResponse.json(json)
}

export async function POST(id: number, description: string, amount: number, notes: string, isPaid: boolean, transactionType: number, inComeCategoryId: number, outComeCategoryId: number) {

    const secretKey = process.env.SECRET as string;

    const newTransaction = {
        UserId: id,
        Description: description,
        Amount: amount,
        Notes: notes,
        IsPaid: isPaid,
        TransactionType: transactionType,
        InComeCategoryId: inComeCategoryId,
        OutComeCategoryId: outComeCategoryId,
    }

    const response = await fetch(`https://localhost:7229/transaction/${id}`, {
        method: 'POST',
        headers: {
            Secret: secretKey,
        },
        body: JSON.stringify(newTransaction)
    });

    const json = response.json()

    console.log(json)

    return NextResponse.json(json)
}