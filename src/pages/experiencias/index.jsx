import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../components/Menu"));

const experienciaSuporte = [
  {
    cor: 'red.400',
    empresa: 'Tradesquash',
    imagem: 'https://media.licdn.com/dms/image/C4D0BAQEOBUxgbtPSAQ/company-logo_200_200/0/1561975551199?e=1675900800&v=beta&t=7wLVF9QO-2rDYHpCJGgVOSHqz2dT99RPvi36s7D6HU0',
    cargo: t('analista'),
    funcao: t('introExperiencia1'),
    dtInicio: '03/2021',
    dtTermino: '12/2021'
  }
]

const experienciaProgramacao = [
  {
    cor: 'purple.400',
    empresa: 'Webpeak',
    imagem: 'https://global-uploads.webflow.com/5e94a806d55af47725f53001/5ee15e37d52645173ea0d613_favicon-256.png',
    cargo: t('estagiaria'),
    funcao: t('introExperiencia2'),
    dtInicio: '01/2022',
    dtTermino: t('atualmente')
  }
]

export default function Experiencias() {

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
          {experienciaSuporte.map((dado, idx) => (
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
          {experienciaProgramacao.map((dado, idx) => (
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
  cor,
  empresa,
  imagem,
  cargo,
  funcao,
  dtInicio,
  dtTermino }) => {
  return (
    <Box
      maxW={'350px'}
      w={'full'}
      pt='4'
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
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
          <Text
            color={'gray.500'}>
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
          <Stack
            spacing={0}
            align={'center'}>
            <Text
              fontWeight={600}>
              {dtInicio}
            </Text>
            <Text
              fontSize={'sm'}
              color={'gray.500'}>
              {t('inicio')}
            </Text>
          </Stack>
          <Stack
            spacing={0}
            align={'center'}>
            <Text
              fontWeight={600}>
              {dtTermino}
            </Text>
            <Text
              fontSize={'sm'}
              color={'gray.500'}>
              {t('termino')}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}