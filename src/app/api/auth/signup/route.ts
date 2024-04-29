import connectMongo from "@/utils/connectMongo";
import { HttpStatusCode } from "axios";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body = await req.json();
        const secret = process.env.NEXTAUTH_SECRET;

        if (!secret) throw new Error("Secret not found");

        const token = jwt.sign(body, secret, {
            expiresIn: "1h",
            algorithm: "HS256",
        });

        const passwordHash = crypto.createHash("sha256").update(body.password).digest("hex");

        delete body.password;
        delete body.repeatPassword;

        const user = await User.create({
            passwordHash,
            email: body.email,
            name: body?.name ?? "",
        });
        user.passwordHash = passwordHash;
        user.lastLogin = new Date().toISOString();

        await user.save();

        return NextResponse.json(
            {
                data: {
                    token,
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
