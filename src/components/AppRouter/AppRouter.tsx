import { FC } from "react";
import { Route, Routes } from "react-router";
import { EducationalBlockPage } from "../../pages/EducationalBlockPage";
import { GameModeLetterTimePage } from "../../pages/GameModeLetterTimePage";
import { GameModesPage } from "../../pages/GameModesPage";
import { HomePage } from "../../pages/HomePage";
import { Layout } from "../Layout";
import { LayoutGame } from "../LayoutGame";
import { BlocksPage } from "../../pages/BlocksPage";

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<HomePage />} />
      <Route index path="/module/:id" element={<EducationalBlockPage />} />
      <Route index path="/module/:id/modes" element={<GameModesPage />} />
    </Route>
    <Route path="/blocks" element={<Layout />}>
      <Route index path="/blocks" element={<BlocksPage />} />
    </Route>
    <Route path="/module/:id/modes/" element={<LayoutGame />}>
      <Route
        index
        path="/module/:id/modes/hard"
        element={<GameModeLetterTimePage />}
      />
    </Route>
  </Routes>
);
