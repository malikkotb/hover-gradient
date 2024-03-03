"use client";
import { useState, useEffect } from "react";
function generateRandomString(length) {
  return Array.from(
    { length },
    () => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 62)]
  ).join("");
}

export default function Home() {
  const [string, setString] = useState(""); // Initialize with empty string

  useEffect(() => {
    const randomString = generateRandomString(10000); // Now this runs only on client side
    setString(randomString);
  }, []);

  return (
    <main className="bg-black flex justify-center items-center w-full h-screen">
      <div
        className="h-[70vh] w-[50vw] text-sm rounded-lg overflow-hidden
      "
      >
        <p
          onMouseMove={() => setString(generateRandomString(10000))}
          className="relative text-white top-[-5%] whitespace-pre-wrap break-words"
        >
          {string}
        </p>
      </div>
      <div
        className="h-[70vh] w-[50vw] bg-white opacity-50 text-sm rounded-lg overflow-hidden
      "
        style={{
          maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
        }}
      >
        {/* <p
          onMouseMove={() => setString(generateRandomString(10000))}
          className="relative text-white top-[-5%] whitespace-pre-wrap break-words"
        >
          {string}
        </p> */}
      </div>
    </main>
  );
}
