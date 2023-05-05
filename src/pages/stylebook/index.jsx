import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import dynamic from 'next/dynamic'
const Menu = dynamic(() => import("../../components/Menu"));

export default function Stylebook() {

    const { t } = useTranslation("common");

    const cores = [
        {
            nome: t('primaria'),
            hex: '#5B1AB2',
            bg: 'primary',
            tituloCor: 'white'
        },
        {
            nome: t('secundaria'),
            hex: '#B69DF8',
            bg: 'secondary',
            tituloCor: 'white'
        },
        {
            nome: t('tercearia'),
            hex: '#FF6600',
            bg: 'tertiary',
            tituloCor: 'white'
        }
    ]

    const background = [
        {
            nome: t('claro'),
            hex: '#FBF7FF',
            bg: 'bgClear',
            tituloCor: 'black'
        },
        {
            nome: t('escuro'),
            hex: '#43474f',
            bg: 'bgDark',
            tituloCor: 'white'
        }
    ]

    const cor = useColorModeValue('gray.400', 'gray.600');

    return (
        <Menu>
            <Flex
                flexDir={'column'}
                gap='6'
                mt='12'>
                <Flex
                    flexDir={{
                        lg: 'row',
                        sm: 'column'
                    }}
                    m={{
                        lg: '0',
                        sm: '0 auto'
                    }}
                    gap='5'
                    mt='15px'>
                    {cores.map((cor, idx) => (
                        <Cor
                            key={idx}
                            nome={cor.nome}
                            hex={cor.hex}
                            bg={cor.bg}
                            tituloCor={cor.tituloCor} />
                    ))}
                </Flex>
                <Flex
                    flexDir={{
                        lg: 'row',
                        sm: 'column'
                    }}
                    m={{
                        lg: '0',
                        sm: '0 auto'
                    }}
                    gap='5'
                    mt='15px'>
                    {background.map((cor, idx) => (
                        <Cor
                            key={idx}
                            nome={cor.nome}
                            hex={cor.hex}
                            bg={cor.bg}
                            tituloCor={cor.tituloCor} />
                    ))}
                </Flex>
                <Fonte nome='Heading 1'>
                    <Heading
                        variant={'h1'}>
                        Giovana
                    </Heading>
                </Fonte>

                <Fonte nome='Heading 2'>
                    <Heading
                        variant={'h2'}>
                        Giovana
                    </Heading>
                </Fonte>

                <Fonte nome='Heading 3'>
                    <Heading
                        variant={'h3'}>
                        Giovana
                    </Heading>
                </Fonte>

                <Fonte nome={t('paragrafo')}>
                    <Text>
                        Giovana
                    </Text>
                </Fonte>

                <Fonte nome='Link'>
                    <Box
                        fontWeight={'500'}
                        fontSize='14px'
                        _hover={{
                            textDecoration: 'none',
                            color: cor
                        }}>
                        <Link
                            href={''}>
                            Giovana
                        </Link>
                    </Box>
                </Fonte>

                <Fonte nome={t('btnPrimario')}>
                    <Button
                        variant={'button'}
                        _hover={{
                            bg: '#B69DF8'
                        }}>
                        Giovana
                    </Button>
                </Fonte>

                <Fonte nome={t('btnSecundario')}>
                    <Button
                        variant={'button-outline'}
                        _hover={{
                            bg: '#FFB596'
                        }}>
                        Giovana
                    </Button>
                </Fonte>

                <Fonte nome='Accordion'>
                    <Accordion
                        defaultIndex={[0]}
                        allowMultiple>
                        <AccordionItem w='md'>
                            <AccordionButton>
                                <Text>
                                    Lorem
                                </Text>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel maxW={'md'}>
                                <Text
                                    align={'initial'}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ipsam expedita eaque. At ex voluptatum adipisci omnis id saepe natus, nobis itaque laborum beatae repudiandae! Sint reprehenderit adipisci tenetur aspernatur.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Fonte>
            </Flex>
        </Menu>
    )
}

function Cor({ nome, hex, bg, tituloCor }) {
    return (
        <>
            <Flex
                bg={bg}
                w='60'
                h='40'
                borderRadius={'5px'}
                justifyContent={'space-between'}
                flexDir='column'
                p='4'>
                <Text
                    color={tituloCor}
                    fontSize={'lg'}
                    align={'initial'}>
                    {nome}
                </Text>
                <Text
                    fontSize={'sm'}
                    color={tituloCor}
                    align={'end'}>
                    {hex}
                </Text>
            </Flex>
        </>
    )
}

function Fonte({ nome, children }) {
    return (
        <>
            <Flex
                flexDir={{
                    lg: 'row',
                    sm: 'column'
                }}
                gap={{
                    lg: '0',
                    sm: '4'
                }}
                justifyContent={'space-between'}
                align='center'>
                <Text>
                    {nome}
                </Text>
                {children}
            </Flex>
            <Divider />
        </>
    )
}