"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loader from "./components/Loading"; // Import the Loader component

export default function RootClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Simulate loading for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader
        isLoading={isLoading}
        color="#6C2BD9" // Use the primary color for the loader
        size={150}
      />
      {!isLoading && (
        <div> {/* Apply padding here */}
          <Header />
          {children}
        </div>
      )}
    </>
  );
}
