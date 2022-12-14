import {
  Flex,
  Box,
  Heading
} from '@chakra-ui/react';
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { getTag } from "../lib/tags";
import Menu from '../components/Menu';
import Date from "./Date";
import TagButton from "./TagButton";
import style from 'styled-components';

const Format = style.div`
* {
  all: revert;
  text-align: center;
}

p {
  font-size: 18px;
}

li {
  font-size: 18px;
  text-align: start !important;
}

ul {
  margin-left: 20%;
}

a {
  background-color: transparent;
  -webkit-transition: .2s cubic-bezier(.215, .61, .355, 1);
  transition: .2s cubic-bezier(.215, .61, .355, 1);
  color: #8a8b8c;
  text-decoration: none;
}

a:hover {
  color: darkgray;
}

strong {
  font-weight: 700;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 40px;
  margin-bottom: 30px;
  font-weight: 400;
}

h1 {
  font-size: 3.125rem;
  line-height: 3.188rem;
}

h2 {
  font-size: 2.75rem;
  line-height: 3.125rem;
}

h3 {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

h4 {
  font-size: 1.313rem;
  line-height: 1.938rem;
}

.flex {
  display: flex;
  justify-content: center;
}

.flex a img {
  margin-right: 10px;
}

.grid{
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.grid img{
  width: 100px;
}

img {
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  margin: 10px 0 10px 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 9px;
}

.img-pequena {
  width: 30%;
}

iframe {
  width: 100%;
  height: 40vh;
  margin: 0 auto;
}

figure {
  padding: 0 !important;
  margin: 0 auto;
}

figcaption {
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: center;
}

blockquote {
  margin: 0 0 10px;
  padding: 10px 20px;
  border-left: 5px solid #e2e2e2;
  font-size: 18px;
  line-height: 22px;
}

@media(min-width: 320px) and (max-width: 1000px) {
  * {
    margin: 0 auto;
  }

  img {
    width: auto;
  }

  .img-pequena {
    width: 80%;
  }
}
`
export default function PostLayout({
  image,
  title,
  date,
  slug,
  tags,
  intro,
  children
}) {
  const keywords = tags.map(it => getTag(it).name);

  return (
    <>
      <BasicMeta
        url={`/blog/${slug}`}
        title={title}
        keywords={keywords}
        description={intro}
      />
      <TwitterCardMeta
        url={`/blog/${slug}`}
        title={title}
        description={intro}
      />
      <OpenGraphMeta
        url={`/blog/${slug}`}
        title={title}
        description={intro}
      />
      <JsonLdMeta
        url={`/blog/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        description={intro}
      />
      <Menu>
        <Flex
          flexDir={'column'}
          gap='6'
          textAlign='center'>
          <Heading
            as={'h1'}
            fontSize={'4xl'}
            fontFamily='monospace'
            textTransform='uppercase'
            fontWeight={'hairline'}>
            {title}
          </Heading>
          <Flex
            gap='2'
            margin={'0 auto'}>
            {tags?.map((it, i) => (
              <Box key={i}>
                <TagButton tag={getTag(it)} />
              </Box>
            ))}
          </Flex>
          <Date date={date} />
        </Flex>
        <Format>
          {children}
        </Format>
      </Menu>
    </>
  );
}