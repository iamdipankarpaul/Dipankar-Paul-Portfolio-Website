import { Anchor, List, ThemeIcon } from "@mantine/core";

const ContactDetailsItem = ({ listIcon, label, href }) => {
  return (
    <List.Item
      icon={
        <ThemeIcon size={24} radius="xl" variant="default">
          {listIcon}
        </ThemeIcon>
      }
      mt="xs"
    >
      <Anchor href={href} target="_blank" fz="lg" data-clickable>
        {label}
      </Anchor>
    </List.Item>
  );
};

export default ContactDetailsItem;
