import React from 'react'
import { Box, Button,Container,Flex, FormControl,FormLabel, Grid,Image, Input,Text,} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import BG from '../../assets/image/bg.png'
import Earth from '../../assets/image/newearth.png'
import Google from '../../assets/image/google.png'
import Apple from '../../assets/image/apple.png'
import Facebook from '../../assets/image/facebook.png'
import Chat from '../../assets/image/chat.png'
import MainFooter from '../Main-Page-Component/MainFooter';
// import MainFooter from './MainFooter';





export default function Register() {
  return (
    <>
     <Box backgroundImage={`url(${BG})`} backgroundSize='cover' backgroundPosition='center' w='full' h={{ base: '100%', md: '100vh' }}>
    <Container  maxW="container.xl" py={4}>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} pt={"80px"} >
            <Box className='Box-one' w='100%'>
                <Image src={Earth} alt="" />
            </Box>
            <Box className='Box-two' w='100%'>
                <Box textAlign='center'>
                    <Text fontSize='18px' fontWeight={'bold'}> Welcome To Company Name!</Text>
                    <Text fontSize='14px' color={'gray.500'}>Start Explore Now</Text>
                </Box>
                <Box p='5'>
                    <FormControl isRequired>
                        <Flex mb='3' gap={2}>
                            <Box w="50%" >
                                <FormLabel>Your Name</FormLabel>
                                <Input type='text' placeholder='Ahmed Mostafa' />
                            </Box>
                            <Box w="50%">
                                <FormLabel>Email</FormLabel>
                                <Input type='email' placeholder='Name@Exam.com' />
                            </Box>	
                        </Flex>
                        <Box mb='3'>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input type='phone' placeholder='Enter Number' />
                        </Box>

                        <Box mb='3'>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder='At least 8 Characters' />
                        </Box>
                        <Box mb='3'>
                            <FormLabel>Re-enter password</FormLabel>
                            <Input type='password' placeholder='Re-enter password' />
                        </Box>
                        <Flex mt='5' pb="5" mb="5" gap={2} justifyContent={'flex-end'}>
                            <Button backgroundColor='#007396'color='white'  w='25%'> Sign in </Button>
                            <Button  color='white' w='25%' _hover={{ backgroundColor: '#007396' }} _focus={{ boxShadow: 'none' }}>Next</Button>
                        </Flex>
                    </FormControl>
                    <Box>
                        <Text fontWeight={'bold'} textAlign={'center'}>Or Continue Using</Text>
                        <Flex justifyContent={"center"} gap={3}>
                            <Link to=''><Image src={Google} alt=""/></Link>
                            <Link to=''><Image src={Apple} alt=""/></Link>
                            <Link to=''><Image src={Facebook} alt=""/></Link>
                        </Flex>
                    </Box>
                    <Box display='flex' justifyContent='flex-end' pt={'10'}>
                        <Image src={Chat}/>
                    </Box>
                </Box>
            </Box>
        </Grid>
    </Container>
        
        <MainFooter color={'white'}></MainFooter>
    </Box>
    </>
   
  )
}
