import type { NextPage } from "next";
import { useState } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Statistics from "../components/Statistics";
import Vision from "../components/Vision";
import { sectionsTitle } from "../utilities/statics";

const Home: NextPage = () => {
    const [ selectedSection, setSelectedSection ] = useState<typeof sectionsTitle[number]>(sectionsTitle[0])

    return (
        <>
            <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            <main>
                <Landing />
                <Features />
                <Vision />
                <Statistics />
            </main>
            <Footer selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        </>
    )
}

export default Home