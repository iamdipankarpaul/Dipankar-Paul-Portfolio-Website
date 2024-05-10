import { Box, List, Text, Title } from "@mantine/core";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react";

import ContactDetailsItem from "./ContactDetailsItem";

const ContactDetails = ({ personalData }) => {
  return (
    <Box>
      <Title fz={{ base: "h3", sm: "h2" }} fw={700}>
        Get in touch
      </Title>
      <Text my="xs" fz="lg">
        Fill in the form to start a conversation
      </Text>
      <List>
        <ContactDetailsItem
          listIcon={<MapPin size={"70%"} weight="fill" />}
          href={"https://maps.app.goo.gl/tWT9idJuPQhH2ugx9"}
          label={personalData.location}
        />
        <ContactDetailsItem
          listIcon={<Phone size={"70%"} weight="fill" />}
          href={`tel:${personalData.phone.mobileNumber}`}
          label={personalData.phone.mobileNumber}
        />
        <ContactDetailsItem
          listIcon={<Envelope size={"70%"} weight="fill" />}
          href={`mailto:${personalData.email}`}
          label={personalData.email}
        />
      </List>
    </Box>
  );
};

export default ContactDetails;
