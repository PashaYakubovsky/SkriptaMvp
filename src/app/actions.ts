"use server";

import axios from "axios";

export async function createFilmScript(body: Record<string, any>) {
    const response = await axios.post("api/filmScript", {
        headers: {
            "Content-Type": "application/json",
        },
        body,
    });

    return response.data;
}
