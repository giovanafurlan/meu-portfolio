import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { SignInButton, useUser } from '@clerk/nextjs';
import useTranslation from "next-translate/useTranslation";

export default function Greeting() {

    const { t } = useTranslation("common");

    const bg2 = useColorModeValue('black', 'white');
    const color = useColorModeValue('white', 'black');
    const hover = useColorModeValue('gray.600', 'gray.300');

    const currentHour = new Date().getHours();
    const [hora, setHora] = useState();

    useEffect(() => {
        if (currentHour <= 12) setHora(t("dia"));
        else if (currentHour >= 12 && currentHour <= 17) setHora(t("tarde"));
        else if (currentHour >= 17 && currentHour <= 24) setHora(t("noite"));
    }, [currentHour, t]);

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return <Flex
            fontSize={'3xl'}
            fontFamily='mono'
            gap="3">
            <SignInButton>
                <Text
                    borderBottom={"1px"}
                    color={bg2}
                    bg={"none"}
                    cursor="pointer"
                    _hover={{
                        bg: hover,
                        color: color
                    }}>Sign in</Text>
            </SignInButton>
            {t("inscreva")}
        </Flex>
    }

    return (
        <Text
            fontSize={'3xl'}
            fontFamily='mono'>
            {hora} {user.firstName}, {t('meChamo')} Giovana Furlan
        </Text>
    )
}
