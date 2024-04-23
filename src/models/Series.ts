import { model, models, Schema } from "mongoose";

export interface ISeries {
    userId: string;
    filmScriptId: string;
    history: JSON;
}
const SeriesSchema = new Schema<ISeries>(
    {
        filmScriptId: {
            type: String,
            required: true,
            unique: false,
        },
        userId: {
            type: String,
            required: true,
        },
        history: {
            type: JSON,
            required: true,
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
const Series = models.Series || model("Series", SeriesSchema);
export default Series;
