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

const certificadosFIAP = [
  {
    conhecimento: 'Libras',
    img: '/images/fiap.webp',
    cor: 'pink',
    link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/60133/2d3c27e1a00d6ebc0124518a6fc35b12/certificado.png'
  },
  {
    conhecimento: 'Responsive Web Development',
    img: '/images/fiap.webp',
    cor: 'pink',
    link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/59208/43d09c151882d8245dd440ae03625cba/certificado.png'
  },
  {
    conhecimento: 'User Experience',
    img: '/images/fiap.webp',
    cor: 'pink',
    link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/17584/6fdc7544d3af82e10dd41aa24f9ae2a1/certificado.png'
  },
  {
    conhecimento: 'Formação Social e Sustentabilidade',
    img: '/images/fiap.webp',
    cor: 'pink',
    link: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/11672/aa8f3587914ceeced5171786a42de092/certificado.png'
  }
]

const certificadosAlura = [
  {
    conhecimento: 'HTTP: Entendendo a web por baixo dos panos',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/2e5e25ad-b736-429a-af26-36f8cbe6e354'
  },
  {
    conhecimento: 'NodeJS: criando sua biblioteca',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/eccd8511-ed7c-4d7b-b18d-eac69664680c'
  },
  {
    conhecimento: 'ORM com NodeJS: API com Sequelize e MySQL',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/6dfd919f-7f80-4b80-8fe9-aa5e80934945'
  },
  {
    conhecimento: 'ORM com NodeJS: avançando nas funcionalidades do Sequelize',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/8d2991f3-839d-45c1-ac09-5bf4ccf2a0f5'
  },
  {
    conhecimento: 'Node.js: testes unitários e de integração',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/16ea7ac2-0278-4667-8ddf-2afcb3fd09a7'
  },
  {
    conhecimento: 'Node.js: API Rest com Express e MongoDB',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/7443229c-d36a-4130-b0d2-5c4d4b87f496'
  },
  {
    conhecimento: 'Node.js: criptografia e tokens JWT',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/ba073c05-b5f4-4d10-b711-f1581eade378'
  },
  {
    conhecimento: 'Formação Node.js com Express',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/degree/certificate/e50808fd-1c37-46c3-83bf-929658d6d397'
  }
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
          Possuo um foco maior no Frontend, utilizando Nextjs, React, Chakra UI, Bootstrap, Netlify CMS e Backend em Nodejs.
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
          </Grid>
        </Flex>
        <br />
        <Flex
          flexDir={'column'}
          gap='2'>
          <Text
            fontSize={'2xl'}
            fontWeight='bold'>
            Certificados
          </Text>
          <Grid
            templateColumns={{
              lg: 'repeat(2,1fr)'
            }}
            maxW={{
              lg: '4xl'
            }}>
            <Div classe={'FIAP'}>
              {certificadosFIAP.map((result, idx) => (
                <Link
                  key={idx}
                  href={result.link}
                  _hover={{
                    textDecor: 'none'
                  }}>
                  <P
                    img={result.img}
                    conhecimento={result.conhecimento}
                    cor={result.cor} />
                </Link>
              ))}
            </Div>
            <Div classe={'Alura'}>
              {certificadosAlura.map((result, idx) => (
                <Link
                  key={idx}
                  href={result.link}
                  _hover={{
                    textDecor: 'none'
                  }}>
                  <P
                    img={result.img}
                    conhecimento={result.conhecimento}
                    cor={result.cor} />
                </Link>
              ))}
            </Div>
          </Grid>
        </Flex>
      </Flex>
    </Menu>
  );
}

const Div = ({ classe, children }) => {

  const bg = useColorModeValue('white', 'gray.800');

  return (
    <GridItem
      py='4'
      px='2'
      borderRadius='lg'
      maxW='96'
      backgroundColor={bg}
      boxShadow='lg'
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
        borderRadius='full'>
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