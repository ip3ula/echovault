import { db } from '@vercel/postgres'

const users = [
  {
    id: 'b3a1f7d2-9c44-4d56-b9f9-5a7e9f111001',
    name: 'Paula',
    email: 'ip3ula@gmail.com',
  },
  {
    id: 'e5d2b7f3-2b54-4a67-91b7-6b7e3a222002',
    name: 'Alex',
    email: 'alex@example.com',
  },
  {
    id: 'f9c3d8a4-3c65-4b78-bad1-7c8f4b333003',
    name: 'Jordan',
    email: 'jordan@example.com',
  }
]

const capsulesArray = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    title: "Letter to My Future Self",
    message: "Hey future me,\nTake breaks and celebrate small wins. You’re doing great.",
    unlockDate: "2024-01-01T00:00:00.000Z",
    createdAt: "2023-05-15T12:00:00.000Z",
    isPublic: false,
    media: {
      type: "image",
      url: "https://example.com/image1.jpg"
    },
    userId: users[0].id
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    title: "2025 Memories",
    message: "This year had it all. A reminder to slow down and appreciate what matters.",
    unlockDate: "2025-12-31T00:00:00.000Z",
    createdAt: "2025-04-02T15:10:00.000Z",
    isPublic: true,
    media: {
      type: "audio",
      url: "https://example.com/video1.mp4"
    },
    userId: users[0].id
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    title: "Alex's First Capsule",
    message: "Just starting this time capsule. Excited for the future!",
    unlockDate: "2025-06-01T00:00:00.000Z",
    createdAt: "2024-06-01T10:00:00.000Z",
    isPublic: false,
    media: {},
    userId: users[1].id
  },
  {
    id: '44444444-4444-4444-4444-444444444444',
    title: "Jordan's Travel Diary",
    message: "Memories from my 2025 Europe trip.",
    unlockDate: "2026-01-01T00:00:00.000Z",
    createdAt: "2025-01-10T18:00:00.000Z",
    isPublic: true,
    media: {
      type: "image",
      url: "https://example.com/travel.jpg"
    },
    userId: users[2].id
  },
  {
    id: '55555555-5555-5555-5555-555555555555',
    title: "Alex's Secret Message",
    message: "Don't open this until 2030!",
    unlockDate: "2030-01-01T00:00:00.000Z",
    createdAt: "2025-05-01T09:30:00.000Z",
    isPublic: false,
    media: {},
    userId: users[1].id
  }
]

export async function seed() {
  const client = await db.connect()

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        createdAt TIMESTAMPTZ DEFAULT now()
      )
    `

    await client.sql`
      CREATE TABLE IF NOT EXISTS capsules (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        unlockdate TIMESTAMPTZ NOT NULL,
        createdat DATE DEFAULT now() NOT NULL,
        isPublic BOOLEAN NOT NULL,
        media JSONB,
        userid UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL
      )
    `

    await Promise.all(
      users.map(user =>
        client.sql`
          INSERT INTO users (id, name, email)
          VALUES (${user.id}, ${user.name}, ${user.email})
          ON CONFLICT (id) DO NOTHING
        `
      )
    )

    await Promise.all(
      capsulesArray.map(capsule =>
        client.sql`
          INSERT INTO capsules (id, title, message, unlockDate, createdAt, isPublic, media, userId)
          VALUES (
            ${capsule.id},
            ${capsule.title},
            ${capsule.message},
            ${capsule.unlockDate},
            ${capsule.createdAt},
            ${capsule.isPublic},
            ${capsule.media},
            ${capsule.userId}
          )
          ON CONFLICT (id) DO NOTHING
        `
      )
    )
  } catch (err) {
    console.error('Error seeding data:', err)
    throw err
  } finally {
    await client.end()
  }
}

seed()
  .then(() => {
    console.log('Seeding complete!')
  })
  .catch((err) => {
    console.error('Seeding failed:', err)
    process.exit(1)
  })
