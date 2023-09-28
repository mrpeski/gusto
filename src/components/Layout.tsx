import React from "react"
import TopNavigation from "./TopNavigation"
import Sidebar from "./Sidebar"


const Layout = ({children}) => {
    return <section className="Flex">
            <section className="Sidebar" children={<Sidebar/>} />
            <main className="Content-wrapper">
                <section className="Navigation" children={<TopNavigation />}/>
                <div className="Content" children={children}/>
            </main>
        </section>
}

export default Layout