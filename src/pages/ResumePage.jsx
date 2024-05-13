import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Center } from "@mantine/core";
import { ReadCvLogo } from "@phosphor-icons/react";

import styles from "./pages.module.css";

import Topbar from "../components/Topbar";

const ResumePage = () => {
  return (
    <Box className={styles.wrapper}>
      {/* seo */}
      <Helmet>
        <title>Dipankar Paul's Resume</title>
        <meta
          name="description"
          content="Explore Dipankar Paul's projects and skills through his resume. Download the resume to learn more about his experience in frontend development and passion for writing insightful tech blogs."
        />
      </Helmet>
      {/* topbar */}
      <Topbar label="README.md" icon={<ReadCvLogo size={24} />} />
      {/* page content */}
      <Box my="sm" mih='100vh'>
        {/* <Center>Coming Soon...</Center> */}
        <iframe
          src="/Dipankar-Paul-Resume_2024-05-13.pdf"
          width="100%"
          height="1200px"
        />
      </Box>
    </Box>
  );
};

export default ResumePage;
