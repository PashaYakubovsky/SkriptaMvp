import User from "@/models/User";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export async function POST(req: NextRequest) {
    try {
        debugger;
        await connectMongo();
        const body = await req.json();

        if (!body.accessToken) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: HttpStatusCode.Unauthorized }
            );
        }

        const userExists = await User.findOne({ email: body.email });
        if (userExists) {
            userExists.lastLogin = new Date().toISOString();
            await userExists.save();
            return NextResponse.json(
                { message: "User already exists" },
                { status: HttpStatusCode.Ok }
            );
        }

        const user = await User.create({
            email: body.email,
            name: body.name,
            picture: body.picture,
            accessToken: body.accessToken,
        });

        user.lastLogin = new Date().toISOString();

        await user.save();

        return NextResponse.json(
            {
                data: {
                    user,
                },
                message: "User created",
            },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}
