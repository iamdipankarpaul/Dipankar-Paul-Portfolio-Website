// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, Box, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

// layout components
import AppNavbar from "./AppNavbar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

// components
import CustomCursor from "../components/cursor/CustomCursor";
// import Preloader from "../components/preloader/Preloader";

// constants
import personalData from "../constants";
import navLinks from "../constants/navLinks";

const AppLayout = () => {
  // const [preLoading, setPreLoading] = useState(true);
  const [opened, { toggle: toggleNavbar, close: closeNavbar }] =
    useDisclosure();

  const isDesktop = useMediaQuery("(min-width: 48em)");

  return (
    <>
      {/* {preLoading && <Preloader setLoading={setPreLoading} />} */}
      {/* {!preLoading && isDesktop && <CustomCursor />} */}
      {isDesktop && <CustomCursor />}
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
          <AppFooter />
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default AppLayout;

/*
{preLoading && <Preloader setLoading={setPreLoading} />}
{!preLoading && isDesktop && <CustomCursor />}
*/
