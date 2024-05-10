import {
  Box,
  SimpleGrid,
  Grid,
  List,
  ThemeIcon,
  Text,
  Anchor,
} from "@mantine/core";
import { Envelope, MapPin, PaperPlaneTilt, Phone } from "@phosphor-icons/react";

import classes from "./Contact.module.css";
import Topbar from "../../components/Topbar";

const ContactPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="Contact Me" icon={<PaperPlaneTilt size={24} />} />
      <Box>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4, lg: 5 }}>
            <Box>
              <Text fz="h3" fw={700}>
                Get in touch
              </Text>
              <Text>Fill in the form to start a conversation</Text>
              <List>
                <List.Item
                  icon={
                    <ThemeIcon size={24} radius="xl" variant="default">
                      <MapPin size={"70%"} weight="fill" />
                    </ThemeIcon>
                  }
                >
                  <Anchor
                    href="https://maps.app.goo.gl/tWT9idJuPQhH2ugx9"
                    target="_blank"
                  >
                    Falakata, West Bengal, India
                  </Anchor>
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon size={24} radius="xl" variant="default">
                      <Phone size={"70%"} weight="fill" />
                    </ThemeIcon>
                  }
                >
                  <Anchor href={`tel:6296793396`} target="_blank">
                    6296793396
                  </Anchor>
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon size={24} radius="xl" variant="default">
                      <Envelope size={"70%"} weight="fill" />
                    </ThemeIcon>
                  }
                >
                  <Anchor
                    href={`mailto:dipankarpaul.dev@gmail.com`}
                    target="_blank"
                  >
                    dipankarpaul.dev@gmail.com
                  </Anchor>
                </List.Item>
              </List>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 7 }}>
            <Box>Contact form</Box>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactPage;
