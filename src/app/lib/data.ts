import { createClient } from "@vercel/postgres";
import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore } from "next/cache"

// export async function connectToDB() {
//     const client = createClient()
//     await client.connect()

//     try {
//         if(client) {
//             console.log('connected to DB')
//             retur n client
//         }
//     } catch (err) {
//         console.log('error connecting to DB', err)
//     }
// }

export async function getCapsules() {
    try{
        noStore()
        const data = await sql`SELECT id, title, unlockdate As "unlockDate" , ispublic As "isPublic" FROM capsules ORDER BY title`
    return data.rows
    } catch (err) {
        console.log('error fetching capsules', err)
        throw err
    }
}

export async function getCapsule(id) {
  try {
    const data = await sql`
      SELECT 
        id,
        title,
        unlockdate AS "unlockDate",
        (unlockdate >= CURRENT_DATE) AS "sealed",
        CASE 
          WHEN unlockdate <= CURRENT_DATE THEN message 
          ELSE NULL 
        END AS message
      FROM capsules
      WHERE id = ${id}
    `;
    return data.rows;
  } catch (err) {
    console.log('error fetching capsule', err);
    throw err;
  }
}
