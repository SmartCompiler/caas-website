import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Statistics from "../components/Statistics";
import Vision from "../components/Vision";
import { sectionsTitle } from "../utilities/statics";

interface HomeInt {
    setSelectedSection: React.Dispatch<React.SetStateAction<typeof sectionsTitle[number]>>
}
function Home({ setSelectedSection}:HomeInt) {

    useEffect(() => {
        setSelectedSection(sectionsTitle[0])
      }, [setSelectedSection])
      
    return (
        <>
            <main className="overflow-x-hidden">
                <Landing />
                <Features />
                <Vision />
                <Statistics />
            </main>
        </>
    )
}

export default Home