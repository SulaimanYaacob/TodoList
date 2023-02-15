import Head from "next/head";
import {
  ActionIcon,
  Button,
  Center,
  Group,
  List,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import Layout from "./components/LayoutPage/Layout";
import { TbEdit, TbPlus, TbCheck, TbCross, TbX } from "react-icons/tb";
import { Modal } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<String[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState<{ todo: String; index: number }>();
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const handleOnDelete = (index: number) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleOpenModal = (index: number) => {
    const todo = todos.find((todo, i) => i === index);
    todo && setEditTodo({ todo, index });
    setIsModalOpen(true);
  };

  const handleOnEdit = (index: number) => {
    setTodos((prev) => {
      console.log({ prev });
      const newTodos = [...prev];
      newTodos[index] = editInput;
      return newTodos;
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        centered
        withCloseButton={false}
        size="auto"
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Stack spacing={0}>
          <Text weight={500}>Edit</Text>
          <Group align="center">
            <TextInput
              onChange={(e) => setEditInput(e.target.value)}
              defaultValue={editTodo?.todo.toString()}
            />
            <ActionIcon
              onClick={(e: any) => handleOnEdit(editTodo?.index as number)}
              c="teal"
              size="lg"
            >
              <TbCheck size={24} />
            </ActionIcon>
          </Group>
        </Stack>
      </Modal>
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
                  setInput(e.target.value);
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
                  <>
                    <Paper
                      key={index}
                      shadow="xs"
                      withBorder
                      p="md"
                      mb="xs"
                      w="400px"
                    >
                      <Group align="center" position="apart" noWrap>
                        <Text weight={500}>{todo}</Text>

                        <Group spacing="xs">
                          <ActionIcon
                            color={"teal.7"}
                            onClick={() => {
                              handleOpenModal(index);
                            }}
                          >
                            <TbEdit size={24} />
                          </ActionIcon>
                          <ActionIcon
                            onClick={() => {
                              handleOnDelete(index);
                            }}
                            c={"dark.1"}
                          >
                            <TbCheck size={24} />
                          </ActionIcon>
                        </Group>
                      </Group>
                    </Paper>
                  </>
                );
              })}
            </List>
          </Stack>
        </Center>
      </Layout>
    </>
  );
}
