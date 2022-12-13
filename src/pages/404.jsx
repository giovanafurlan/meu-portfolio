import {
    Flex,
    Heading
} from '@chakra-ui/react';
import Menu from '../components/Menu';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export default function Page404() {

    const router = useRouter();
    const { t } = useTranslation("common");

    return (
        <Menu>
            <Flex
                flexDir={'column'}
                gap='4'>
                <Heading
                    as={'h1'}
                    fontSize={'5xl'}
                    fontFamily='monospace'
                    textTransform='uppercase'
                    fontWeight={'hairline'}>
                    404
                </Heading>
            </Flex>
        </Menu>
    );
}
