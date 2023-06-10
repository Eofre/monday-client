import { FC } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router";
import { Container } from "../Container";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
