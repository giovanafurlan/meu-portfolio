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

  ,
  {
    conhecimento: 'Next.js: trabalhando com um CMS',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/cfa2fd08-b512-4134-9514-23e0d7121c6f'
  },
  {
    conhecimento: 'NextJS: CI e CD para Front-end com o Github Actions',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/899dbc44-8d2b-4897-a044-3abddca6cd7a'
  },
  {
    conhecimento: 'Next.js: trabalhando com arquitetura Front-end',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/02f87334-dfb7-409e-82d4-0939b54afd47'
  },
  {
    conhecimento: 'NextJS: documentando seu Front-end com o Storybook',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/b58ae76c-80ef-4142-a642-5b8c5e5b40d1'
  },
  {
    conhecimento: 'Formação Melhore sua aplicação React com o Next.js',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/degree/certificate/e38521f5-9029-4aef-87ea-476df947fd95'
  },
  {
    conhecimento: 'Vue3: explorando o framework',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/6e868a92-bbe8-4889-a07d-25fe79a0e290'
  },
  {
    conhecimento: 'Tailwind CSS: estilizando a sua página com classes utilitárias',
    img: '/images/alura.webp',
    cor: 'blue',
    link: 'https://cursos.alura.com.br/certificate/e58e60fa-936c-480a-82a9-aab2c9aa234b'
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
          {t('certificados')}
        </Heading>
        {/* <Text>
          {t('introConhecimentos')}
        </Text> */}
        <Flex
          flexDir={'column'}
          gap='2'>
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
      mr="4"
      borderRadius='lg'
      h={'fit-content'}
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