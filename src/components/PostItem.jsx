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
import i18nConfig from '../../i18n.json';
import useTranslation from 'next-translate/useTranslation';

export default function PostItem({ post }) {

  const { locales, defaultLocale } = i18nConfig;
  const { t, lang } = useTranslation('common');

  return (
    <>
      {locales.map(lng => {
        if (lng === lang) return null;
        return (
          <Link
            key={lng}
            href={"/blog/" + post.slug}
            locale={post.language}>
            <a>
              <Box
                maxW={'60'}>
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
