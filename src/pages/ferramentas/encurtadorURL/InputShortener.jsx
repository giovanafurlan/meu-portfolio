import { useState } from "react"
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function InputShortener({ setInputValue }) {

  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  const { t } = useTranslation("common");

  const bg2 = useColorModeValue('black', 'white');
  const color = useColorModeValue('white', 'black');
  const hover = useColorModeValue('gray.600', 'gray.300');
  const border = useColorModeValue('black', 'white');

  return (
    <div className="inputContainer">
      <Flex
        flexDir={'column'}
        gap='6'>
        <Heading
          as={'h1'}
          fontSize={{
            lg: '5xl',
            sm: '4xl'
          }}
          fontFamily='monospace'
          textTransform='uppercase'
          fontWeight={'hairline'}>
          {t("encurtadorURL")}
        </Heading>
        <Text
          fontSize={'md'}>
          {t("coleURL")}
        </Text>
        <Flex
          align={'center'}
          flexDir={{
            lg: 'row',
            sm: 'column'
          }}
          gap='4'>
          <Input
            borderRadius={'10px'}
            borderColor={border}
            placeholder={t("exEncurtadorURL")}
            value={value}
            onChange={e => setValue(e.target.value)} />
          <Button
            onClick={handleClick}
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
            {t("envia")}
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}