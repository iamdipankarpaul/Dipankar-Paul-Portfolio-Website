import { Outlet } from "react-router-dom";
import { AppShell, Box, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// components
import AppNavbar from "./AppNavbar";
import AppHeader from "./AppHeader";

// constants
import personalData from "../constants";
import navLinks from "../constants/navLinks";

const AppLayout = () => {
  const [opened, { toggle: toggleNavbar, close: closeNavbar }] =
    useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: { base: 200, md: 250 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* header */}
      <AppShell.Header>
        <AppHeader opened={opened} toggleNavbar={toggleNavbar} />
      </AppShell.Header>
      {/* navbar */}
      <AppShell.Navbar p="md">
        <Box>
          <AppNavbar links={navLinks} closeNavbar={closeNavbar} />
          <Text pb="xs" c="dimmed">
            WHERE TO FIND ME
          </Text>
          <AppNavbar
            links={personalData.socialLinks}
            closeNavbar={closeNavbar}
          />
        </Box>
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
