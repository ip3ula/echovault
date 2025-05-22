import { CapsuleQuery } from "./defintions";

const capsules: CapsuleQuery[] = [
    {
        id: "cps-001",
        title: "Letter to My Future Self",
        message: "Hey future me,\nTake breaks and celebrate small wins. You’re doing great.",
        unlockDate: "2024-01-01T00:00:00.000Z",
        createdAt: "2023-05-15T12:00:00.000Z",
        isPublic: false,
        media: {
            type: "image",
            url: "https://example.com/image1.jpg"
        },
        sealed: false,
        userId: "user-123"
    },
    {
        id: "cps-002",
        title: "2025 Memories",
        message: "This year had it all. A reminder to slow down and appreciate what matters.",
        unlockDate: "2025-12-31T00:00:00.000Z",
        createdAt: "2025-04-02T15:10:00.000Z",
        isPublic: true,
        media: {
            type: "audio",
            url: "https://example.com/video1.mp4"
        },
        sealed: true,
        userId: "user-123"
    },
    {
        id: "cps-003",
        title: "Don’t Open Yet!",
        message: "Hope you're still chasing the dream and being kind.",
        unlockDate: "2027-05-01T00:00:00.000Z",
        createdAt: "2025-05-01T08:45:00.000Z",
        isPublic: false,
        media: null,
        sealed: false,
        userId: "user-123"
    },
    {
        id: "cps-004",
        title: "The Day I Learned to Let Go",
        message: "Writing this after something painful. I hope you're healing.",
        unlockDate: "2026-03-20T00:00:00.000Z",
        createdAt: "2025-03-20T18:00:00.000Z",
        isPublic: true,
        media: {
            type: "audio",
            url: "https://example.com/audio1.mp3"
        },
        sealed: true,
        userId: "user-123"
    },
    {
        id: "cps-005",
        title: "A Song for You",
        message: "You wrote a song. Did you ever finish it? Did anyone hear it?",
        unlockDate: "2026-10-01T00:00:00.000Z",
        createdAt: "2025-05-12T14:00:00.000Z",
        isPublic: false,
        media: {
            type: "audio",
            url: "https://example.com/song-draft.mp3"
        },
        sealed: true,
        userId: "user-123"
    },
    {
        id: "cps-006",
        title: "Life Goals Check-In",
        message: "This is your goal check-in. Did you achieve what you said you would?",
        unlockDate: "2026-06-01T00:00:00.000Z",
        createdAt: "2025-01-01T00:00:00.000Z",
        isPublic: false,
        media: null,
        sealed: true,
        userId: "user-123"
    },
    {
        id: "cps-007",
        title: "Capsule for My Future Child",
        message: "I don’t know you yet, but I hope the world is gentle to you.",
        unlockDate: "2035-05-01T00:00:00.000Z",
        createdAt: "2025-05-10T09:30:00.000Z",
        isPublic: true,
        media: null,
        sealed: true,
        userId: "user-123"
    },
    {
        id: "cps-008",
        title: "Mini Time Capsule",
        message: "Just testing how these things work.",
        unlockDate: "2025-06-01T00:00:00.000Z",
        createdAt: "2025-05-14T10:00:00.000Z",
        isPublic: false,
        media: null,
        sealed: false,
        userId: "user-123"
    },
    {
        id: "cps-009",
        title: "Goodbye Letter",
        message: "This is hard to write. You’ll know when you read it.",
        unlockDate: "2026-09-15T00:00:00.000Z",
        createdAt: "2025-05-13T22:30:00.000Z",
        isPublic: false,
        media: {
            type: "image",
            url: "https://example.com/farewell.jpg"
        },
        sealed: true,
        userId: "user-123"
    },
    {
        id: "cps-010",
        title: "The Book I Was Writing",
        message: "You had 3 chapters done. Did you ever publish it?",
        unlockDate: "2027-01-01T00:00:00.000Z",
        createdAt: "2025-05-05T13:20:00.000Z",
        isPublic: true,
        media: {
            type: "image",
            url: "https://example.com/book-cover.jpg"
        },
        sealed: true,
        userId: "user-123"
    }
];
                                                            export default capsules;