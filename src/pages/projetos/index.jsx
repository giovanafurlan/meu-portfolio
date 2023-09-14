import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../components/Menu"));
import style from 'styled-components';

const StyleSwiper = style.div`
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
`

export default function Projetos() {

  const { t } = useTranslation("common");

  const [repo, setRepo] = useState([]);

  var config = {
    method: 'get',
    url: 'https://api.github.com/users/giovanafurlan/repos',
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        const data = response.data;
        console.log(data)
        setRepo(data);

        for (let i = 0; i < data.length; i++) {
          const element = data[i];
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Menu>
      <Flex
        flexDir={'column'}
        gap='6'
        maxW={'full'}
        margin='0 auto'
        height={'max-content'}>
        <Heading
          as={'h1'}
          fontSize={'5xl'}
          fontFamily='monospace'
          textTransform='uppercase'
          fontWeight={'hairline'}>
          {t('projetos')}
        </Heading>
        <Text>
          {t('introProjetos')}
        </Text>
        <StyleSwiper>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            style={{
              "--swiper-pagination-color": "#052be8",
              "--swiper-pagination-bullet-inactive-color": "#999999",
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper">
            <br /><br />
            {repo.map((result, idx) => (
              <Box
                key={idx}>
                <SwiperSlide>
                  <CardRepo
                    nome={result.name}
                    user={result.owner.login}
                    userImg={result.owner.avatar_url}
                    descricao={result.description}
                    link={result.clone_url} />
                </SwiperSlide>
              </Box>
            ))}
          </Swiper>
        </StyleSwiper>
      </Flex>
    </Menu >
  );
}

function CardRepo(
  {
    user,
    userImg,
    nome,
    link,
    descricao
  }
) {
  return (
    <Link
      href={link}
      target='_blank'>
      <Box
        borderRadius='2xl'
        boxShadow='2xl'
        p='4'
        h='300px'>
        <Flex
          align={'center'}
          gap='2'
          mb='6'>
          <Avatar src={userImg} />
          <Text>{user}</Text>
        </Flex>
        <Flex
          flexDir={'column'}
          gap='4'>
          <Text
            fontSize={'2xl'}
            fontWeight='medium'>
            {nome}
          </Text>
          <Text fontSize={'md'}>
            {descricao}
          </Text>
          <Text
            fontSize={'12px'}>
            {link}
          </Text>
        </Flex>
      </Box>
    </Link>
  )
}