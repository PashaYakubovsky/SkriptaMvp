import axios from "axios";

export const createNewEpisode = async ({
    history,
    seriesId,
    message,
}: {
    history: { role: string; content: string }[];
    seriesId: string;
    message?: { role: string; content: string };
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
