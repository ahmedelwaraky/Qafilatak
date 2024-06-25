import React from 'react'
import { Box, Button, Checkbox, Container, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, Heading, Icon,Image, Input, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text, Textarea } from '@chakra-ui/react'
import One from '../../assets/image/work.png'
import Two from '../../assets/image/image 215.png'

export default function Montij() {
  return (
   <>
   <Box>
        <Container maxW="container.xl" py={4}>
            <Box>
                <Flex direction="column" gap={6} mt={'10'}>
                    <Box bg="tomato" flex="1">
                        <Text fontSize={"32px"} fontWeight={'600'} lineHeight={'60px'}>Montien</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe, obcaecati enim iusto possimus qui fuga provident error consequatur amet nisi molestias nihil placeat ea accusantium excepturi quibusdam magnam quis.
                        Repellat, dicta! Amet temporibus illum accusamus ab, laudantium cumque voluptatibus modi. Aspernatur, explicabo nulla at voluptates, aut eaque officiis excepturi placeat, nihil officia illum consectetur debitis nemo! Ipsum, sapiente voluptatibus.
                        Labore placeat id vel animi quia sunt exercitationem reprehenderit praesentium sint obcaecati. Incidunt perspiciatis necessitatibus maxime, placeat dignissimos, inventore quas natus earum repudiandae quos, nobis mollitia praesentium perferendis pariatur culpa.
                        Laborum ipsa praesentium eius exercitationem rem totam labore, consectetur recusandae odit voluptates, voluptatem blanditiis nam dolorem sit quo nemo veritatis autem? Doloribus molestiae quis recusandae atque aliquam iste est quasi?
                        Consequatur repellendus laboriosam quibusdam quia doloribus harum doloremque ipsum dolores praesentium nostrum, ullam autem quidem at unde similique corporis dolore beatae suscipit, atque maiores placeat porro cupiditate! Iure,</Text>
                    </Box>
                </Flex>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} mt={6}>
                    <GridItem bg="green.500">
                        <Box bg='blue.500' w='20px' height='2px'>
                        </Box>
                            <Image src={One} w='50%' mx='auto' />    
                    </GridItem>
                    <GridItem bg="blue.500">
                        <Image src={Two} w='50%'/>
                    </GridItem>
                </Grid>
            </Box>
        </Container>
    </Box>
   </>
  )
}
