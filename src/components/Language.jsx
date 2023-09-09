import {
    Flex,
    Menu,
    MenuButton,
    MenuList,
    Tag,
    TagLabel,
    useColorModeValue
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { IoLanguage } from "react-icons/io5";

export default function Language() {

    const { t, lang } = useTranslation('common');

    const locales = [
        {
            lang: "pt-br",
            name: "Português"
        },
        {
            lang: "en",
            name: "English"
        },
        // {
        //     lang: "es",
        //     name: "Español"
        // }
    ];

    const color = useColorModeValue('black', 'white');

    return (
        <Menu
            placement='top'
            border={'none'}
            ml='4'
            mb='6'>
            <MenuButton
                p='0'
                borderRadius={'lg'}
                title='Idioma'>
                <Flex
                    align="center"
                    p="2"
                    gap='2'
                    cursor="pointer">
                    <IoLanguage
                        color={color} />
                </Flex>
            </MenuButton>
            <MenuList
                display='flex'
                flexDir={'column'}
                gap='2'
                bg='none'
                pl='2'
                pb='-2!important'
                border='none'
                minW={'min-content'}
                boxShadow='none'>
                {locales.map(locale => {
                    if (locale === lang) return null;
                    return (
                        <Lang
                            key={locale.lang}
                            lng={locale.lang}>
                            {locale.name}
                        </Lang>
                    )
                })}
            </MenuList>
        </Menu>
    )
}

function Lang({ lng, children }) {

    const bg = useColorModeValue('gray.200', 'gray.700');

    return (
        <Link
            key={lng}
            href=""
            locale={lng}>
            <Tag
                size='lg'
                bg={bg}
                borderRadius='full'
                box-shadow='0px 4px 15px rgba(0, 0, 0, 0.07)'
                _hover={{
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)'
                }}
                pl='0'
                cursor={'pointer'}>
                <TagLabel
                    ml='4'
                    fontSize={'13px'}>
                    {children}
                </TagLabel>
            </Tag>
        </Link>
    )
}