import { create } from "zustand";

type State = {
    episodes: number;
    episodeLength: number;
    genre: string;
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

    setConfig: (config: Partial<State> | ((state: State) => Partial<State>)) => void;
};

export const useQuestionary = create<State>((set, get) => ({
    episodes: 1,
    episodeLength: 3,
    genre: "Action",
    budget: "medium",
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

    setConfig: config => {
        if (typeof config === "function") {
            set(state => config(state));
        } else {
            set(config);
        }
    },
}));
