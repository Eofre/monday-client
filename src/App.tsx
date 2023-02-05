import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
