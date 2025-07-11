"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loader from "./components/Loading"; // Import the Loader component
import Footer from "./components/Footer";

export default function RootClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
}
