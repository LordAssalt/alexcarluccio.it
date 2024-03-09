import './App.css';
import { ChakraProvider, Image, Box, Flex, Text, Link, SimpleGrid, Card, CardHeader, Grid, GridItem, CardBody, Heading, Container, HStack } from "@chakra-ui/react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Linkedin from './icons/linkedin.svg';
import Github from './icons/github.svg';
import Email from './icons/email.svg';
import GoogleScholar from './icons/google-scholar.svg';
import Instagram from './icons/instagram.svg';
import Cv from './icons/cv.svg';
import ReactImg from './icons/react.svg';
import Oracle from './icons/oracle-1.svg';



function App() {
  return (
    <ChakraProvider>
      <App2 />
    </ChakraProvider>
  )
}

function App2() {
  // eslint-disable-next-line
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#000000",
        },
        links: {
          color: "#000000",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <>
      <Container maxW='3xl'>
        <Flex justifyContent="center" alignItems="center" minHeight="60vh">
          <Box>
            <Text fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }} as='b'>Hi👋</Text>
            <br />
            <Text fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }} as='b'>I'm Alex.</Text>
            <br />
            <Text fontSize={{ base: "xl", md: "1xl", lg: "3xl" }}>💻 Software Developer Engineer</Text>
            <Text fontSize={{ base: "xl", md: "1xl", lg: "3xl" }}>🏎️ Work <Link href="https://www.porscheengineering.com/nardo/it/" target="_blank" color="#F8CD02">@PorscheEngineering</Link></Text>
            <Text fontSize={{ base: "xl", md: "1xl", lg: "3xl" }}>🛰️ Space Lover</Text>
            <Text fontSize={{ base: "xl", md: "1xl", lg: "3xl" }}>🇮🇹 Italian</Text>
          </Box>
        </Flex>

        <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 2 }}>

          <Box as='button' onClick={() => window.location.href = 'https://www.linkedin.com/in/alexcarluccio/'}>
            <Card irection={{ base: 'row', sm: 'row' }} h="100%">
              <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0}
                w="100%"
                h="100%"
              >
                <GridItem colSpan={3} >
                  <CardHeader>
                    <Heading size='md' textAlign="left">Follow me on Linkedin</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="left">View a summary of all your customers over the last month.</Text>
                  </CardBody>
                </GridItem>

                <GridItem colSpan={1}>
                  <Flex justifyContent="center" alignItems="center" h="100%">
                    <Image maxW={{ base: '100%', sm: '200px' }} src={Linkedin} alt="Linkedin" boxSize="70px" />
                  </Flex>
                </GridItem>
              </Grid>
            </Card>
          </Box>

          <Box as='button' onClick={() => window.location.href = 'https://github.com/LordAssalt'}>
            <Card irection={{ base: 'row', sm: 'row' }} h="100%">
              <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0}
                w="100%"
                h="100%"
              >
                <GridItem colSpan={3} >
                  <CardHeader>
                    <Heading size='md' textAlign="left">Star my Repositories</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="left">Discover some of my academic or personal projects.</Text>
                  </CardBody>
                </GridItem>

                <GridItem colSpan={1}>
                  <Flex justifyContent="center" alignItems="center" h="100%">
                    <Image maxW={{ base: '100%', sm: '200px' }} src={Github} alt="Github" boxSize="70px" />
                  </Flex>
                </GridItem>
              </Grid>
            </Card>
          </Box>


          <Box as='button' onClick={() => window.location.href ='https://github.com/LordAssalt/cv/raw/main/AlexCarluccio.pdf' }>
            <Card irection={{ base: 'row', sm: 'row' }} h="100%">
              <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0}
                w="100%"
                h="100%"
              >
                <GridItem colSpan={3} >
                  <CardHeader>
                    <Heading size='md' textAlign="left">Download my CV</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="left">Have a look at my experience, education path and skills.</Text>
                  </CardBody>
                </GridItem>

                <GridItem colSpan={1}>
                  <Flex justifyContent="center" alignItems="center" h="100%">
                    <Image maxW={{ base: '100%', sm: '200px' }} src={Cv} alt="Cv" boxSize="70px" />
                  </Flex>
                </GridItem>
              </Grid>
            </Card>
          </Box>

          <Box as='button' onClick={() => window.location.href = 'mailto:me@alexcarluccio.it'}>
            <Card irection={{ base: 'row', sm: 'row' }} h="100%">
              <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0}
                w="100%"
                h="100%"
              >
                <GridItem colSpan={3} >
                  <CardHeader>
                    <Heading size='md' textAlign="left">Write me an Email</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="left">Reach out to me via email message.</Text>
                  </CardBody>
                </GridItem>

                <GridItem colSpan={1}>
                  <Flex justifyContent="center" alignItems="center" h="100%">
                    <Image maxW={{ base: '100%', sm: '200px' }} src={Email} alt="Email" boxSize="70px" />
                  </Flex>
                </GridItem>
              </Grid>
            </Card>
          </Box>

          <Box as='button' onClick={() => window.location.href = 'https://www.instagram.com/alex.carluccio/?hl=it'}>
            <Card irection={{ base: 'row', sm: 'row' }} h="100%">
              <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0}
                w="100%"
                h="100%"
              >
                <GridItem colSpan={3} >
                  <CardHeader>
                    <Heading size='md' textAlign="left">Have a look on Instagram</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="left">Take a look at my posts and stories.</Text>
                  </CardBody>
                </GridItem>

                <GridItem colSpan={1}>
                  <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
                    <Image maxW={{ base: '100%', sm: '200px' }} src={Instagram} alt="Instagram" boxSize="70px" />
                  </Flex>
                </GridItem>
              </Grid>
            </Card>
          </Box>


          <Box as='button' onClick={() => window.location.href = 'https://scholar.google.com/citations?hl=it&user=vRqIAlMAAAAJ'}>
            <Card irection={{ base: 'row', sm: 'row' }} h="100%">

              <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0}
                w="100%"
                h="100%"
              >
                <GridItem colSpan={3}>
                  <CardHeader>
                    <Heading size='md' textAlign="left">Read on Google Scholar</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="left">Discover my scientific literature and thesis.</Text>
                  </CardBody>
                </GridItem>


                <GridItem colSpan={1}>
                  <Flex justifyContent="center" alignItems="center" h="100%">
                    <Image maxW={{ base: '100%', sm: '200px' }} src={GoogleScholar} alt="GoogleScholar" boxSize="70px" />
                  </Flex>
                </GridItem>
              </Grid>
            </Card>
          </Box>


        </SimpleGrid>

        <Flex minHeight="50vh"></Flex>

        <Box p={4} textAlign="center">
          <Text color="black">&copy; 2024 Alex Carluccio. All rights reserved.</Text>
          <HStack justifyContent="center">
            <Text color="black">Powered by</Text>
            <Image src={ReactImg} width="30px"></Image>
          </HStack>
          <HStack justifyContent="center">
            <Text color="black">Hosted on</Text>
            <Image src={Oracle} width="50px"></Image>
          </HStack>
        </Box>

      </Container>


      <Particles
        className='particles'
        id="tsparticles"
        options={options} />
    </>
  );
}



export default App;
