import connectMongo from "@/utils/connectMongo";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import User from "@/models/User";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body = await req.json();

        const user = await User.findOne({ email: body.email });
        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: HttpStatusCode.NotFound }
            );
        }

        const passwordHash = crypto.createHash("sha256").update(body.password).digest("hex");

        if (user.passwordHash !== passwordHash) {
            return NextResponse.json(
                { message: "Password incorrect" },
                { status: HttpStatusCode.BadRequest }
            );
        }

        user.lastLogin = new Date().toISOString();
        await user.save();

        return NextResponse.json(
            {
                data: {
                    user,
                },
                message: "Success",
            },
            { status: HttpStatusCode.Created }
        );
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}
