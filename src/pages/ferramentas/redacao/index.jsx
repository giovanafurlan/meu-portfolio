import {
  useEffect,
  useState,
  useMemo
} from "react";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { BiPlusCircle } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useRouter } from "next/router";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { getCookie, setCookie } from "cookies-next";
import { getText } from "../../../services/getApis";
import {
  listContent,
  listText
} from "../../../services/listApis";
import AnimatedText from "../../../components/AnimatedText";
import Menu from '../../../components/Menu';
import Field from "../../../components/Field"; import styled from "styled-components";
import { IoReload } from "react-icons/io5";

export const Estilo = styled.div`
  .resultado {
    margin: 4vw 1vw 4vw 4vw;
  }

  .resultado .barra-de-resultado {
    width: 100%;
    height: 1rem;
    background: #d1d1d1;
    border-radius: 1rem;
    position: relative;
  }

  .resultado .barra-de-resultado .pontuacao {
    width: 6%;
    height: 100%;
    border-radius: 1rem;
    position: relative;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background: #02c722;
  }

  .resultado .barra-de-resultado .pontuacao.red {
    background: red;
  }

  .resultado .barra-de-resultado .pontuacao.orange {
    background: orange;
  }

  .resultado .barra-de-resultado .pontuacao.green {
    background: #02c722;
  }

  .resultado .barra-de-resultado .pontuacao .circle {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    background: #d1d1d1;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    -webkit-transform: translate3d(10%, -37.5%, 0);
    transform: translate3d(10%, -37.5%, 0);
    color: #fff;
  }

  .resultado .barra-de-resultado .pontuacao .circle.red {
    background: red;
  }

  .resultado .barra-de-resultado .pontuacao .circle.orange {
    background: orange;
  }

  .resultado .barra-de-resultado .pontuacao .circle.green {
    background: #02c722;
  }

  .resultado .barra-de-resultado .pontuacao .circle span {
    font-size: 14px;
  }

  .resultado .barra-de-resultado .pontuacao .circle strong {
    font-size: 1.5rem;
  }

  .metricas .check-de-metricas {
    list-style: none;
  }

  .metricas .check-de-metricas li .error,
  .metricas .check-de-metricas li .warning {
    margin-top: 0.5rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    width: 100%;
    font-size: 14px;
    display: none;
    border-radius: 0.25rem;
  }

  .metricas .check-de-metricas li .error {
    color: red;
  }

  .metricas .check-de-metricas li .warning {
    color: orange;
  }

  .metricas .check-de-metricas li .check {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 100%;
    max-width: 2.5rem;
    max-height: 2.5rem;
    border: 2px solid #a3a0a0;
  }

  .metricas .check-de-metricas li .check.red {
    border: 2px solid red;
  }

  .metricas .check-de-metricas li .check.red svg path {
    fill: red;
  }

  .metricas .check-de-metricas li .check.red + .error {
    display: block;
  }

  .metricas .check-de-metricas li .check.orange {
    border: 2px solid #ffbf00;
  }

  .metricas .check-de-metricas li .check.orange svg path {
    fill: #ffbf00;
  }

  .metricas .check-de-metricas li .check.orange ~ .warning {
    display: block;
  }

  .metricas .check-de-metricas li .check.green {
    border: 2px solid green;
  }

  .metricas .check-de-metricas li .check.green svg path {
    fill: green;
  }

  .ql-toolbar.ql-snow,
  .ql-snow .ql-stroke,
  .ql-snow .ql-fill,
  .ql-snow .ql-picker {
    border-radius: 20px 20px 0 0;
    border-color: #8a8686;
    color: #8a8686;
    stroke: #8a8686;
  }

  .ql-container.ql-snow {
    border-radius: 0 0 20px 20px;
    border-color: #8a8686;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    .resultado {
      margin: 10vw;
    }
    .resultado .barra-de-resultado .pontuacao .circle {
      width: 4rem;
      height: 4rem;
    }
    .metricas .check-de-metricas li .check {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export default function Redacao() {

  const { t } = useTranslation("common");

  const bg2 = useColorModeValue('black', 'white');
  const color = useColorModeValue('white', 'black');
  const hover = useColorModeValue('gray.600', 'gray.300');

  const toast = useToast();

  const theme = "snow";
  const { quill, quillRef } = useQuill({ theme });

  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState('none');
  const [display2, setDisplay2] = useState('flex');
  const [visibility, setVisibility] = useState("hidden");

  const [themeEssay, setThemeEssay] = useState();
  const [text, setText] = useState();

  const [lista, setLista] = useState([]);

  const userId = getCookie("uid");

  const router = useRouter();
  const locale = router.locale;

  async function handleSubmit() {

    setIsLoading(true);
    setVisibility('visible');

    getText(locale, themeEssay)
      .then((res) => {

        setIsLoading(false);
        setVisibility('visible');

        const data = res;

        data.choices.forEach(element => {
          const el = element.text;

          setText(el);

          if (quill) {
            quill.clipboard.dangerouslyPasteHTML(el);
          }

          toast({
            title: 'Generation save',
            status: 'success',
            position: 'top',
            duration: 12000,
            isClosable: true,
          });

          let texto = {
            userId: userId,
            id: data.id,
            themeEssay: themeEssay,
            result: el,
            createdAt: new Date().toLocaleString('pt-BR')
          }

          setTimeout(function () {
            listText(texto).catch((err) =>
              console.error(err)
            )
          }, 5000);
        })

      })
      .catch((err) => {
        setIsLoading(false);
        setVisibility('hidden');
        console.log(err);
      })
      .finally();
  }

  const fields = [
    {
      isRequired: true,
      id: 'theme',
      title: t('tema'),
      tooltip: t('tema'),
      value: themeEssay,
      onChange: (e) => setThemeEssay(e.target.value)
    }
  ]

  const create = async () => {
    setDisplay('grid');
    setDisplay2('none');
  }

  const back = async () => {
    setDisplay('none');
    setDisplay2('flex');
  }

  const handleRefresh = () => {
    router.reload();
  }

  async function run() {
    const data = await listContent('text');
    setLista(data);
  }

  useEffect(() => {
    run()
  }, []);

  const idAcess = async (event) => {
    console.log(event.currentTarget.id);
    setCookie('id-text', event.currentTarget.id);
  }

  return (
    <Menu
      nomePagina={t('geradorRedacao')}>
      <Flex
        display={display2}
        gap='4'
        flexDir={'column'}>
        <Flex
          flexDir={'column'}
          gap='4'>
          {lista.length <= 0 ? (
            <Flex
              w="full"
              justifyContent={"space-between"}>
              <Flex
                flexDir={'column'}
                maxW={"5xl"}
                m="0 auto"
                align={"center"}
                gap="6"
                fontSize={'3xl'}
                textTransform={'uppercase'}
                fontFamily={'monospace'}>
                <AnimatedText text={'Crie redações em alguns segundos'} />
                <Button
                  onClick={create}
                  variant={'button-outline'}>
                  <Flex
                    gap='2'
                    align={'center'}>
                    <BiPlusCircle />
                    {t('criarNovo')}
                  </Flex>
                </Button>
              </Flex>
              <Button
                onClick={handleRefresh}
                variant={'button-outline'}>
                <IoReload />
              </Button>
            </Flex>
          ) : (
            <>
              <Flex
                w='full'
                justifyContent={'end'}
                gap='4'>
                <Button
                  onClick={create}
                  fontSize='14px'
                  w={{
                    lg: 'min-content',
                    sm: 'full'
                  }}
                  color={color}
                  bg={bg2}
                  _hover={{
                    bg: hover
                  }}>
                  <Flex
                    gap='2'
                    align={'center'}>
                    <BiPlusCircle />
                    {t('criarNovo')}
                  </Flex>
                </Button>
              </Flex>
              {lista.map((item, idx) => (
                <Flex
                  flexDir={"column"}
                  gap={6}
                  borderRadius={"lg"}
                  p="4"
                  bg={useColorModeValue("gray.200","gray.700")}>
                  <Heading fontSize={"lg"} fontWeight={"bold"}>
                    {item.themeEssay} - {item.createdAt}
                  </Heading>
                  <Text>
                    {item.result?.slice(0, 100)}...
                  </Text>
                </Flex>
              ))}
            </>
          )}
        </Flex>
      </Flex>

      <Flex
        flexDir={'column'}
        gap='6'
        display={display}>
        <Text
          cursor={"pointer"}
          borderBottom={"1px"}
          w="fit-content"
          onClick={back}>
          Voltar
        </Text>
        {fields.map((item, idx) => (
          <Field
            key={idx}
            isRequired={item.isRequired}
            id={item.id}
            title={item.title}
            tooltip={item.tooltip}
            value={item.value}
            onChange={item.onChange} />
        ))}
        <Box
          w='full'>
          <Button
            onClick={() => { handleSubmit() }}
            fontSize='14px'
            w={{
              lg: 'min-content',
              sm: 'full'
            }}
            color={color}
            bg={bg2}
            _hover={{
              bg: hover
            }}>
            {t('gerar')}
          </Button>
        </Box>
        <Box>
          {isLoading ? (
            <Flex
              gap="4"
              align={"center"}
              mb="4">
              <CircularProgress
                isIndeterminate />
              <Text>
                {t("aguarde")}
              </Text>
            </Flex>
          ) : (
            <></>
          )}
          <Estilo>
            <Box>
              <Box ref={quillRef} h={"96"} />
            </Box>
          </Estilo>
        </Box>
      </Flex>
    </Menu>
  )
}