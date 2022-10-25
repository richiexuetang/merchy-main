import { Box, Button, chakra, Heading, Image } from '@chakra-ui/react';
import { getLayout } from '../components';
import { IconBlockItem } from '../components';

const ourValuesData = [
  {
    src: 'https://d2p887mzam0wn6.cloudfront.net/production/uploads/2022/08/sneaker.svg',
    headline: 'MerchY Verified',
    content:
      'Every item sold goes through our proprietary multi-step verification process with our team of expert authenticators.',
  },
  {
    src: 'https://d2p887mzam0wn6.cloudfront.net/production/uploads/2022/08/graph-down.svg',
    headline: 'Transparent Pricing',
    content:
      'Our real-time marketplace works just like the stock market - allowing you to buy and sell the most coveted items at their true market price.',
  },
  {
    src: 'https://d2p887mzam0wn6.cloudfront.net/production/uploads/2022/08/globe.svg',
    headline: 'Global Access',
    content:
      'Whether it is pre-release, regionally limited, or “sold out” - our millions of customers from over 200 countries allow you to easily secure those hard-to-find, coveted items.',
  },
  {
    src: 'https://d2p887mzam0wn6.cloudfront.net/production/uploads/2022/08/no-bs.svg',
    headline: 'No BS',
    content:
      'No chargebacks, no taking photos, no writing catchy descriptions, and no dealing with rogue buyers or sellers. We handle everything to make sure you can buy and sell with confidence.',
  },
  {
    src: 'https://d2p887mzam0wn6.cloudfront.net/production/uploads/2022/08/graph-down.svg',
    headline: 'Secure',
    content:
      'Preserving the integrity of our marketplace means staying a step ahead. Our security and fraud systems, powered by our world class partners, have your personal information covered 24/7.',
  },
  {
    src: 'https://d2p887mzam0wn6.cloudfront.net/production/uploads/2022/08/customer-service.svg',
    headline: 'Here For You',
    content:
      'Thanks to our Help Center, Chatbot, and dedicated global-support staff, you can be sure that we are always available to answer any and every question regarding our marketplace.',
  },
];

const About = () => {
  const src =
    'https://d2p887mzam0wn6.cloudfront.net/production/uploads/2021/01/2020_01_08_Site_Headers0239-1200x900-1-1200x900.jpg';

  return (
    <Box>
      <chakra.section
        bg="#000"
        color="#fff"
        overflow="hidden"
        p={{ base: '40px 0', lg: '40px 0 30px', xl: '40px 0 20px' }}
      >
        <Box
          data-component="about section container"
          maxW="1295px"
          m="0 auto"
          w="94%"
          pos="relative"
        >
          <Box data-component="about section block" display={{ lg: 'flex' }}>
            <Box
              data-component="About Section Left Content"
              m={{
                base: '0 0 30px',
                lg: '77px 50px 0 0',
                xl: '77px 100px 0 0',
              }}
              maxW={{ lg: '498px' }}
              flex={{ lg: '1' }}
            >
              <Heading
                fontSize={{ base: '2.375rem', lg: '3.75rem' }}
                lineHeight={{ base: '1.105', lg: '1.083' }}
              >
                The Current Culture Marketplace
              </Heading>
              <Box mt="20px" lineHeight="1.625">
                Our mission is to provide access to the world&apos;s most
                coveted items in the smartest way possible. Buy and sell the
                hottest sneakers, apparel, electronics, collectibles, trading
                cards and accessories.
              </Box>
            </Box>

            <Box
              data-component="About Section Right Media"
              maxW="550px"
              p="60 0 40px"
              w="90%"
              pos="relative"
              flex={{ lg: '1' }}
            >
              <Box zIndex="2" w="100%" h="0" pt="70.95%" pos="relative">
                <Image
                  src={src}
                  alt={src}
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  left="0"
                  objectFit="cover"
                  objectPosition="center center"
                />
              </Box>
            </Box>
          </Box>

          <Box
            data-component="about section buttons container"
            mt="37px"
            display="flex"
            flexDir={{ base: 'column', lg: 'row' }}
            justifyContent={{ lg: 'center' }}
            flexFlow={{ lg: 'wrap' }}
          >
            <Button variant="green">Verification</Button>
            <Button variant="green">Buyers</Button>
            <Button variant="green">Sellers</Button>
          </Box>
        </Box>
      </chakra.section>

      <chakra.section color="#fff" pt="70px">
        <Box
          data-component="values"
          display="flex"
          flexWrap="wrap"
          maxW="1295px"
          m="0 auto"
          w="94%"
          pos="relative"
        >
          {ourValuesData.map(({ src, headline, content }, index) => {
            return (
              <IconBlockItem
                key={src}
                src={src}
                headline={headline}
                content={content}
                index={index}
              />
            );
          })}
        </Box>
      </chakra.section>
    </Box>
  );
};

About.getLayout = getLayout;
export default About;
