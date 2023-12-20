import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useUser } from "@clerk/nextjs";
import { setCookie } from "cookies-next";
import Menu from '../../components/Menu';
import Greeting from '../../components/Greeting';
import RandomFact from '../../components/RandomFact';

export default function Home() {

  const { t } = useTranslation("common");

  const bg2 = useColorModeValue('black', 'white');
  const color = useColorModeValue('white', 'black');
  const hover = useColorModeValue('gray.600', 'gray.300');

  const router = useRouter();

  const { user } = useUser();

  return (
    <Menu>
      <Flex
        flexDir={'column'}
        gap='4'
        onLoad={setCookie("uid", user?.id)}>
        <Heading
          as={'h1'}
          fontSize={'5xl'}
          fontFamily='monospace'
          textTransform='uppercase'
          fontWeight={'hairline'}>
          Home
        </Heading>
        <Greeting />
        <RandomFact />
        <Box
          h={'auto'}
          my={4} >
          <Image
            src='/images/avatar.webp'
            alt='Perfil'
            w={300}
            h={300} />
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
            fontSize='14px'
            w={{
              lg: 'min-content',
              sm: 'full'
            }}
            color={bg2}
            bg={"none"}
            _hover={{
              bg: hover,
              color: color
            }}
            p={{
              lg: 'auto',
              sm: 2
            }}>
            <AiOutlineArrowRight
              color={useColorModeValue("black", "white")}
              fontSize={'30px'} />
          </Button>
        </Flex>
      </Flex>
    </Menu>
  );
}
