import { model, models, Schema } from "mongoose";

export interface IFilmScript {
    userId: string;
    title: string;
    episodes: number;
    episodeLength: number;
    genre: string;
    subGenre: string;
    budget: string;
    primaryStoryLocation: string;
    mainCharactersLength?: number;
    mainCharacterEthnicity: string;
    desiredPrimaryFilmingLocation: string;
    desiredPrimaryFilmingLocations?: string;
    // [type], [age]
    mainCharacters: string[];
    emotionalEvents?: string[];
    storyReference?: string;
    language: string;
    additionalElements?: string;
}
const FilmScriptSchema = new Schema<IFilmScript>(
    {
        additionalElements: String,
        budget: String,
        desiredPrimaryFilmingLocation: String,
        desiredPrimaryFilmingLocations: String,
        emotionalEvents: [String],
        episodeLength: Number,
        episodes: Number,
        genre: String,
        subGenre: String,
        language: String,
        mainCharacters: [String],
        mainCharactersLength: Number,
        mainCharacterEthnicity: String,
        primaryStoryLocation: String,
        storyReference: String,
        title: String,
        userId: {
            type: String,
            required: true,
            unique: true,
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
const FilmScript = models.FilmScript || model("FilmScript", FilmScriptSchema);
export default FilmScript;
