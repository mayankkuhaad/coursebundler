import React from 'react';
import './Home.css';
import { Button, Image, Heading, Stack, Text, VStack, Box, HStack } from '@chakra-ui/react';
import vg from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';
import {CgGoogle, CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        {/* Stack is a div whose display is flex */}
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          {/* VStack => by default direction is column */}
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text children="Find valuable content at reasonable price" />
            <Link to="/courses" />
            <Button size={'lg'} colorScheme="green">
              Enroll now
            </Button>
          </VStack>

          <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit="contain" />
        </Stack>
      </div>
      <Box padding={"8"} bg="blackAlpha.800">
        <Heading textAlign={"center"} fontFamily="body" color={"green.400"} children="OUR PARTNERS"/>
        <HStack>
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
        </HStack>
      </Box>
    </section>
  );
};

export default Home;
