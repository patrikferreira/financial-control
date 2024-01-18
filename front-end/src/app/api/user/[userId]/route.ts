import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
    const { params } = context

    const response = await fetch(`https://localhost:7229/user/${params.userId}`);

    const json = await response.json();

    return NextResponse.json(json)
}