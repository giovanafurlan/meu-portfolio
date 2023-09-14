import {
  Flex,
  Grid,
  GridItem,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import PostItem from "./PostItem";
import TagButton from "./TagButton";
import Menu from './Menu';

export default function PostList({
  blog,
  tags }) {

  const { t } = useTranslation("common");

  const imagePerRow = 3;

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <Menu>
      <Flex
        flexDir={{
          lg: 'row',
          sm: 'column'
        }}
        justifyContent={'space-between'}>
        <Flex
          maxW={'full'}
          height={'max-content'}
          flexDir='column'
          gap={'6'}
          order={{
            lg: 0,
            sm: 1
          }}>
          <Heading
            as={'h1'}
            fontSize={'5xl'}
            fontFamily='monospace'
            textTransform='uppercase'
            fontWeight={'hairline'}>
            Blog
          </Heading>
          <Flex
            flexDir={'column'}
            gap='10'>
            <Grid
              templateColumns={{
                lg: 'repeat(3, 1fr)',
                sm: 'repeat(1, 1fr)'
              }}
              gap={'3'}>
              {blog?.slice(0, next).map((it, i) => (
                <GridItem key={i}>
                  <PostItem post={it} />
                </GridItem>
              ))}
            </Grid>
            {next < blog?.length && (
              <Flex
                justifyContent={'center'}
                w='full'>
                <Button
                  onClick={handleMoreImage}
                  w={{
                      lg: 'min-content',
                      sm: 'full'
                  }}
                  color={bg2}
                  bg={"none"}
                  _hover={{
                      bg: hover,
                      color: color
                  }}>
                  {t('carrega')}
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
        <Flex
          flexDir={'column'}
          gap='4'
          mt='2.5'
          mb={{
            lg: 0,
            sm: 10
          }}
          order={{
            lg: 1,
            sm: 0
          }}>
          <Text
            fontSize={'4xl'}
            fontFamily='monospace'
            textTransform='uppercase'
            fontWeight={'hairline'}>
            Tags
          </Text>
          {tags.map((it, i) => (
            <TagButton key={i} tag={it} />
          ))}
        </Flex>
      </Flex>
    </Menu>
  );
}