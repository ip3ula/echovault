import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"], // Add this line
  },
  env: {
    NEXT_PUBLIC_GOOGLE_GENAI_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY, 
  }
};

export default nextConfig;
