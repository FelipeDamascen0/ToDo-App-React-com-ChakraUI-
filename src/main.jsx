import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './styles/index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light' />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
