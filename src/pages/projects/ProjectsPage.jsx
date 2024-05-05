import { Box, Text } from "@mantine/core";
import { Folder } from "@phosphor-icons/react";

import classes from "./Projects.module.css";
import Topbar from "../../components/Topbar";

const ProjectsPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="Projects" icon={<Folder size={24} />} />
      {/* projects body */}
      <Box>
        <Text>Projects are comming soon...</Text>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
