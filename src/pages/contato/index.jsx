import { useState } from 'react';
import {
  Alert,
  AlertIcon,
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
  VStack,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { send } from 'emailjs-com';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../components/Menu"));

export default function Contato() {

  const router = useRouter();
  const { t } = useTranslation("common");

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
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  function alertar() {
    const alert = document.getElementById('alert');
    alert.style.display = 'inline-flex';
  }

  const bg = useColorModeValue('white', 'gray.800');
  const bg2 = useColorModeValue('black', 'white');
  const color = useColorModeValue('white', 'black');
  const color2 = useColorModeValue('black', 'white');
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
        Entre em contato para maiores trocas
      </Text>
      <Alert
        status='success'
        display={'none'}
        id='alert'>
        <AlertIcon />
        <Text
          color={color2}>
          Mensagem enviada! Obrigada
        </Text>
      </Alert>
      <br />
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
            <FormControl>
              <FormLabel>
                {t('nome')}
              </FormLabel>
              <Input
                type='text'
                name='from_name'
                placeholder='Nome'
                value={toSend.from_name}
                onChange={handleChange}
                bg={bg}
                borderColor='black'
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
                bg={bg}
                borderColor='black'
                borderRadius={'lg'}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t('suaMensagem')}</FormLabel>
              <Textarea
                type='text'
                name='message'
                placeholder={t('suaMensagem')}
                value={toSend.message}
                onChange={handleChange}
                bg={bg}
                borderColor='black'
                borderRadius={'lg'}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t('seuEmail')}</FormLabel>
              <Input
                type='text'
                name='reply_to'
                placeholder={t('seuEmail')}
                value={toSend.reply_to}
                onChange={handleChange}
                bg={bg}
                borderColor='black'
                borderRadius={'lg'}
                required
              />
            </FormControl>
            <Button
              onClick={alertar}
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
