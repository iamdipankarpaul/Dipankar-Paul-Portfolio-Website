import { useEffect } from "react";
import { Box, Flex, Divider } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import classes from "./pages.module.css";

import Topbar from "../components/Topbar";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import personalData from "../constants";

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
      {/* seo */}
      <Helmet>
        <title>Get in Touch with Dipankar Paul</title>
        <meta
          name="description"
          content="Reach out to me for any opportunities, inquiries, or just to say hello. Fill out the contact form or connect through social media to start a conversation. I look forward to hearing from you!"
        />
      </Helmet>
      {/* topbar */}
      <Topbar label="Contact Me" icon={<PaperPlaneTilt size={24} />} />
      {/* page body */}
      <Box
        pt={{ base: "sm", sm: "md", md: "lg" }}
        pb={{ base: 0, sm: "xs" }}
        px={{ base: 0, xs: "xs" }}
      >
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
