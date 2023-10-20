import { User } from "@/app/store/UserProvider";
import { NextApiRequest, NextApiResponse } from "next";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export async function GET(req: Request) {
    try
    {
        if(req.url.includes('user?id=')) {
            const id = req.url.split('user?id=')[1]
            const response = await fetch(`https://localhost:7229/user/${id}`);
            const json = await response.json();
            return new Response(JSON.stringify(json), {status: 200});
        }
        const response = await fetch(`https://localhost:7229/user`);
        const json = await response.json();
        return new Response(JSON.stringify(json), {status: 200});
    }
    catch(e)
    {
        return new Response(JSON.stringify(e))
    }
}
