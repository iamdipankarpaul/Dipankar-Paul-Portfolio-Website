import { Box } from "@mantine/core";
import {  PaperPlaneTilt } from "@phosphor-icons/react";

import classes from "./Contact.module.css";
import Topbar from "../../components/Topbar";

const ContactPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="Contact Me" icon={<PaperPlaneTilt size={24} />} />
      <Box>
        <div>Contact Page</div>
      </Box>
    </Box>
  );
};

export default ContactPage;
