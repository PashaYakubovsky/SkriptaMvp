import { openai } from "@/lib/openai";
import Series from "@/models/Series";
import connectMongo from "@/utils/connectMongo";
import { HttpStatusCode } from "axios";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body = await req.json();
        const id = req.url.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: "id is required" },
                { status: HttpStatusCode.BadRequest }
            );
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: body.history,
        });

        const history = body.history.slice();
        history.push(response.choices[0].message);

        const series = await Series.findByIdAndUpdate(
            id,
            {
                ...body,
                history,
            },
            { new: true }
        );

        return NextResponse.json(
            { series, message: "Your Series updated" },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectMongo();
        const id = req.url.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { message: "id is required" },
                { status: HttpStatusCode.BadRequest }
            );
        }

        await Series.findByIdAndDelete(id);

        return NextResponse.json({ message: "Your Series deleted" }, { status: HttpStatusCode.Ok });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

export async function GET(req: NextRequest) {
    const id = req.url.split("/").pop();

    try {
        await connectMongo();
        const series = await Series.findOne({ _id: id });

        return NextResponse.json({ data: series });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
