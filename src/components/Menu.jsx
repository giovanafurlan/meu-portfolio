import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Container,
  Tag,
  Avatar,
  TagLabel,
  TagRightIcon,
} from '@chakra-ui/react';
import {
  FiHome,
  FiMenu,
  FiGrid,
  FiShoppingCart,
  FiFolder,
  FiArchive,
  FiBookmark,
  FiMessageSquare,
  FiLink,
  FiGithub,
  FiYoutube,
  FiLinkedin
} from 'react-icons/fi';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import DarkLight from './DarkLight';
import Language from './Language';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function SideBar({ children }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = (useColorModeValue('gray.100', 'gray.900'));

  return (
    <Box
      bg={bg}
      minH={'100vh'}>
      <SidebarContent
        onClose={() => onClose}
        display={{
          base: 'none',
          md: 'block'
        }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        display={{
          base: 'flex',
          md: 'none'
        }}
        onOpen={onOpen} />
      <Box
        ml={{
          base: 0,
          md: 60
        }}
        p="4">
        <Container
          maxW={'5xl'}
          py={{
            lg: '4',
            sm: '20'
          }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  const bg = (useColorModeValue('white', 'gray.900'));
  const border = (useColorModeValue('gray.200', 'gray.700'));

  const { t } = useTranslation("common");

  const linkItems = [
    { name: 'Home', icon: FiHome, link: '/' },
    { name: t('conhecimentos'), icon: FiFolder, link: '/conhecimentos' },
    { name: t('experiencias'), icon: FiArchive, link: '/experiencias' },
    { name: t('projetos'), icon: FiGrid, link: '/projetos' },
    { name: 'Blog', icon: FiBookmark, link: '/blog' },
    { name: t('contato'), icon: FiMessageSquare, link: '/contato' },
  ];

  const linkItemsTools = [
    { name: t('encurtadorURL'), icon: FiLink, link: '/ferramentas/encurtadorURL' }
  ];

  const color = useColorModeValue('white', '#171923');

  return (
    <Box
      bg={bg}
      overflowY='auto'
      overflowX={'hidden'}
      borderRight="1px"
      borderRightColor={border}
      w={{
        base: 'full',
        md: 60
      }}
      pos="fixed"
      h="full"
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#d6b8ff',
          borderRadius: '24px',
        },
      }}
      {...rest}>

      <Flex
        h="20"
        alignItems="center"
        mx="6"
        my='4'
        justifyContent="space-between">
        <Image
          src={'/images/logo.webp'}
          alt='Logo'
          ml='4' />
        <CloseButton
          display={{
            base: 'flex',
            md: 'none'
          }}
          onClick={onClose} />
      </Flex>
      <br />
      {linkItems.map((link) => (
        <NavItem
          key={link.name}
          link={link.link}
          icon={link.icon}>
          {link.name}
        </NavItem>
      ))}

      <Accordion
        allowToggle>
        <AccordionItem
          border={'none'}>
          <AccordionButton
            p='0'
            borderRadius="lg"
            _hover={{
              bg: 'gray.200',
              color: 'black',
            }}
            w='min-content'
            mx="4"
            mt='2'
            pr='10'>
            <Flex
              align="center"
              p="2"
              cursor="pointer">
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'primary',
                }}
                as={FiShoppingCart}
              />
              <Text
                fontSize={'14.5px'}>
                {t('ferramentas')}
              </Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pb={'80'}>
            {linkItemsTools.map((link) => (
              <NavItem
                key={link.name}
                link={link.link}
                icon={link.icon}>
                {link.name}
              </NavItem>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex
        pos='fixed'
        flexDir={'column'}
        gap='4'
        align={'center'}
        bottom={{
          lg: '0',
          sm: '20'
        }}
        w='56'
        py='4'
        bg={color}>
        <Link
          aria-label={'Code'}
          href={'https://github.com/giovanafurlan/meu-portfolio'}
          target={'_blank'}
          _hover={{ textDecor: 'none' }}
          _focus={{
            outline: 'none'
          }}>
          <Flex
            align={'center'}
            gap='2'
            pr='4'>
            <Tag
              size='lg'
              colorScheme={''}
              borderRadius='full'>
              <TagLabel
                fontSize={'sm'}>
                Code
              </TagLabel>
              <TagRightIcon
                as={ExternalLinkIcon} />
            </Tag>
          </Flex>
        </Link>
        <Flex
          justifyContent={'center'}
          display={{
            lg: 'flex',
            sm: 'none'
          }}>
          <DarkLight />
          <Language />
        </Flex>
        <Flex
          justifyContent={'center'}>
          <NavMedia
            icone={FiGithub}
            label='Github'
            url={'https://github.com/giovanafurlan'} />
          <NavMedia
            icone={FiYoutube}
            label='Youtube'
            url={'https://www.linkedin.com/in/giovana-furlan/'} />
          <NavMedia
            icone={FiLinkedin}
            label='Linkedin'
            url={'https://www.linkedin.com/in/giovana-furlan/'} />
        </Flex>
      </Flex>
    </Box>
  )
}

const SocialMedia = ({ icon, ...rest }) => {
  const color = useColorModeValue('black', 'white');

  return (
    <Flex
      justifyContent={'center'}
      cursor="pointer"
      color={color}
      {...rest}>
      {icon && (
        <Image
          mr="4"
          fontSize="18"
          as={icon}
        />
      )}
    </Flex>
  )
}

const NavMedia = ({ url, label, icone }) => {

  return (
    <Link
      aria-label={label}
      href={url}
      target={'_blank'}
      _hover={{ textDecor: 'none' }}
      _focus={{
        outline: 'none'
      }}>
      <SocialMedia icon={icone} />
    </Link>
  )
}

const NavItem = ({ link, icon, children, ...rest }) => {
  return (
    <Link
      href={link}
      style={{
        textDecoration: 'none'
      }}
      _focus={{
        boxShadow: 'none'
      }}>
      <Flex
        align="center"
        p="2"
        mx="4"
        my='2'
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.200',
          color: 'black',
        }}
        maxW='56'
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'primary',
            }}
            as={icon}
          />
        )}
        <Text
          fontSize={'14.5px'}>
          {children}
        </Text>
      </Flex>
    </Link>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  const border = (useColorModeValue('gray.200', 'gray.700'));

  return (
    <Box
      pos='fixed'
      w='full'
      zIndex={'1'}
      ml={{
        base: 0,
        md: 60
      }}
      px={{
        base: 4,
        md: 24
      }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={border}
      justifyContent="space-between"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex
        gap='15px'
        justifyContent={'end'}>
        <DarkLight />
        <Language />
      </Flex>
    </Box>
  );
};
