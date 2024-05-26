import { aiResponse } from "@/app/response/page";
import axios from "axios";

export const createNewEpisode = async ({
    history,
    seriesId,
    message,
}: {
    history: aiResponse[];
    seriesId: string;
    message?: aiResponse;
}) => {
    const h = [...history, message ?? { role: "user", content: "Create new episode" }];
    const response = await axios.post(`/api/series/${seriesId}`, { history: h });
    return response.data;
};

export const getSeries = async ({ userId }: { userId: string }) => {
    try {
        const response = await axios.get("/api/series?userId=" + userId);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
