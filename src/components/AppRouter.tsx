import { FC } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import LearnModulePage from "../pages/learnModulePage/LearnModulePage";
import modules from "../data/modules";
import HardModePage from "../pages/hardModePage/HardModePage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home learnModules={modules} />} />
      <Route
        index
        path="/module/:id"
        element={<LearnModulePage learnModules={modules} />}
      />
      <Route
        path="/module/:id/hard"
        element={<HardModePage learnModules={modules} />}
      />
    </Routes>
  );
};

export default AppRouter;
