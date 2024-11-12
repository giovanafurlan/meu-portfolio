import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../components/Menu"));

export default function Experiencias() {

  const { t } = useTranslation("common");

  const experiencia = [
    {
      cor: 'purple.400',
      empresa: 'Webpeak',
      imagem: '/images/webpeak.png',
      cargo: `${t("desenvolvedora")} Full Stack`,
      funcao: t('introExperiencia3'),
      dtInicio: '01/2023',
      dtTermino: t('atualmente')
    },
    {
      cor: 'purple.400',
      empresa: 'Webpeak',
      imagem: '/images/webpeak.png',
      cargo: t('estagiaria'),
      funcao: t('introExperiencia2'),
      dtInicio: '01/2022',
      dtTermino: `${t("termino")} - 12/2022`
    },
    {
      cor: 'red.400',
      empresa: 'Tradesquash',
      imagem: '/images/tradesquash.jpeg',
      cargo: t('analista'),
      funcao: t('introExperiencia1'),
      dtInicio: '03/2021',
      dtTermino: `${t("termino")} - 12/2021`
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
          {t('experiencias')}
        </Heading>
        <Text>
          {t('introExperiencias')}
        </Text>
        <Grid
          templateColumns={{
            lg: 'repeat(3, 1fr)',
            sm: 'repeat(1,1fr)'
          }}
          gap={{
            sm: '10'
          }}>
          {experiencia.map((dado, idx) => (
            <Card
              key={idx}
              cor={dado.cor}
              empresa={dado.empresa}
              funcao={dado.funcao}
              cargo={dado.cargo}
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
  empresa,
  imagem,
  cargo,
  funcao,
  dtInicio,
  dtTermino }) => {

  const { t } = useTranslation("common");

  return (
    <Box
      maxW={'350px'}
      w={'full'}
      pt='4'
      borderRadius='2xl'
      minH={'22'}
      boxShadow='lg'
      overflow={'hidden'}>
      <Flex justify={'center'}>
        <Avatar
          size={'lg'}
          src={imagem}
          bg='gray.200'
          alt={'Empresa'}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>
      <Box
        p={4}>
        <Stack
          spacing={2}
          align={'center'}
          textAlign='center'
          mb={5}>
          <Heading
            fontSize={'2xl'}
            fontWeight={500}
            fontFamily={'body'}>
            {empresa}
          </Heading>
          <Text>
            {cargo}
          </Text>
          <Text
            fontSize='sm'>
            {funcao}
          </Text>
        </Stack>

        <Stack
          direction={'row'}
          justify={'center'}
          spacing={6}>
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
            {dtTermino}
          </Tag>
        </Stack>
      </Box>
    </Box>
  )
}