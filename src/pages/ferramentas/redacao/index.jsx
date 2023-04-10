import {
  useEffect,
  useState
} from "react";
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
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
import { getText } from "../../../services/getApis";
import {
  listContent,
  listText
} from "../../../services/listApis";
import { useAuth } from "../../../context/AuthContext";
import Menu from '../../../components/Menu';
import Field from "../../../components/Field";
import styled from "styled-components";
import { setCookie } from "cookies-next";

export const Estilo = styled.div`
  .ql-toolbar.ql-snow, 
  .ql-snow .ql-stroke, 
  .ql-snow .ql-fill,
  .ql-snow .ql-picker   {
    border-radius: 20px 20px 0 0;
    border-color: #8a8686;
    color: #8a8686;
    stroke: #8a8686;
  }

  .ql-container.ql-snow {
    border-radius: 0 0 20px 20px;
    border-color: #8a8686;
  }
`;

export default function GeradorTexto() {

  const { t } = useTranslation("common");

  const theme = "snow";

  const { quill, quillRef } = useQuill({ theme });

  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState('none');
  const [display2, setDisplay2] = useState('flex');
  const [visibility, setVisibility] = useState('hidden');
  const [visibility2, setVisibility2] = useState('hidden');

  const [themeEssay, setThemeEssay] = useState();

  const [lista, setLista] = useState([]);

  const { user } = useAuth();
  const userId = user.uid;

  const route = useRouter();

  async function handleSubmit() {

    const locale = route.locale;

    setIsLoading(true);

    setVisibility('visible');

    getText(locale,themeEssay)
      .then((res) => {
        setIsLoading(false);
        setVisibility2('visible');

        const data = res;

        console.log(data);

        data.choices.forEach(element => {
          const el = element.text;

          quill.setText(el);

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

  async function run() {
    const data = await listContent('text');
    console.log(data);
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
          w='full'
          justifyContent={'end'}
          gap='4'>
          <Button
            onClick={create}
            variant={'button-orange'}>
            <Flex
              gap='2'
              align={'center'}>
              <BiPlusCircle /> 
              {t('criarNovo')}
            </Flex>
          </Button>
          {/* <Button
              onClick={list}
              variant={'button'}>
              <Flex
                gap='2'
                align={'center'}>
                <TfiLayoutListThumb /> List
              </Flex>
            </Button> */}
        </Flex>
        <Flex
          flexDir={'column'}
          gap='4'>
          {/* {lista
              ?
              <Text
                textAlign={'center'}
                mt='10'
                fontSize={'lg'}>
                No data found
              </Text>
              : */}
          <TableContainer>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>{t('nome')}</Th>
                  <Th>{t('criadoEm')}</Th>
                  <Th>{t('acesse')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {lista.map((item, idx) => (
                  <Tr
                    key={idx}
                    id={item.id}>
                    <Td>
                      {item.companyName}
                    </Td>
                    <Td>
                      {item.createdAt}
                    </Td>
                    <Td>
                      <Link
                        key={idx}
                        id={item.id}
                        href={'/geradores/geradorTexto/' + item.id}
                        onClick={idAcess}>
                        <Button
                          variant={'button'}>
                          <FiExternalLink />
                        </Button>
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {/* } */}
        </Flex>
      </Flex>

      <Flex
        flexDir={'column'}
        gap='6'
        display={display}>
        <BsArrowLeftSquare
          cursor={'pointer'}
          fontSize={'24px'}
          onClick={back} />
        {/* <FormControl
            isRequired>
            <FormLabel>
              {t('numPalavras')}
            </FormLabel>
            <RadioGroup
              colorScheme={'purple'}
              onChange={setNumPalavras}>
              <Grid
                templateColumns={'repeat(4,1fr)'}
                gap='4'
                w='min-content'>
                <Radio
                  value='500'>
                  500
                </Radio>
                <Radio
                  value='1000'>
                  1000
                </Radio>
                <Radio
                  value='1500'>
                  1500
                </Radio>
                <Radio
                  value='2000'>
                  2000
                </Radio>
              </Grid>
            </RadioGroup>
          </FormControl> */}
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
            variant="button"
            _hover={{
              bg: "#FFB596",
            }} >
            {t('gerar')}
          </Button>
        </Box>
        <Box>
          {isLoading
            ?
            <Flex
              gap='4'
              align={'center'}
              mb='4'>
              <CircularProgress
                isIndeterminate />
              <Text>
                {t('aguarde')}
              </Text>
            </Flex>
            :
            <></>
          }
          <Estilo>
            <Box
              ref={quillRef}
              h={"96"} />
          </Estilo>
        </Box>
      </Flex>
    </Menu>
  )
}