import {
  Box,
  Heading,
  Text,
  Stack,
  Image
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
                maxW={{
                  lg: '60',
                  sm: 'auto'
                }}
                minH='400px'
                p='2'
                borderRadius='lg'                    
                boxShadow='0px 4px 15px rgba(0, 0, 0, 0.3)'>
                <Image
                  src={post.image}
                  alt={post.title}
                  borderRadius='9px'
                  loading='lazy' />
                <Stack
                  py='4'
                  textAlign={'initial'}>
                  <Heading
                    as='h3'
                    fontWeight='normal'
                    fontSize={'lg'}>
                    {post.title}
                  </Heading>
                  <Text
                    fontSize={'sm'}>
                    {post.intro}
                  </Text>
                  <Date date={parseISO(post.date)} />
                </Stack>
              </Box>
            </a>
          </Link>
        );
      })}
    </>
  );
}
