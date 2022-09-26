import type { NextPage } from "next";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { sectionsTitle } from "../utilities/statics";

const Home: NextPage = () => {
    const [ selectedSection, setSelectedSection ] = useState<typeof sectionsTitle[number]>(sectionsTitle[0])

    return (
        <>
            <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            <main className="h-full w-full">
                <Landing />
            </main>
            <Footer selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        </>
    )
}

export default Home