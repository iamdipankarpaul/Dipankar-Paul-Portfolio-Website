import { Box, Flex, Divider } from "@mantine/core";
import { PaperPlaneTilt } from "@phosphor-icons/react";

import classes from "./Contact.module.css";

import Topbar from "../../components/Topbar";
import ContactForm from "../../components/ContactForm";
import ContactDetails from "../../components/ContactDetails";
import personalData from "../../constants";

const ContactPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="Contact Me" icon={<PaperPlaneTilt size={24} />} />
      {/* page body */}
      <Box
        py={{ base: "sm", sm: "lg" }}
        px={{ base: "xs", sm: "lg", md: "50px" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ base: "center", md: "space-evenly" }}
        >
          {/* contact details */}
          <Box w={"100%"}>
            <Flex h="100%" align="center">
              <ContactDetails personalData={personalData} />
            </Flex>
          </Box>

          {/* divider */}
          <Divider size="sm" orientation="vertical" />

          {/* contact form */}
          <Box w={"100%"}>
            <ContactForm />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactPage;
