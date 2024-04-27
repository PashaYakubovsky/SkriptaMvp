import axios from "axios";

export const createNewEpisode = async ({
    history,
    seriesId,
}: {
    history: { role: string; content: string }[];
    seriesId: string;
}) => {
    const h = [...history, { role: "user", content: "Create new episode" }];
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
