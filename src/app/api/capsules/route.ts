import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
    const { id, title, message, unlockDate, media, isPublic } = await request.json();
    try {
        const result = await sql`INSERT INTO capsules (id, title, message, unlockdate, media, ispublic, userid) VALUES (${id}, ${title}, ${message}, ${unlockDate}, ${media}, ${isPublic}, ${"b3a1f7d2-9c44-4d56-b9f9-5a7e9f111001"}) RETURNING *`;
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        console.error("Error inserting data:", error);
        return new Response("Error inserting data", { status: 500 });
    }
}