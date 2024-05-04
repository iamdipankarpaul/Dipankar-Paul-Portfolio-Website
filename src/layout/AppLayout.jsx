import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Outlet } from "react-router-dom";

import Navlinks from "./Navlinks";
import AppHeader from "./AppHeader";

const AppLayout = () => {
  const [opened, { toggle: toggleNavbar, close: closeNavbar }] =
    useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      {/* header */}
      <AppShell.Header>
        <AppHeader opened={opened} toggleNavbar={toggleNavbar} />
      </AppShell.Header>
      {/* navbar */}
      <AppShell.Navbar p="md">
        <Navlinks closeNavbar={closeNavbar} />
      </AppShell.Navbar>
      {/* main */}
      <AppShell.Main>
        {/* Outlet */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
