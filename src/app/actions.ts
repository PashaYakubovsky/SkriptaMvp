import axios from "axios";

export async function createFilmScript(body: Record<string, any>) {
    const response = await axios.post("api/filmScript", body, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.data;
}
