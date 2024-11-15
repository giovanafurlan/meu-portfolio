import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../components/Menu"));

export default function Educacao() {

  const { t } = useTranslation("common");

  const experiencia = [
    {
      instituicao: 'FIAP',
      imagem: '/images/fiap.webp',
      curso: 'IA',
      nivel: t("posGraduacao"),
      dtInicio: '03/2024',
      dtTermino: t("atualmente")
    },
    {
      instituicao: 'FIAP',
      imagem: '/images/fiap.webp',
      curso: t("analiseDesenvolvimentoSistemas"),
      nivel: t("ensinoSuperior"),
      dtInicio: '02/2021',
      dtTermino: '12/2022'
    },
    {
      instituicao: 'Instituto PROA',
      imagem: '/images/proa.webp',
      curso: t('desenvolvimentoSoftware'),
      nivel: t("cursoProfissionalizante"),
      dtInicio: '06/2020',
      dtTermino: '12/2020'
    },
    {
      instituicao: 'ETEC',
      imagem: '/images/etec.webp',
      curso: t('adiministracao'),
      nivel: t("cursoTecnico"),
      dtInicio: '06/2018',
      dtTermino: '12/2019'
    },
    {
      instituicao: 'USP',
      imagem: '/images/usp.webp',
      curso: t('gramaticaRedacao'),
      nivel: t("cursoExtracurricular"),
      dtInicio: '06/2018',
      dtTermino: '12/2018'
    },
    {
      instituicao: 'Wizard',
      imagem: '/images/wizard.webp',
      curso: t('ensinoIngles'),
      nivel: t("cursoIdioma"),
      dtInicio: '02/2016',
      dtTermino: '12/2017'
    }
  ]

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
          {t('educacao')}
        </Heading>
        <Text>
          {t('educacaoIntro')}
        </Text>
        <Grid
          templateColumns={{ lg: "repeat(2,1fr)" }}
          gap={4}>
          {experiencia.map((dado, idx) => (
            <Card
              key={idx}
              instituicao={dado.instituicao}
              nivel={dado.nivel}
              curso={dado.curso}
              imagem={dado.imagem}
              dtInicio={dado.dtInicio}
              dtTermino={dado.dtTermino} />
          ))}
        </Grid>
      </Flex>
    </Menu>
  );
}

const Card = ({
  instituicao,
  imagem,
  nivel,
  curso,
  dtInicio,
  dtTermino }) => {

  const { t } = useTranslation("common");

  return (
    <Center>
      <Grid
        borderWidth="none"
        borderRadius="lg"
        w={"full"}
        alignItems={"center"}
        // height={{ sm: '476px', md: '15rem' }}
        direction={{ base: 'column', md: 'row' }}
        templateColumns={{ lg: "repeat(3,1fr)" }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        padding={4}>
        <GridItem>
          <Flex flex={1}>
            <Image
              width={"auto"}
              height={"auto"}
              borderRadius="lg"
              src={imagem}
              alt="#"
            />
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Stack
            flex={1}
            flexDirection="column"
            ml={4}
            p={1}
            pt={2}>
            <Heading fontSize={'lg'} fontFamily={'body'}>
              {instituicao}
            </Heading>
            <Text fontSize="smaller">
              {nivel}
            </Text>
            <Text fontSize="smaller">
              {curso}
            </Text>
            <Stack
              width={'100%'}
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Tag
                flex={1}
                colorScheme='blue'
                fontSize={'sm'}
                cursor={"default"}
                justifyContent="center">
                {t("inicio")} - {dtInicio}
              </Tag>
              <Tag
                flex={1}
                colorScheme='pink'
                fontSize={'sm'}
                cursor={"default"}
                justifyContent="center">
                {dtTermino === t("atualmente") ? dtTermino : `${t("termino")} - ${dtTermino}`}
              </Tag>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </Center>
  )
}