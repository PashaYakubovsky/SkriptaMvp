import connectMongo from "@/utils/connectMongo";
import { HttpStatusCode } from "axios";
import FilmScript from "@/models/FilmScript";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body = await req.json();

        const existingFilmScript = await FilmScript.findOne({ userId: body.userId });
        if (existingFilmScript) {
            // update the existing film script
            const updatedFilmScript = await FilmScript.findOneAndUpdate(
                { userId: body.userId },
                body,
                { new: true }
            );
            return NextResponse.json(
                { filmScript: updatedFilmScript, message: "Your FilmScript has been updated" },
                { status: HttpStatusCode.Ok }
            );
        }

        const filmScript = await FilmScript.create(body);
        return NextResponse.json(
            { filmScript, message: "Your FilmScript has been created" },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}
export async function GET(req: NextRequest) {
    const userId = "xwxoyk";
    if (!userId) {
        return NextResponse.json(
            { message: "userId is required" },
            { status: HttpStatusCode.BadRequest }
        );
    }
    try {
        await connectMongo();
        const FilmScripts = await FilmScript.find({ userId });
        return NextResponse.json({ data: FilmScripts });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
