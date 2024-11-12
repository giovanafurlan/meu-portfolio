import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
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
  TagLabel,
  TagRightIcon,
} from '@chakra-ui/react';
import {
  FiHome,
  FiMenu,
  FiGrid,
  FiFolder,
  FiArchive,
  FiBookmark,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiAlignCenter
} from 'react-icons/fi';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import DarkLight from './DarkLight';
import Language from './Language';
import { useRouter } from 'next/router';

export default function SideBar({ children }) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = (useColorModeValue('white', 'gray.900'));
  const bg2 = (useColorModeValue('white', 'none'));
  const border = (useColorModeValue('white', '#2d3748'));

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
        // h='16'
        bg={bg2}
        borderBottom={'1px'}
        borderColor={border}
        w='full'>
      </Box>
      <Box
        ml={{
          base: 0,
          md: 48
        }}
        py="4">
        <Container
          maxW={'5xl'}
          ml={{
            "2xl": 0,
            lg: 12
          }}
          py={{
            lg: '12',
            sm: '20'
          }}
          px={{
            lg: '10',
            sm: '6'
          }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  const { t } = useTranslation("common");

  const bg = (useColorModeValue('white', 'gray.900'));
  const border = (useColorModeValue('gray.200', 'gray.700'));
  const color = useColorModeValue('white', '#171923');

  const linkItems = [
    { name: 'Home', icon: FiHome, link: '/home' },
    { name: t('conhecimentos'), icon: FiFolder, link: '/conhecimentos' },
    { name: t('certificados'), icon: FiFolder, link: '/certificados' },
    { name: t('experiencias'), icon: FiArchive, link: '/experiencias' },
    { name: t('educacao'), icon: FiArchive, link: '/educacao' },
    { name: t('projetos'), icon: FiGrid, link: '/projetos' },
    { name: 'Blog', icon: FiBookmark, link: '/blog' },
    { name: t('contato'), icon: FiMessageSquare, link: '/contato' },
    // { name: 'Stylebook', icon: MdOutlineStyle, link: '/stylebook' },
  ];

  const linkItemsTools = [
    // { name: t('encurtadorURL'), icon: FiLink, link: '/ferramentas/encurtadorURL' },
    { name: t('imagemTexto'), icon: FiAlignCenter, link: '/ferramentas/imagemTexto' },
  ];

  return (
    <Box
      bg={bg}
      overflowY='auto'
      w={{
        base: 'full',
        md: 56
      }}
      mt={{
        lg: "6",
        sm: 0
      }}
      ml={{
        lg: "18",
        sm: 0
      }}
      pos="fixed"
      h="full"
      css={{
        '&::-webkit-scrollbar': {
          width: '2px'
        },
        '&::-webkit-scrollbar-track': {
          width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: useColorModeValue("black", "white"),
          borderRadius: '24px',
        },
      }}
      {...rest}>
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between">
        <CloseButton
          display={{
            base: 'flex',
            md: 'none'
          }}
          pos={"absolute"}
          right={10}
          onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem
          key={link.name}
          link={link.link}
          icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      {/* <Accordion
        defaultIndex={[0]}
        allowToggle>
        <AccordionItem
          border={'none'}>
          <AccordionButton
            p='0'
            borderRadius="lg"
            _hover={{
              color: 'gray',
            }}
            w='52'
            pr='10'>
            <Flex
              pl={4}
              align="center"
              cursor="pointer">
              <Text
                fontSize={'16px'}>
                {t('ferramentas')}
              </Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            pb={{
              lg: '80',
              sm: '32'
            }}>
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
      </Accordion> */}
      <Flex
        pos={{
          lg: 'fixed'
        }}
        flexDir={'column'}
        gap='4'
        align={'center'}
        bottom={{
          lg: '0',
          sm: '0'
        }}
        m="0 auto"
        w="52"
        py='4'
        bg={color}>
        <Flex
          align={'center'}
          gap='2'
          pr='2'>
          <Link
            aria-label={'Code'}
            href={'https://github.com/giovanafurlan/meu-portfolio'}
            target='_blank'
            _hover={{ textDecor: 'none' }}
            _focus={{
              outline: 'none'
            }}>
            <Tag
              size='lg'
              colorScheme={''}
              borderRadius='full'
              cursor='pointer'>
              <TagLabel
                fontSize={'sm'}>
                Code
              </TagLabel>
              <TagRightIcon
                as={ExternalLinkIcon} />
            </Tag>
          </Link>
        </Flex>

        <Flex
          justifyContent={'center'}
          align={"center"}
          gap="2">
          <DarkLight />
          <Language />
          <Text fontWeight={"bold"}>|</Text>
          <NavMedia
            icone={FiGithub}
            label='Github'
            url={'https://github.com/giovanafurlan'} />
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
          mr="2"
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

  const router = useRouter();

  return (
    <Box w="fit-content">
      <style jsx global>{`
      .active div p {
        font-weight: 800;
        color: gray;
      }
    `}</style>
      <Link
        className={router.pathname == link ? "active" : ""}
        href={link}
        style={{
          textDecoration: 'none'
        }}
        _focus={{
          boxShadow: 'none'
        }}>
        <Flex
          align="center"
          pl="4"
          // mx="4"
          my='3'
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            // bg: 'primary',
            color: 'gray',
          }}
          maxW='56'
          {...rest}>
          <Text
            fontSize={'16px'}>
            {children}
          </Text>
        </Flex>
      </Link>
    </Box>
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
    </Box>
  );
};
