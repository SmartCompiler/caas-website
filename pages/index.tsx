import type { NextPage } from "next";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { sectionsTitle } from "../utilities/statics";

const Home: NextPage = () => {
    const [ selectedSection, setSelectedSection ] = useState<typeof sectionsTitle[number]>(sectionsTitle[0])

    return (
        <>
            <Header selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            <main className="mt-header mb-footer h-full w-full">
                hi
            </main>
            <Footer selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        </>
    )
}

export default Home