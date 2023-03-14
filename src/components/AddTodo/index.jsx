import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

export const AddTodo = ({addTodo}) => {

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!content){
      return toast({
        title: 'Error',
        description: 'Adicione um titulo para a tarefa!',
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }

    const task = {
      id: nanoid(),
      body: content
    }

    addTodo(task);
    setContent('');
  }

  const [content, setContent] = useState('');

  return(
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input 
          variant="filled" 
          placeholder="Chakra UI com React - ToDo App" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">Add ToDo</Button>
      </HStack>
    </form>
  );
};