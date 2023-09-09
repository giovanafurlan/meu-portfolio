import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { send } from 'emailjs-com';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../components/Menu"));

export default function Contato() {

  const { t } = useTranslation("common");

  const toast = useToast();

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'giovananelofurlan@gmail.com',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_zx6cc46',
      'template_l00axnd',
      toSend,
      'F9VLtnIP3HQtE31RM'
    )
      .then((response) => {
        toast({
          title: t('mensagem'),
          status: 'success',
          duration: 9000,
          position: 'top',
          isClosable: true,
        });
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  const bg = useColorModeValue('white', 'gray.800');
  const bg2 = useColorModeValue('black', 'white');
  const color = useColorModeValue('white', 'black');
  const hover = useColorModeValue('gray.600', 'gray.300');

  return (
    <Menu>
      <Heading
        as={'h1'}
        fontSize={{
          lg: '5xl',
          sm: '4xl'
        }}
        fontFamily='monospace'
        textTransform='uppercase'
        fontWeight={'hairline'}
        mb='6'>
        {t('contato')}
      </Heading>
      <Text
        mb='6'>
        {t('entreContato')}
      </Text>
      <Flex
        gap='8'
        align={'center'}
        flexDir={{
          lg: 'row',
          sm: 'column'
        }}>
        <Image
          src='/images/contato.webp'
          maxW={{
            lg: '30%',
            sm: 'auto'
          }} />
        <form onSubmit={onSubmit}>
          <VStack
            gap={6}
            w={{
              lg: 'lg',
              sm: 'auto'
            }}>
            <FormControl
              isRequired>
              <FormLabel>
                {t('nome')}
              </FormLabel>
              <Input
                type='text'
                name='from_name'
                placeholder='Nome'
                value={toSend.from_name}
                onChange={handleChange}
                boxShadow={'lg'}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius={'lg'} />
            </FormControl>
            <FormControl
              display={'none'}>
              <FormLabel>{t('destinatario')}</FormLabel>
              <Input
                type='text'
                name='to_name'
                placeholder={t('destinatario')}
                value={toSend.to_name}
                onChange={handleChange}
                boxShadow={'lg'}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius={'lg'}
                required
              />
            </FormControl>
            <FormControl
              isRequired>
              <FormLabel>{t('suaMensagem')}</FormLabel>
              <Textarea
                type='text'
                name='message'
                placeholder={t('suaMensagem')}
                value={toSend.message}
                onChange={handleChange}
                boxShadow={'lg'}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius={'lg'}
                required
              />
            </FormControl>
            <FormControl
              isRequired>
              <FormLabel>
                {t('seuEmail')}
              </FormLabel>
              <Input
                type='text'
                name='reply_to'
                placeholder={t('seuEmail')}
                value={toSend.reply_to}
                onChange={handleChange}
                boxShadow={'lg'}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius={'lg'}
                required
              />
            </FormControl>
            <Button
              // onSubmit={() =>
              //   toast({
              //     title: t('mensagem'),
              //     status: 'success',
              //     duration: 9000,
              //     position: 'top',
              //     isClosable: true,
              //   })
              // }
              type='submit'
              fontSize='14px'
              color={color}
              bg={bg2}
              _hover={{
                bg: hover
              }}>
              {t('enviar')}
            </Button>
          </VStack>
        </form>
      </Flex>
    </Menu>
  );
}
