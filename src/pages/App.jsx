import { 
  Heading, 
  VStack, 
  IconButton,
  useColorMode
} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { TodoList } from '../components/TodoList'

function App() {
  
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4} mb="8"> 
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} 
        isRound='true' 
        size='lg' 
        alignSelf="flex-end" 
        onClick={toggleColorMode} 
      />
      <Heading  
        fontWeight="extrabold" 
        size="2xl" 
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList />
    </VStack>
  )
}

export default App
