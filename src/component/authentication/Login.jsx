import React from 'react'
import { Box, Button, Checkbox, Container, Flex, FormControl, FormHelperText, FormLabel, Grid,Image, Input, SimpleGrid, Stack, Text, Textarea } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
//images
import BG from '../../assets/image/bg.png'
import Earth from '../../assets/image/newearth.png'
import Google from '../../assets/image/google.png'
import Apple from '../../assets/image/apple.png'
import Facebook from '../../assets/image/facebook.png'
import Chat from '../../assets/image/chat.png'
import MainFooter from'../Main-Page-Component/MainFooter'


export default function Login() {
  return (
    <Box backgroundImage={`url(${BG})`} backgroundSize='cover' backgroundPosition='center' w='full' h='100vh'>
		<Container  maxW="container.xl" py={4}>
		<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} pt={"80px"}>
		<Box className='Box-one' w='100%'>
			<Image src={Earth} alt="" />
		</Box>
		<Box className='Box-two' w='100%'>
			<Box textAlign='center'>
				<Text fontSize='18px' fontWeight={'bold'}>  Welcome Back!</Text>
				<Text fontSize='14px' color={'gray.500'}>Brand Name ID</Text>
			</Box>
			<Box p='5'>
				<FormControl isRequired>
					<Box mb="3">
						<FormLabel>Email address</FormLabel>
						<Input type='email' placeholder='Name@Exam.com' />
						<FormHelperText>We'll never share your email.</FormHelperText>
					</Box>
					<Box mb="3">
						<FormLabel>Password</FormLabel>
						<Input type='password' placeholder='Your Name' />
						<FormHelperText>Helper Text</FormHelperText>
					</Box>
					<Box display='flex' justifyContent='space-between'>
						<Checkbox defaultChecked>Remember Me</Checkbox>
						<Link ><FormHelperText color='blue.500' as='u'>forget password?</FormHelperText></Link>
					</Box>
					<Box border='1px'borderColor='gray.300'borderRadius='md'backgroundColor='white' p='2' mt='5'>
						<Checkbox defaultChecked color="black" fontSize={'14px'} >I'm Not A Robot</Checkbox>
					</Box>
					<Box mt='5'>
						<Button 
							backgroundColor='#007396' 
							color='white' 
							w='full' 
							_hover={{ backgroundColor: '#005f73' }} _focus={{ boxShadow: 'none' }}>
							Login To Account
						</Button>
						<Text fontSize='14px' color='white'>
							Not Registered?{' '}
							<Link style={{color:'#2382c2'}} to='/register' as='u'>Create Account</Link>
						</Text>
					</Box>
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
  )
}
