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
    const session = await getServerSession(authConfig);
    const userId = session ? (session as { user: { id: string } }).user.id : null;

    const data = await sql`
      SELECT 
      "Capsule".id,
      "Capsule".title,
      "Capsule"."unlockDate" AS "unlockDate",
      ("Capsule"."unlockDate" >= CURRENT_DATE) AS "sealed",
      CASE 
        WHEN "Capsule"."unlockDate" <= CURRENT_DATE THEN "Capsule".message 
        ELSE NULL 
      END AS message,
      "Capsule"."isPublic",
      "Capsule"."userId"
      FROM "Capsule"
      WHERE "Capsule".id = ${id}
      LIMIT 1
    `;

    const capsule = data.rows[0];
    if (!capsule) return null;

    // If not public and not the owner, return null
    if (!capsule.isPublic && capsule.userId !== userId) {
      return null;
    }

    // Remove userId and isPublic from result if you don't want to expose them
    delete capsule.userId;
    delete capsule.isPublic;

    return [capsule];
    return data.rows;
  } catch (err) {
    console.log('error fetching capsule', err);
    throw err;
  }
}