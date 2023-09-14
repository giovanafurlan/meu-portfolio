import React,
{
    useEffect,
    useState
} from 'react'
import {
    CircularProgress,
    Flex,
    Grid,
    GridItem,
    Heading,
    Textarea
} from "@chakra-ui/react";
import { getCookie } from 'cookies-next'
import {
    collection,
    getDocs
} from "firebase/firestore";
import Menu from '../../../components/Menu';
import DownloadTxt from '../../../components/DownloadTxt';
import { db } from "../../../config/firebase";
import styled from "styled-components";
import useTranslation from 'next-translate/useTranslation';

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

export default function DetailsRedacao() {

    const { t } = useTranslation("common");

    const [isLoading, setIsLoading] = useState(false);
    const [visibility, setVisibility] = useState('hidden');

    const [conteudo, setConteudo] = useState();
    const [theme, setTheme] = useState();

    const idText = getCookie('id-text');

    // const db = getFirestore();

    const contentText = async () => {
        setIsLoading(true);

        const docs = [];
        const colRef = collection(db, "text");
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach(doc => {
            if (doc.data().id == idText) {
                docs.push(doc.data());

                docs.forEach(item => {

                    setIsLoading(false);
                    setVisibility('visible');

                    setTheme(item.themeEssay);
                    setConteudo(item.result);
                })
            }
        })
    }

    useEffect(() => {
        let ignore = false;

        if (!ignore) contentText();
        return () => { ignore = true; }
    }, []);

    return (
        <Menu>
            <Grid
                templateColumns={{
                    lg: 'repeat(2,1fr)',
                    sm: 'repeat(1,1fr)'
                }}
                gap='6'>
                <GridItem
                    colSpan={'2'}
                    visibility={visibility}>
                    <Flex
                        flexDir={'column'}
                        borderRadius={'30px'}
                        p='4'
                        gap={'4'}
                        alignItems={'initial'}>
                        {isLoading
                            ?
                            <CircularProgress
                                isIndeterminate />
                            :
                            <>
                                <Flex
                                    align={'center'}
                                    justifyContent='space-between'>
                                    <Heading
                                        fontSize={'xl'}
                                        fontWeight={"normal"}>
                                        {t("redacao")}: <strong>{theme}</strong>
                                    </Heading>
                                    <DownloadTxt content={conteudo} />
                                </Flex>
                                <Flex
                                    flexDir={'column'}>
                                    <Textarea
                                        value={conteudo}
                                        h={"xl"}
                                        w='full' />
                                </Flex>
                            </>
                        }
                    </Flex>
                </GridItem>
            </Grid>
        </Menu>
    )
}