import { FC } from "react";
import { Route, Routes } from "react-router";

import Home from "../pages/home/Home";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
