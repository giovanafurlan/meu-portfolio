import {
  useEffect,
  useState
} from "react"
import {
  Button,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { FaRegCopy } from "react-icons/fa";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

export default function LinkResult({ inputValue }) {

  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
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
            py='4'
            align={'center'}
            gap='4'>
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
                borderWidth='2px'
                borderColor='primary'
                fontWeight='normal'>
                <FaRegCopy size={18} />
              </Button>
            </CopyToClipboard>
          </Flex>
        </div>
      )}
    </>
  )
}