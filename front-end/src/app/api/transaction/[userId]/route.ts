import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
    const { params } = context
    const secretKey = process.env.SECRET as string

    const response = await fetch(`https://localhost:7229/transaction/${params.userId}`, {headers: {Secret: secretKey}});
    const json = await response.json();

    return NextResponse.json(json)
}