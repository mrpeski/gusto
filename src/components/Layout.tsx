import React from "react"

const Layout = ({children}) => {
    return <section className="Flex">
        <section className="Sidebar">
            
        </section>
        <main className="Content-wrapper">
            <section className="Navigation">
                <nav className="Navigation-list">
                    <a className="Navigation-link" href="">Program Details</a>
                    <a className="Navigation-link active" href="">Application Form</a>
                    <a className="Navigation-link" href="">Workflow</a>
                    <a className="Navigation-link" href="">Preview</a>
                </nav>
            </section>
            <div className="Content">{children}</div>
        </main>
    </section>
}

export default Layout