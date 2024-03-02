import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import axios from 'axios';

export default function RandomFact() {

    const { t, lang } = useTranslation("common");

    const [randomFact, setRandomFact] = useState();

    function req() {
        axios
            .get("/api/randomFacts")
            .then((e) => {
                console.log("randomFacts", e.data);
                setRandomFact(e.data.text);
            })
            .catch((e) => {
                console.log("randomFacts err", e);
                return;
            })
    };

    useEffect(() => {
        let ignore = false;

        if (!ignore) req();
        return () => {
            ignore = true;
        };
    }, []);

    console.log("lang", lang);

    return (
        <Text display={lang === "en" ? "flex" : "none"}>{randomFact ? `${t("fatoAleatorio")}: ${randomFact}` : ""}</Text>
    )
}
