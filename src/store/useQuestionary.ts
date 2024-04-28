import { create } from "zustand";

type State = {
    episodes: number;
    episodeLength: number;
    genre: string;
    subGenre: string;
    budget: string;
    primaryStoryLocation: string;
    mainCharactersLength: number;
    mainCharacterEthnicity: string;
    desiredPrimaryFilmingLocation: string;
    desiredPrimaryFilmingLocations: string;
    mainCharacters: string[];
    emotionalEvents: string[];
    storyReference: string;
    language: string;
    additionalElements: string;

    errors: {
        episodes: string;
        episodesLength: string;
        primaryStoryLocation: string;
        genre: string;
        subGenre: string;
        budget: string;
    };

    setError: (a1: string, a2: keyof State["errors"]) => void;
    setConfig: (config: Partial<State> | ((state: State) => Partial<State>)) => void;
};

export const useQuestionary = create<State>((set, get) => ({
    episodes: 1,
    episodeLength: 3,
    genre: "",
    subGenre: "",
    budget: "",
    primaryStoryLocation: "",
    mainCharacters: [],
    mainCharacterEthnicity: "",
    desiredPrimaryFilmingLocation: "",
    language: "english",
    additionalElements: "",
    storyReference: "",
    emotionalEvents: [],
    desiredPrimaryFilmingLocations: "",
    mainCharactersLength: 1,

    errors: {
        episodes: "",
        episodesLength: "",
        primaryStoryLocation: "",
        budget: "",
        genre: "",
        subGenre: "",
    },

    setConfig: config => {
        if (typeof config === "function") {
            set(state => config(state));
        } else {
            set(config);
        }
    },

    setError: (error, type) => {
        const errors = get().errors;
        errors[type] = error;
        set({
            errors,
        });
    },
}));
