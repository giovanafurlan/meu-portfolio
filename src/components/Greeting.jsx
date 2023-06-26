import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';
import { useUser } from '@clerk/nextjs';
import useTranslation from "next-translate/useTranslation";

export default function Greeting() {

    const { t } = useTranslation("common");

    const currentHour = new Date().getHours();
    const [hora, setHora] = useState();

    useEffect(() => {
        if (currentHour <= 12) setHora(t("dia"));
        else if (currentHour >= 12 && currentHour <= 17) setHora(t("tarde"));
        else if (currentHour >= 17 && currentHour <= 24) setHora(t("noite"));
    }, [currentHour, t]);

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return <Text
            fontSize={'3xl'}
            fontFamily='mono'>
            {t("inscreva")}
        </Text>
    }

    return (
        <Text
            fontSize={'3xl'}
            fontFamily='mono'>
            {hora} {user.firstName}, {t('meChamo')} Giovana Furlan
        </Text>
    )
}
