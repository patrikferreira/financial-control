import { User } from "@/app/store/UserProvider";
import { NextApiRequest, NextApiResponse } from "next";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export async function POST(req: Request) {
    try
    {
        const response = await fetch(`https://localhost:7229/Auth`, {method: 'POST', body: req.body});
        const json = await response.json();
        return new Response(JSON.stringify(json), {status: 200});
    }
    catch(e)
    {
        return new Response(JSON.stringify(e))
    }
}
