'use client'

import Image from 'next/image';

export default function UserData({user}) {
    return (
        <div className="flex items-center gap-2 sm:gab-3 mb-10 w-full">
            {user.image ? (
        <Image
          src={user.image}
          alt="User Avatar"
          className="size-7 lg:size-12 border border-node"
          width={40}
          height={40}
        />
            ) : (
        <span className="size-9 lg:size-12 flex items-center justify-center bg-sageGreen border border-node">
          {/* Heroicons User Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z"
            />
          </svg>
        </span>
            )}
            <div>
        <h1 className="text-white font-extrabold text-lg lg:text-2xl">{user.name}</h1>
        <p className="text-nistyBlue text-sm lg:text-base">{user.email}</p>
            </div>
          </div>
    )
}