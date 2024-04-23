"use server";

export async function createFilmScript(body: Record<string, any>) {
    const response = await fetch("http://localhost:3000/api/filmScript", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return response.json();
}
