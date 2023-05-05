import {
    useEffect,
    useMemo,
    useState
} from "react";
import {
    Box,
    Heading,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

const AnimatedText = ({ text, id }) => {
    const [index, setIndex] = useState(0);
    const words = useMemo(() => text?.split(' '), [text]);

    const placeholder = words?.slice(0, index).join(' ');

    useEffect(() => {
        if (index >= words?.length) return;

        const timeout = setTimeout(() => setIndex(i => i + 1), 70);

        return () => {
            clearTimeout(timeout);
        };
    }, [setIndex, index, words]);

    return <Text
        id={id}>
        {placeholder}
    </Text>;
}

export default AnimatedText;