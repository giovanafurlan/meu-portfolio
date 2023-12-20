import { Container } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <Container mt="50px">
            <SignIn />
        </Container>
    )
}