import {
  Container,
  Flex,
  Button,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Menu from '../components/Menu';
import { useState } from "react";
import PostItem from "./PostItem";
import useTranslation from 'next-translate/useTranslation';

export default function TagPostList({ blog, tag }) {

  const { t } = useTranslation("common");

  const imagePerRow = 3;

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <Menu>
      <Flex
        maxW={'full'}
        height={'max-content'}
        flexDir='column'
        gap={'10'}>
        <Flex
          align={'center'}
          margin='0 auto'
          gap='2'>
          <Heading
            as={'h1'}
            fontSize={'5xl'}
            fontFamily='monospace'
            textTransform='uppercase'
            fontWeight={'hairline'}>
            Tag
          </Heading>
          <Text
            fontSize={'2xl'}>
            / {tag.name}
          </Text>
        </Flex>
        <Grid
          templateColumns={{
            lg: 'repeat(3, 1fr)',
            sm: 'repeat(1, 1fr)'
          }}
          gap={6}>
          {blog?.slice(0, next).map((it, i) => (
            <GridItem key={i}>
              <PostItem post={it} />
            </GridItem>
          ))}
        </Grid>
        <Box>
          {next < blog?.length && (
            <Flex
              justifyContent={'center'}
              w='full'>
              <Button
                onClick={handleMoreImage}
                fontSize='14px'
                variant='button'
                _hover={{
                  bg: '#B69DF8'
                }}>
                {t('carrega')}
              </Button>
            </Flex>
          )}
        </Box>
      </Flex>
    </Menu>
  );
}
