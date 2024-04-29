import { model, models, Schema } from "mongoose";

export interface IUser {
    name?: string;
    email: string;
    passwordHash?: string;
    id: string;
    lastLogin?: string;
    picture?: string;
    accessToken?: string;
}
const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: false,
        },
        lastLogin: {
            type: String,
            required: false,
        },
        picture: {
            type: String,
            required: false,
        },
        accessToken: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            virtuals: true,
            transform: (_, ret) => {
                delete ret._id;
            },
        },
    }
);
const User = models.User || model("User", UserSchema);
export default User;
