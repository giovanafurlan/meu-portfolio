import {
    useEffect,
    useMemo,
    useState
} from "react";
import {
    Box,
    Textarea,
    useColorModeValue
} from "@chakra-ui/react";

const TextAnimate = ({ text, id }) => {

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

    return <Textarea
        id={id}
        defaultValue={placeholder}
        rows={20} />;
}

export default TextAnimate;