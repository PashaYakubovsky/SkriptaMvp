import connectMongo from "@/utils/connectMongo";
import { HttpStatusCode } from "axios";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body = await req.json();
        debugger;

        return NextResponse.json(
            { data: {}, message: "Your Series created" },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}
