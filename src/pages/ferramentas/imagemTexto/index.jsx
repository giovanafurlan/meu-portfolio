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
import { getImage } from "../../../services/getApis";
import Menu from "../../../components/Menu";
import useTranslation from "next-translate/useTranslation";

const ImageText = () => {
  const { t } = useTranslation("common");

  const border = useColorModeValue("black", "white");
  const bg2 = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");
  const hover = useColorModeValue("gray.600", "gray.300");

  const [file, setFile] = useState(null);
  const [alt, setAlt] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  async function validateImage(e) {
    e.preventDefault();

    setIsLoading(true);

    await getImage(file)
      .then((res) => {
        const data = res?.replace("Caption: ", "");
        console.log("data", data);

        setIsLoading(false);
        setVisibility("visible");

        setAlt(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("getImage err", err);
      });
  }

  return (
    <Menu>
      <Flex flexDirection="column" gap="6">
        <Heading
          as={"h1"}
          fontSize={{ lg: "5xl", sm: "4xl" }}
          fontFamily="monospace"
          textTransform="uppercase"
          fontWeight={"hairline"}
        >
          {t("imagemTexto")}
        </Heading>
        <form onSubmit={validateImage}>
          <Flex gap="2" align={"end"}>
            <FormControl isRequired>
              <FormLabel>{t("imagem")}</FormLabel>
              <Input
                type="file"
                accept="image/*"
                borderRadius={"10px"}
                borderColor={border}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </FormControl>
            <Button
              type="submit"
              fontSize="14px"
              w={{ lg: "min-content", sm: "full" }}
              color={bg2}
              bg={"none"}
              _hover={{ bg: hover, color: color }}
            >
              {t("gerar")}
            </Button>
          </Flex>
        </form>
        {isLoading ? (
          <Box display={isLoading ? "flex" : "none"} m={"0 auto"}>
            <Image src="/images/wait.gif" w="96" />
          </Box>
        ) : (
          <Flex visibility={visibility} gap="1" align={"center"}>
            <Text fontWeight={"bold"}>{t("resultado")}:</Text>
            <Text _firstLetter={{ textTransform: "uppercase" }}>{alt}</Text>
          </Flex>
        )}
      </Flex>
    </Menu>
  );
};

export default ImageText;
