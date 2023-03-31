import {
    Box,
    Flex,
    Text,
    Image,
    Heading,
    Button,
  } from '@chakra-ui/react';
  import Menu from '../components/Menu';
  import { useRouter } from 'next/router';
  import useTranslation from 'next-translate/useTranslation';
  import { AiOutlineArrowRight } from "react-icons/ai";
  import { useEffect, useState } from 'react';
  
  export default function Home() {
  
    const router = useRouter();
    const { t } = useTranslation("common");
  
    const [hora, setHora] = useState();
  
  
    var myDate = new Date();
    var currentHour = myDate.getHours();
  
    useEffect(() => {
      if (currentHour <= 12) setHora(t("dia"));
      else if (currentHour >= 12 && currentHour <= 17) setHora(t("tarde"));
      else if (currentHour >= 17 && currentHour <= 24) setHora(t("noite"));
    }, []);
  
    return (
      <Menu>
        <Flex
          flexDir={'column'}
          gap='4'>
          <Heading
            as={'h1'}
            fontSize={'5xl'}
            fontFamily='monospace'
            textTransform='uppercase'
            fontWeight={'hairline'}>
            Home
          </Heading>
          <Text
            fontSize={'3xl'}
            fontFamily='mono'>
            {hora}, {t('meChamo')} Giovana Furlan
          </Text>
          <Box
            borderLeft={'2px'}
            h={'auto'}
            my={4} >
            <Image
              src='/images/avatar.webp'
              alt='Perfil'
              w={300}
              h={300}
              borderColor={'gray.300'} />
          </Box>
          <Text
            fontSize={'2xl'}
            fontFamily='mono'>
            {t('programadora')}
          </Text>
          <Flex
            gap='4'>
            <Flex
              flexDir={'column'}
              gap='2'>
              <Text>
                {t('introducao')}
              </Text>
              <Text>
                {t('introducao2')}
              </Text>
            </Flex>
            <Button
              title='Conhecimentos'
              onClick={() => router.push('/conhecimentos')}
              bg='black'
              fontSize='14px'
              p={{
                lg: 'auto',
                sm: 2
              }}>
              <AiOutlineArrowRight
                color='white'
                fontSize={'30px'} />
            </Button>
          </Flex>
        </Flex>
      </Menu>
    );
  }
  