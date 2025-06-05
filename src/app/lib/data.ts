import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore } from "next/cache"
import { getServerSession } from "next-auth/next"
import { authConfig } from "../../../auth.config"

export async function getCapsules() {
  const session = await getServerSession(authConfig)
  if (!session) {
    throw new Error("Unauthorized access: No session found");
  }
  const userId = (session as { user: { id: string; email: string; name?: string } }).user.id;
  console.log('user', userId)
  try {
    noStore();
    const data = await sql`
      SELECT 
        "Capsule".id, 
        "Capsule".title, 
        "Capsule"."unlockDate" AS "unlockDate", 
        "Capsule"."isPublic" AS "isPublic",
        "Capsule".media,
        "User".name AS "userName",
        "User".email AS "userEmail"
      FROM "Capsule"
      JOIN "User" ON "Capsule"."userId" = "User".id
      WHERE "User".id = ${userId}
      ORDER BY "Capsule".title
    `;
    return data.rows;
  } catch (err) {
    console.log('error fetching capsule', err);
    throw err;
  }
}

export async function getPublicCapsules() {
  try {
    noStore();
    const data = await sql`
      SELECT
        "Capsule".id,
        "Capsule".title,
        "Capsule"."unlockDate" AS "unlockDate",
        "Capsule"."isPublic" AS "isPublic"
      FROM "Capsule"
      WHERE "Capsule"."isPublic" = true
      ORDER BY "Capsule"."unlockDate" DESC
      LIMIT 3
    `;
    return data.rows;
  } catch (err) {
    console.log('error fetching public capsule', err);
    throw err;
  }
}

export async function getCapsule(id: string) {
  try {
    const data = await sql`
      SELECT 
        id,
        title,
        "unlockDate" AS "unlockDate",
        ("unlockDate" >= CURRENT_DATE) AS "sealed",
        CASE 
          WHEN "unlockDate" <= CURRENT_DATE THEN message 
          ELSE NULL 
        END AS message
      FROM "Capsule"
      WHERE id = ${id}
    `;
    return data.rows;
  } catch (err) {
    console.log('error fetching capsule', err);
    throw err;
  }
}