import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth/next";
import { authConfig } from "../../../../auth.config";

export async function POST(request: Request) {
    const { id, title, message, unlockDate, media, isPublic } = await request.json();
    const session = await getServerSession(authConfig);
    try {
        const userId = (session as { user?: { id?: string } })?.user?.id;
        // Use the correct column name "unlockDate" (case-sensitive)
        const result = await sql`
            INSERT INTO "Capsule" (id, title, message, "unlockDate", media, "isPublic", "userId")
            VALUES (${id}, ${title}, ${message}, ${unlockDate}, ${media}, ${isPublic}, ${userId})
            RETURNING *`;
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        console.error("Error inserting data:", error);
        return new Response("Error inserting data", { status: 500 });
    }
}