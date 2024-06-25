import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter,FaLinkedin,FaInstagram, FaYoutube} from 'react-icons/fa';
import { Box,HStack,IconButton,Text } from '@chakra-ui/react'
import '../../assets/style/MainFooter.css'








export default function MainFooter({color}) {
  return (<>
  {/* <section className='Main-Footer'>
    <div className="d-flex justify-content-between px-5 py-4">
        <div className="media d-felx">
            <Link><i className="fa-brands fa-youtube px-1 fs-4 text-black"></i></Link>
            <Link><i className="fa-brands fa-x-twitter px-1 fs-4 text-black"></i></Link>
            <Link><i className="fa-brands fa-instagram px-1 fs-4 text-black"></i></Link>
            <Link><i className="fa-brands fa-facebook px-1 fs-4 text-black"></i></Link>    
        </div>
        <div className="ploicy">
            <Link to='' className='px-2 text-black fw-bold'>Help Center</Link>
            <Link to='' className='px-2 text-black fw-bold'>Privacy Policy</Link>
            <Link to='' className='px-2 text-black fw-bold'>Terms & Conditions</Link>
            <Link to='' className='px-2 text-black fw-bold'>Accessability</Link>
        </div>
    </div>
  </section> */}


    <Box as="footer"   color="white" py={2} display={'flex'} alignItems="center" justifyContent="space-between" px='7' position={'fixed'} w="100%" bottom={0}>
          <HStack justify="center" spacing={0}>
          <IconButton
              // as="a"
              href="https://www.facebook.com"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="26px" />}
              color={color}
              bg={'transparent'}
              _hover={{  color: 'gray.600'}}
            />
            
            <IconButton
              as="a"
              href="https://www.twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter  fontSize="26px"/>}
              color={color}
              bg={'transparent'}
              _hover={{  color: 'gray.600'}}
            />
            <IconButton
              as="a"
              href="https://www.twitter.com"
              aria-label="Twitter"
              icon={<FaInstagram  fontSize="26px"/>}
              color={color}
              bg={'transparent'}
              _hover={{  color: 'gray.600'}}
            />
            <IconButton
              as="a"
              href="https://www.twitter.com"
              aria-label="Twitter"
              icon={<FaLinkedin  fontSize="26px"/>}
              color={color}
              bg={'transparent'}
              _hover={{  color: 'gray.600'}}
            />
            <IconButton
              as="a"
              href="https://www.twitter.com"
              aria-label="Twitter"
              icon={<FaYoutube  fontSize="26px"/>}
              color={color}
              bg={'transparent'}
              _hover={{  color: 'gray.600'}}
            />
          </HStack>

          <HStack spacing={2} mt={4}>
            <Link>
              <Text textAlign="center" color={color} fontWeight="bold" fontSize="sm">
                Help Center
              </Text>
            </Link>
            <Link>
              <Text textAlign="center" color={color} fontWeight="bold" fontSize="sm">
                Privacy Policy
              </Text>
            </Link>
            <Link>
              <Text textAlign="center" color={color} fontWeight="bold" fontSize="sm">
                Terms & Conditions
              </Text></Link>
            <Link>
              <Text textAlign="center" color={color} fontWeight="bold" fontSize="sm">
                Accessibility
              </Text>
            </Link>
         </HStack>
          
    
          {/* <Text textAlign="center" mt={4} color={'black'} fontWeights='bold'>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Text> */}
    </Box>
  </>
  )
}
