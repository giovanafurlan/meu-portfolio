import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import useTranslation from 'next-translate/useTranslation';

export default function PostItem({ post }) {

  const { t, lang } = useTranslation('common');

  const locales = [
    {
      lang: "pt-br",
      band: "/images/bandeira-brasil.webp",
      name: "Português"
    }
  ];

  return (
    <>
      {locales.map(locale => {
        if (locale === lang) return null;
        return (
          <Link
            key={locale}
            href={"/blog/" + post.slug}
            locale={post.language}>
            <a>
              <Box
                monW={{
                  lg: '80',
                  sm: 'auto'
                }}
                minH='350px'
                p='2'
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius='lg'                    
                boxShadow='0px 4px 15px rgba(0, 0, 0, 0.3)'>
                <Image
                  src={post.image}
                  alt={post.title}
                  borderRadius='9px'
                  w='60'
                  loading='lazy' />
                <Flex
                flexDir={'column'}
                gap='1'
                mt='2'
                  textAlign={'initial'}>
                  <Heading
                    as='h3'
                    fontWeight='normal'
                    fontSize={'md'}>
                    {post.title}
                  </Heading>
                  <Text
                    fontSize={'xs'}>
                    {post.intro}
                  </Text>
                  <Date date={parseISO(post.date)} />
                </Flex>
              </Box>
            </a>
          </Link>
        );
      })}
    </>
  );
}
