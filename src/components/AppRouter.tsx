import { FC } from "react";
import { Route, Routes } from "react-router";

import Home from "../pages/home/Home";
import LearnModulePage from "../pages/learnModulePage/LearnModulePage";
import modules from "../data/modules";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route
        path="/learn/:id"
        element={<LearnModulePage learnModules={modules} />}
      />
    </Routes>
  );
};

export default AppRouter;
