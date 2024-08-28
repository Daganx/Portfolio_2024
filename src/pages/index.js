import React, { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer/Footer";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
