import { Box } from "@mantine/core";
import { Folder } from "@phosphor-icons/react";

import classes from "./Contact.module.css";
import Topbar from "../../components/Topbar";

const ContactPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="Projects" icon={<Folder size={24} />} />
      <Box>
        <div>Contact Page</div>
      </Box>
    </Box>
  );
};

export default ContactPage;
