import { FC } from "react";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  );
};

export default App;
