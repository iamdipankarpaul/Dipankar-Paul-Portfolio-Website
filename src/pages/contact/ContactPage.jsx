import { useEffect } from "react";
import { Box, Flex, Divider } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { PaperPlaneTilt } from "@phosphor-icons/react";

import classes from "./Contact.module.css";

import Topbar from "../../components/Topbar";
import ContactForm from "../../components/ContactForm";
import ContactDetails from "../../components/ContactDetails";
import personalData from "../../constants";

const ContactPage = () => {
  const { scrollIntoView, targetRef: wrapperRef } = useScrollIntoView({
    offset: 100,
    duration: 500,
  });

  useEffect(() => {
    scrollIntoView({ alignment: "start" });
  }, []);

  return (
    <Box className={classes.wrapper} ref={wrapperRef}>
      <Topbar label="Contact Me" icon={<PaperPlaneTilt size={24} />} />
      {/* page body */}
      <Box py={{ base: "sm", sm: "lg" }} px={{ base: "xs", sm: "lg" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ base: "center", md: "space-evenly" }}
        >
          {/* contact details */}
          <Box w={"100%"}>
            <Flex h="100%">
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
