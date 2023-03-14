import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AddTodo } from "../AddTodo";



export const TodoList = () => {
  
  const [ tasks, setTasks ] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])
  
  const deleteTask = (id) => {
    const newTask = tasks.filter(task => {
      return task.id !== id;
    })
  
    setTasks(newTask);
  }

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  if(!tasks.length){
    return(
      <VStack>
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg" alignContent="center">
          Não há Tarefas<br />
        </Badge>
        <AddTodo addTodo={addTask} />
      </VStack>
    )
  }

  return(
    <VStack 
      divider={ <StackDivider /> }
      p="4"
      borderWidth="2"
      borderColor="gray.700"
      borderRadius="lg"
      w="100%"
      alignItems="stretch"
      maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
    >
      {
        tasks.map(({body, id}) => {
          return(
            <HStack key={id}>
              <Text>{body}</Text>
              <Spacer />
              <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTask(id)} />
            </HStack>
          );
        })
      }

      <AddTodo addTodo={addTask} />
    </VStack>
  );
}