import React from 'react'
import {Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://www.entorno5.com/wp-content/uploads/2021/08/pngkey.com-bienvenido-png-2744261.png"
            alt="Welcome"
          />
        </Box>
      </Center>
    </div>
  )
}

export default Home