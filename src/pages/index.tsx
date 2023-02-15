import Head from "next/head";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  List,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Layout from "./components/LayoutPage/Layout";
import { TbPlus } from "react-icons/tb";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<String[]>([]);
  const [input, setInput] = useState("");

  const handleOnChange = (todo: any) => {
    console.log({ todo });
    setInput(todo);
  };

  const handleAddTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <Layout>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Stack align="center">
          <Group spacing="xs">
            <TextInput
              value={input}
              onChange={(e: any) => {
                handleOnChange(e.target.value);
              }}
              placeholder="Add a new todo"
            />
            <ActionIcon
              onClick={() => {
                handleAddTodo();
              }}
              size="lg"
              color="dark.0"
              variant="filled"
            >
              <TbPlus size={18} />
            </ActionIcon>
          </Group>
          <List>
            {todos.map((todo, index) => {
              return (
                <Paper
                  key={index}
                  shadow="xs"
                  radius={0}
                  withBorder
                  p="md"
                  m="xs"
                  w="400px"
                >
                  <Group align="start" position="apart" noWrap>
                    <Text>{todo}</Text>
                    <Group>
                      {/* <Button>Edit</Button>
                      <Button>Delete</Button> */}
                    </Group>
                  </Group>
                </Paper>
              );
            })}
          </List>
        </Stack>
      </Center>
    </Layout>
  );
}
