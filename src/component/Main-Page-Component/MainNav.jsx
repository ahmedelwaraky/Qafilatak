import React from 'react'
import { Link } from 'react-router-dom'
import { Box, HStack, Button, IconButton, Text, Spacer, Image } from '@chakra-ui/react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import '../../assets/style/MainNav.css'





export default function MainNav() {
  return (<>
   {/* <section className='Main-Nav pt-4 '>
    <div className="container">
    <nav className="navbar navbar-expand-lg  rounded-2 mb-3 ">
            <div className="container-fluid">
                <Link className="navbar-brand" to=''>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  m-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to=''>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Qwafile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Montij</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Human Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Influencers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>About Qafilatak</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''>Contact Us</Link>
                    </li>
                
                </ul>
                </div>
            </div>
    </nav>
    </div>
  
    </section> */}

    
        <Box as="nav" bg="white" boxShadow="md" px={10} py={2} my={5}  mx={5} className='rounded-3'>
            <HStack spacing={8} alignItems="center">
                    {/* Logo */}
                    {/* <Image src="/path-to-your-logo.png" alt="Logo" boxSize="50px" /> */}
                    <Text fontSize="xl" fontWeight="bold" color="gray.800" pt={1}> Qwafile</Text>
                    <Spacer />
                    {/* Navigation Links */}
                    <HStack as="nav" spacing={4}  pt={2}>
                        <Link><Text fontSize="md" fontWeight="" color="gray.800">Qwafile</Text></Link>
                        <Link><Text fontSize="md" fontWeight="" color="gray.800">Montij</Text></Link>
                        <Link><Text fontSize="md" fontWeight="" color="gray.800">Human Resources</Text></Link>
                        <Link><Text fontSize="md" fontWeight="" color="gray.800">Influencers</Text></Link>
                        <Link><Text fontSize="md" fontWeight="" color="gray.800">About Qafilatak</Text></Link>
                        <Link><Text fontSize="md" fontWeight="" color="gray.800">Contact Us</Text></Link>                  
                    </HStack>

                    {/* Spacer to push the next items to the right */}
                    <Spacer />

                    {/* Icons and Login Button */}
                    <HStack spacing={0}>
                        <IconButton
                            aria-label="Wishlist"
                            icon={<FaHeart />}
                            // variant="ghost"
                            color="gray.800"
                            fontSize="18px"
                            _hover={{color:'gray.400'}}
                        />
                        <IconButton
                            aria-label="Cart"
                            icon={<FaShoppingCart />}
                            variant="ghost"
                            color="gray.800"
                            fontSize="18px"
                            _hover={{color:'gray.400'}}
                        />
                        <Button
                            className='border'
                            colorScheme="gray.400"
                            variant="solid" 
                            bg='gray.800'
                            color='white'
                            _hover={{color:'white' , bg:'gray.400'}}>
                            Login
                        </Button>
                    </HStack>
            </HStack>
        </Box>   
    </>
  )
}
