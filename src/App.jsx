import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ContentSection from "./components/ContentSection/ContentSection";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <ContentSection />
        </div>
    );
}

export default App;
