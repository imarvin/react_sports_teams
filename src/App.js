import React from "react";
import './App.scss';
import TeamsContextProvider from "./context/TeamsContext";
import TeamContextProvider from "./context/TeamContext";
import Nav from "./components/Nav";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
        <TeamsContextProvider>
          <TeamContextProvider>
            <Nav />
            <main className="main">
              <Team />
            </main>
          </TeamContextProvider>
        </TeamsContextProvider>
    </div>
  );
}

export default App;