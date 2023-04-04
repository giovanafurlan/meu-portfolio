import {
    useEffect,
    useState
} from 'react';
import {
    Button,
    CircularProgress,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import {
    FormProvider,
    useForm
} from 'react-hook-form'
import {
    getAuth,
    sendPasswordResetEmail,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setCookie } from 'cookies-next';

export default function ResetPassword() {

    const auth = getAuth();

    const methods = useForm({ mode: "onBlur" });
    const [isLoading, setIsLoading] = useState(false);

    const [user, setUser] = useAuthState(auth);

    const [emailVerified, setEmailVerified] = useState();

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit = async (data) => {
        console.log(data);
        setIsLoading(true);
        try {
            setIsLoading(false);
            await sendPasswordResetEmail(auth, data.email).then(
                router.push('/')
            );
            console.log("Password reset email sent");
        } catch (error) {
            console.log(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log(user);
        console.log(auth);
        setEmailVerified(user?.emailVerified);
        setCookie("emailVerified", user?.emailVerified);
    }, [user, auth]);

    return (
        <>
            <Image
                src={'/images/logo.webp'}
                p='4' />
            <Container
                maxW='lg'>
                <Heading
                    mb="4"
                    textAlign={"center"}>
                    Reset Password
                </Heading>
                <FormProvider {...methods}>
                    <form
                        action=""
                        onSubmit={handleSubmit(onSubmit)}>
                        <Flex
                            flexDir={"column"}
                            gap="6">
                            <FormControl>
                                <FormLabel
                                    htmlFor="email">
                                    Email
                                </FormLabel>
                                <Input
                                    id='email'
                                    type="email"
                                    borderRadius={"10px"}
                                    {...register("email", { required: "Email is required" })} />
                                {errors.email
                                    &&
                                    <Text color="red">
                                        {errors.email.message}
                                    </Text>}
                            </FormControl>
                            <Button
                                type="submit"
                                variant={"button"}
                                w="full">
                                {isLoading ? (
                                    <CircularProgress
                                        color="tertiary"
                                        size="7"
                                        isIndeterminate />
                                ) : (
                                    <Text
                                        fontWeight={"normal"}
                                        fontSize="14px">
                                        Submit
                                    </Text>
                                )}
                            </Button>
                        </Flex>
                    </form>
                </FormProvider>
            </Container>
        </>
    )
}
