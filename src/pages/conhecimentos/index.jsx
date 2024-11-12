import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../components/Menu"));
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ReactStars from 'react-stars';

const conhecimentosFront = [
  {
    conhecimento: 'React',
    img: '/images/react.webp',
    cor: 'blue'
  },
  {
    conhecimento: 'Next',
    img: '/images/next.webp',
    cor: 'black'
  }
]

const conhecimentosCMS = [
  {
    conhecimento: 'Netlify',
    img: '/images/netlify.webp',
    cor: 'blue'
  }
]

const conhecimentosLinguagens = [
  {
    conhecimento: 'Javascript',
    img: '/images/js.webp',
    cor: 'yellow'
  }
]

const conhecimentosBackend = [
  {
    conhecimento: 'NodeJs',
    img: '/images/nodejs.webp',
    cor: 'green'
  }
]

const conhecimentosFrameworks = [
  {
    conhecimento: 'Chakra UI',
    img: '/images/chakra.webp',
    cor: 'blue'
  },
  {
    conhecimento: 'Bootstrap',
    img: '/images/bootstrap.webp',
    cor: 'purple'
  },
]

const conhecimentosIA = [
  {
    conhecimento: 'ChatGPT',
    img: '/images/chatgpt.png',
    cor: 'green'
  },
]

export default function Conhecimentos() {

  const { t } = useTranslation("common");

  return (
    <Menu>
      <Flex
        flexDir={'column'}
        gap='6'>
        <Heading
          as={'h1'}
          fontSize={{
            lg: '5xl',
            sm: '4xl'
          }}
          fontFamily='monospace'
          textTransform='uppercase'
          fontWeight={'hairline'}>
          {t('conhecimentos')}
        </Heading>
        <Text>
          {t('introConhecimentos')}
        </Text>
        <Flex
          flexDir={'column'}
          gap='2'>
          <Text
            fontSize={'2xl'}
            fontWeight='bold'>
            {t('conhecimentos')}
          </Text>
          <Grid
            templateColumns={{
              lg: 'repeat(2,1fr)'
            }}
            maxW={{
              lg: '4xl'
            }}>
            <Div classe={'Frontend'}>
              {conhecimentosFront.map((result, idx) => (
                <P
                  key={idx}
                  img={result.img}
                  conhecimento={result.conhecimento}
                  cor={result.cor}
                  iconSN='none'>
                  <Stars value={4} />
                </P>
              ))}
            </Div>
            <Div classe={'CMS'}>
              {conhecimentosCMS.map((result, idx) => (
                <P
                  key={idx}
                  img={result.img}
                  conhecimento={result.conhecimento}
                  cor={result.cor}
                  iconSN='none'>
                  <Stars value={3} />
                </P>
              ))}
            </Div>
            <Div classe={'Linguagens'}>
              {conhecimentosLinguagens.map((result, idx) => (
                <P
                  key={idx}
                  img={result.img}
                  conhecimento={result.conhecimento}
                  cor={result.cor}
                  iconSN='none'>
                  <Stars value={4} />
                </P>
              ))}
            </Div>
            <Div classe={'Backend'}>
              {conhecimentosBackend.map((result, idx) => (
                <P
                  key={idx}
                  img={result.img}
                  conhecimento={result.conhecimento}
                  cor={result.cor}
                  iconSN='none'>
                  <Stars value={4} />
                </P>
              ))}
            </Div>
            <Div classe={'Frameworks'}>
              {conhecimentosFrameworks.map((result, idx) => (
                <P
                  key={idx}
                  img={result.img}
                  conhecimento={result.conhecimento}
                  cor={result.cor}
                  iconSN='none'>
                  <Stars value={4} />
                </P>
              ))}
            </Div>
            <Div classe={'IA'}>
              {conhecimentosIA.map((result, idx) => (
                <P
                  key={idx}
                  img={result.img}
                  conhecimento={result.conhecimento}
                  cor={result.cor}
                  iconSN='none'>
                  <Stars value={4} />
                </P>
              ))}
            </Div>
          </Grid>
        </Flex>
      </Flex>
    </Menu>
  );
}

const Div = ({ classe, children }) => {

  return (
    <GridItem
      py='4'
      px='2'
      borderRadius='lg'
      boxShadow='2xl'
      maxW='96'
      mb='4'>
      <pre>
        {classe}
      </pre>
      {children}
    </GridItem>
  )
};

const P = ({ img, conhecimento, cor, iconSN, children }) => {
  return (
    <Flex
      mt='2'
      align={'center'}
      gap='2'>
      <Tag
        size='lg'
        colorScheme={cor}
        borderRadius='full'
        justifyContent="center">
        <Avatar
          src={img}
          size='xs'
          bg='transparent'
          name={conhecimento}
          ml={-1}
          mr={2}
        />
        <TagLabel>{conhecimento}</TagLabel>
        <TagRightIcon
          display={iconSN}
          as={ExternalLinkIcon} />
      </Tag>
      <Box>{children}</Box>
    </Flex>
  )
}

const Stars = ({ value }) => {
  return (
    <ReactStars
      count={5}
      size={24}
      value={value}
      edit={false}
      color1={'#B4CDE6'}
      color2={'#628E90'} />
  )
}