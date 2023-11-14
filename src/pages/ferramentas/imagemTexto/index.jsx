import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { getImage, getTranslation } from "../../../services/getApis";
import Menu from "../../../components/Menu";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const ImageText = () => {

  const { t } = useTranslation("common");

  const border = useColorModeValue('black', 'white');
  const bg2 = useColorModeValue('black', 'white');
  const color = useColorModeValue('white', 'black');
  const hover = useColorModeValue('gray.600', 'gray.300');

  const [imageURL, setImagemURL] = useState();
  const [alt, setAlt] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const router = useRouter();
  const locale = router.locale;
  console.log("locale", locale);

  async function validateImage(e) {
    e.preventDefault();

    setIsLoading(true);

    await getImage(imageURL)
      .then(async (res) => {
        const data = res?.replace("Caption: ", "");
        console.log("data", data);

        setIsLoading(false);
        setVisibility("visible");

        setAlt(data);

        // await getTranslation(locale, data).then((res2) => {
        //   const data = res2;
        //   console.log("data", data);

        // })
        //   .catch((err) => {
        //     setIsLoading(false);

        //     console.log("getTranslation err", err);
        //   });

      })
      .catch((err) => {
        setIsLoading(false);

        console.log("getImage err", err);
      });
  }

  return (
    <Menu>
      <Flex
        flexDirection="column"
        gap="6">
        <Heading
          as={'h1'}
          fontSize={{
            lg: '5xl',
            sm: '4xl'
          }}
          fontFamily='monospace'
          textTransform='uppercase'
          fontWeight={'hairline'}>
          {t("imagemTexto")}
        </Heading>
        <form onSubmit={validateImage}>
          <Flex gap="2" align={"end"}>
            <FormControl isRequired>
              <FormLabel>
                URL {t("imagem")}
              </FormLabel>
              <Input
                borderRadius={'10px'}
                borderColor={border}
                onChange={(e) => setImagemURL(e.target.value)} />
            </FormControl>
            <Button
              type="submit"
              fontSize='14px'
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
              {t("gerar")}
            </Button>
          </Flex>
        </form>
        {isLoading
          ? (
            <Box display={isLoading === true ? "flex" : "none"} m={"0 auto"}>
              <Image src="/images/wait.gif" w="96" />
            </Box>
          ) : (
            <Flex visibility={visibility} gap="1" align={"center"}>
              <Text fontWeight={"bold"}>
                {t("resultado")}:
              </Text>
              <Text _firstLetter={{ textTransform: "uppercase" }}>
                {alt}
              </Text>
            </Flex>
          )
        }
        {/* <Head>
        <title>Alt Image Generator</title>
        <meta name="description" content="Alt image generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.h1}> Alt Image Generator</h1>
      <p>
        Send a request to `/api/generate` with `imageUrl` as a query parameter:
      </p>
      <Link
        className={styles.highlight}
        href="/api/generate?imageUrl=https://dub.sh/confpic"
      >
        http://localhost:3000/api/generate?imageUrl=https://dub.sh/confpic
      </Link> */}
      </Flex>
    </Menu>
  );
};

export default ImageText;
