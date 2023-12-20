import { Container } from "@chakra-ui/react";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <Container mt="50px">
            <SignUp />
        </Container>
    )
}