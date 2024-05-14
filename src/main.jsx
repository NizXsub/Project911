import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {spaceDataContainer} from './components/Spaces.jsx'
// import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <spaceDataContainer.Provider> */}
      <App />
    {/* </spaceDataContainer.Provider> */}
  </React.StrictMode>,
)
