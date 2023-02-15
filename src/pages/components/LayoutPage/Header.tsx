import React, { useState } from "react";
import {
  ActionIcon,
  Center,
  Group,
  Header,
  Overlay,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";

function LandingHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={60}>
      <Group position="apart" align="center" p="md" w="400px" mx="auto">
        <Group>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <TbSun size={18} /> : <TbMoon size={18} />}
          </ActionIcon>
        </Group>

        <Center style={{ zIndex: -1 }} pos="absolute" left="35%" right="35%">
          <Title align="center" order={2}>
            Todo List
          </Title>
        </Center>
      </Group>
    </Header>
  );
}

export default LandingHeader;
