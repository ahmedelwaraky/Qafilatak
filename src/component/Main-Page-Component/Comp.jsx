import React from 'react'
import { Box, Button, Checkbox, Container, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Heading, Icon,Image, Input, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text, Textarea } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import MainButton from './MainButton';
import { MdLanguage,MdEmail,MdPhone,MdLocationOn } from 'react-icons/md';
// CSS File 
import '../../assets/style/Influencers.css';// Images 
import HHH from '../../assets/image/Rectangle 8403.png';
import Influencer from '../../assets/image/iphone-14-pro.png';

import PhoneInput from 'react-phone-input-2';





import BG from '../../assets/image/bg.png'
import Earth from '../../assets/image/newearth.png'
import Google from '../../assets/image/google.png'
import Apple from '../../assets/image/apple.png'
import Facebook from '../../assets/image/facebook.png'
import Chat from '../../assets/image/chat.png'
import MainFooter from './MainFooter';

export default function Comp() {


  return (
    <>
        {/* <Box className="layout" position={'relative'} h={'100%'}>
            <Image src={HHH} alt='' className='back' position={'absolute'} bottom={'0px'}/>
            <Box className="container">
               <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                <Box className="col-md-6 left-sec">
                            <Image src={Influencer} alt='' className="phone"  />
                        </Box>
                        <Box className="col-md-6 right-sec pb-5 mb-5">
                            <Heading className='text-white text-center pb-4 mb-4' size="lg">
                                HEADER ABOUT 2 LINES DESCRIPTION ABOUT INFLUENCERS
                            </Heading>
                            <Text className='pb-3 text-white text-center'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quaerat rem aut ratione tempora. Maiores voluptatum perferendis fugit ea doloribus aspernatur rem velit cum vel reprehenderit, perspiciatis eveniet atque nesciunt.
                            </Text>
                             <Button colorScheme="teal" variant="solid" size="lg" className='w-50'>
                                Influencers Page
                            </Button> 
                        </Box>
               </Grid>
            </Box>
        </Box> */}

<Box backgroundImage={`url(${BG})`} backgroundSize='cover' backgroundPosition='center' w='full' h='100vh'>
	<Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}  h='full' display='flex'alignItems='center' justifyContent='space-between'>
		<Box className='Box-one' >
			<Image src={Earth} alt="" />
		</Box>
		<Box className='Box-two' w='50%'>
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
						    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        </Box>
						<Box w="50%">
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' placeholder='Name@Exam.com' />
                            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        </Box>	
					</Flex>
                    <Box mb='3'>
                        <FormLabel>Mobile Number</FormLabel>
                        <Input type='phone' placeholder='Enter Number' />
                    </Box>

					<Box mb='3'>
						<FormLabel>Password</FormLabel>
						<Input type='password' placeholder='At least 6 Characters' />
						{/* <FormHelperText>Helper Text</FormHelperText> */}
					</Box>
					<Box mb='3'>
						<FormLabel>Re-enter password</FormLabel>
						<Input type='password' placeholder='Re-enter password' />
						{/* <FormHelperText>Helper Text</FormHelperText> */}
					</Box>

					{/* <Box display='flex' justifyContent='space-between'>
						<Checkbox defaultChecked>Remember Me</Checkbox>
						<Link ><FormHelperText color='blue.500' as='u'>forget password?</FormHelperText></Link>
					</Box>
					<Box border='1px'borderColor='gray.300'borderRadius='md'backgroundColor='white' p='2' mt='5'>
						<Checkbox defaultChecked color="black" fontSize={'14px'} >I'm Not A Robot</Checkbox>
					</Box> */}

					<Flex mt='5' pb="5" mb="5" gap={2} justifyContent={'flex-end'}>
						<Button 
							backgroundColor='#007396' 
							color='white' 
							w='25%' 
							 >
							Sign in 
						</Button>
						<Button 
							// backgroundColor='transparent' 
							color='white' 
							w='25%' 
							_hover={{ backgroundColor: '#007396' }} _focus={{ boxShadow: 'none' }}>
							Next
						</Button>

						{/* <Text fontSize='14px' color='white'>
							Not Registered?{' '}
							<Link style={{color:'#2382c2'}} to='register' as='u'>Create Account</Link>
						</Text> */}
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
</Box>
<MainFooter></MainFooter>


        






      {/* <Grid w={{ base: '100%' }} h={{ base: 'auto', lg: '300px' }} bgGradient={'linear(to-r, #192238, #000000)'}  templateColumns={{ base: 'repeat(1, 2fr)', lg: 'repeat(3, 2fr)' }}>

        <GridItem alignSelf="center">
          <SimpleGrid columns={{ base: 1, lg: 3 }} display="flex">
            <Box display="block" m={{ base: 'auto' }} textAlign={{ base: 'center'}}>
              <Text mb="4" color="white" mt="4">Hello</Text>
              <Link target="_blank" mb="4" color="white"mt="4" > E-Commerce Upss </Link>
              <Text mb="4" color="white" mt="4"></Text>
              <Link target="_blank"color="white" mt="4"> </Link>
              <Text mb="4" color="white" mt="4"></Text>
              <Link target="_blank" color="white" mt="4"> </Link>
              <Text mb="4" color="white" mt="4"></Text>
              <Text mb="4" color="white" mt="4"></Text>
            </Box>
          </SimpleGrid>
        </GridItem>

        <GridItem alignSelf="center">
          <SimpleGrid columns={{ base: 1, lg: 3 }} display="flex">
            <Box m={{ base: 'auto' }} textAlign={{ base: 'center' }} >
              <Link target="_blank"color="white"mt="4"></Link>
              <Text mb="4" color="white" mt="4"></Text>
              <Link target="_blank" mb="4"color="white"mt="4"> </Link>
              <Text mb="4" color="white" mt="4"></Text>
              <Link target="_blank" mb="4" color="white" mt="4"></Link>
              <Text mb="4" color="white" mt="4"></Text>
            </Box>
          </SimpleGrid>
        </GridItem>
        
        <GridItem alignSelf="center">
          <SimpleGrid display="flex">
            <Box m={{ base: 'auto' }} display="bolck" textAlign="center">
              <Text width="100%" mb="2" fontSize="xl" color="white"></Text>
              <Box className="media-pay" w="100%"  height="auto"  display="flex" m="auto">
                <Text></Text>
              </Box>
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
      
      <Grid bgGradient={'linear(to-r, #192238, #000000)'}>
        <GridItem display="flex" width="100%">
          <SimpleGrid justifyContent="center" margin="auto" display="flex">
            <Box className="media" w="auto" h="30px" m={{ base: '8px', lg: '10px' }}>
              <img onClick={() => {window.open( '_blank' );}} alt="instagram" width="20px" height="40px" // src={instagram} 
              />
            </Box>
            <Box className="media" w="auto" h="30px"m={{ base: '6px', lg: '8px' }}>
              <img onClick={() => {window.open( 
                // 'https://www.facebook.com/AYMholdings/',
                 '_blank');  }}
                // src={facebook}
                alt="facebook"/>
            </Box>
            <Box className="media"  w="auto"   h="30px"  m={{ base: '6px', lg: '8px' }}>
              <img onClick={() => {window.open(
                    // 'https://www.linkedin.com/company/aymholdings/',
                    '_blank'
                  );
                }}
                // src={linkedin}
                alt="linkedin" />
            </Box>

            <Box
              className="media"
              w="auto"
              h="30px"
              m={{ base: '6px', lg: '8px' }}
            >
              <img
                onClick={() => {
                  window.open(
                    '_blank'
                  );
                }}
                // src={youtube}
                alt="youtube"
              />
            </Box>

            <Box
              className="media"
              w="auto"
              h="30px"
              m={{ base: '6px', lg: '8px' }}
            >
             
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid>

      <Grid bgGradient={'linear(to-r, #192238, #000000)'} h={{ base: 'auto', lg: '50px' }} bgColor="#151C2F">
        <GridItem>
          <SimpleGrid>
            <Box m="auto" mt="1">
              <Text fontSize="13px" color="white" textAlign="center"></Text>
              <Text fontSize="13px" textAlign="center" color="white"></Text>
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid> */}
    </>
    
  );
}

