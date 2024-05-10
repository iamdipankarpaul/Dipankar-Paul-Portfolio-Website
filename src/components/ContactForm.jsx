import { useForm, ValidationError } from "@formspree/react";
import {
  Box,
  Button,
  Group,
  Textarea,
  TextInput,
  Notification,
} from "@mantine/core";
import { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef();
  const [closeNotification, setCloseNotification] = useState(false);

  const formspreeKey = String(import.meta.env.VITE_FORMSPREE_KEY);
  const [state, handleSubmit] = useForm(formspreeKey);

  if (state.succeeded) {
    formRef.current.reset();
  }

  return (
    <Box h={"100%"} py="sm">
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextInput
          label="Your Name"
          placeholder="Your name"
          id="name"
          type="text"
          name="name"
          mb="xs"
          size="md"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <TextInput
          label="Email address"
          placeholder="Your email"
          id="email"
          type="email"
          name="email"
          mb="xs"
          size="md"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Textarea
          placeholder="Type your message here"
          label="Message"
          autosize
          minRows={3}
          id="message"
          name="message"
          size="md"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Group mt="md" justify="center">
          <Button type="submit" loading={state.submitting} size="md">
            Submit
          </Button>
        </Group>
      </form>
      {state.succeeded && (
        <Box style={{ display: closeNotification ? "none" : "block" }} py="sm">
          <Notification withBorder onClose={() => setCloseNotification(true)}>
            Thanks for contacting me.
          </Notification>
        </Box>
      )}
    </Box>
  );
};

export default ContactForm;
