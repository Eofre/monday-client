import { FC } from "react";
import { Route, Routes } from "react-router";
import { EducationalBlockPage } from "../../pages/EducationalBlockPage";
import { GameModesPage } from "../../pages/GameModesPage";
import { HomePage } from "../../pages/HomePage";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => (
  <Routes>
    <Route index path="/" element={<HomePage />} />
    <Route index path="/module/:id" element={<EducationalBlockPage />} />
    <Route index path="/module/:id/modes" element={<GameModesPage />} />
    {/* <Route
        index
        path="/module/:id/modes/hard"
        element={<HardModePage />}
      /> */}
  </Routes>
);
