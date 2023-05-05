import {
    Box,
    Container,
    Image
} from '@chakra-ui/react';

export default function LoginLayout({children}) {
    return (
        <Box
            bgImage={'/images/bg.jpg'}
            w='full'
            minH='100vh'>
            <Image
                src={'/images/logo.webp'}
                p='4' />
            <Container
                maxW={{
                    lg: 'lg',
                    sm: '80'
                }}
                bg='rgba(150,150,150, .7)'
                py='4'
                mt={{
                    lg: '-20px',
                    sm: '4'
                }}
                ml={{
                    lg: 'auto',
                    sm: '10'
                }}
                borderRadius={'lg'}
                boxShadow={'lg'}>
                {children}
            </Container>
        </Box>
    )
}
