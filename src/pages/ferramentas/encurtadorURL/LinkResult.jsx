import {
  useEffect,
  useState
} from "react"
import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { FaRegCopy } from "react-icons/fa";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";
import { useQRCode } from 'next-qrcode';

export default function LinkResult({ inputValue }) {

  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { Canvas } = useQRCode();
  const [qrcode, setqrcode] = useState(".");
  const [visibility, setVisibility] = useState('hidden');

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);

      setVisibility('visible');
      setqrcode(res.data.result.full_short_link);
      
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  const { t } = useTranslation("common");

  if (loading) {
    return <p className="noData">{t("carregando")}</p>
  }
  if (error) {
    return <p className="noData">{t("algoErrado")}</p>
  }

  const bg = useColorModeValue('none', 'primary');
  const color = useColorModeValue('primary', 'white');

  return (
    <>
      {shortenLink && (
        <div
          className="result">
          <Flex
            gap='6'
            flexDir={'column'}>
            <Flex
              align={'center'}
              gap='4'
              mt='6'>
              <Text
                w={'min-content'}>
                {shortenLink}
              </Text>
              <CopyToClipboard
                text={shortenLink}
                onCopy={() => setCopied(true)}>
                <Button
                  className={copied ? "copied" : ""}
                  fontSize='14px'
                  color={color}
                  bg={bg}
                  padding='0'
                  borderWidth='2px'
                  borderColor='primary'
                  fontWeight='normal'>
                  <FaRegCopy />
                </Button>
              </CopyToClipboard>
            </Flex>
              <Box
                id='qrCode'
                visibility={visibility}>
                <Canvas
                  text={shortenLink}
                  options={{
                    type: 'image/jpeg',
                    quality: 0.3,
                    level: 'M',
                    margin: 3,
                    scale: 4,
                    width: 150,
                    color: {
                      dark: '#000',
                      light: '#fff',
                    },
                  }}
                />
              </Box>
          </Flex>
        </div>
      )}
    </>
  )
}