import { FC } from "react";
import { HeaderGame } from "../HeaderGame";
import { Container } from "../Container";
import { Outlet } from "react-router";

export const LayoutGame: FC = () => (
  <>
    <HeaderGame />
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  </>
);
