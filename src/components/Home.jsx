import { Box, Image, Text} from '@chakra-ui/react'
import React from 'react'
import btcSrc from '../assets/btc-img.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box w={'full'} h={'85vh'} bgColor={'blackAlpha.900'}>
       <motion.div
        style={{
        height:'80vh'
       }} 
       animate={{
        translateY:'20px'
       }}
       transition={
        {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }
       }
       >
       <Image w={'full'} h={'full'} objectFit={'contain'} filter = {'grayscale(1)'} src={btcSrc}/>
       </motion.div>
       <Text fontSize={'6xl'} textAlign={'center'} color={'whiteAlpha.700'} fontWeight={'thin'} mt={'-10'}>Xcrypto</Text>
    </Box>
  )
}

export default Home
