import {
  useEffect,
  useState
} from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import {
  FormProvider,
  useForm
} from "react-hook-form";
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setCookie } from "cookies-next";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailVerified, setEmailVerified] = useState();

  const { logIn } = useAuth();
  const router = useRouter();

  const methods = useForm({ mode: "onBlur" });

  const auth = getAuth();

  useEffect(() => {
    if (emailVerified === true) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCookie("uid", user.uid);
          router.push("/home");
        } else {
          router.push("/");
        }
      });
    } else {
      router.push("/");
    }
  }, [auth]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      await logIn(data.email, data.password);
      router.push("/home");
      setError("none");
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError("flex");
      setErrorMessage(error.message);
    }
  }

  const [user, setUser] = useAuthState(auth);

  const googleAuth = new GoogleAuthProvider();

  const logInGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleAuth);
      router.push("/home");
      setError("none");
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError("flex");
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    console.log(user);
    setEmailVerified(user?.emailVerified);
    setCookie("emailVerified", user?.emailVerified);
  }, [user])

  return (
    <Container
      p="10">
      <Heading
        mb="4"
        textAlign={"center"}>
        Log In
      </Heading>
      <FormProvider {...methods}>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}>
          <Box
            display={error}
            justifyContent="center"
            color="red.400">
            {errorMessage}
          </Box>
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
            <FormControl>
              <FormLabel
                htmlFor="password">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  borderRadius={"10px"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <InputRightElement>
                  <Button
                    aria-label="Mostrar/Esconder"
                    fontSize={"16"}
                    bg="none"
                    p="0"
                    color="#5B1AB2"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword
                      ?
                      <BsFillEyeSlashFill />
                      :
                      <BsFillEyeFill />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password
                && (
                  <FormErrorMessage>
                    {errors.password.message}
                  </FormErrorMessage>
                )}
            </FormControl>
            <Button
              onClick={() => router.push('/resetPassword')}
              bg='none'
              p='0'
              mt='-5'
              justifyContent={'end'}
              _hover={{
                bg: 'none',
                color: 'secondary'
              }}
              fontSize='14'>
              <Text>
                Esqueci minha senha
              </Text>
            </Button>
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
        <Button
          onClick={logInGoogle}
          w="full"
          borderRadius={"30px"}
          mt="4">
          <Flex
            align={"center"}
            gap="2">
            {isLoading ? (
              <CircularProgress
                color="tertiary"
                size="7"
                isIndeterminate />
            ) : (
              <Flex
                gap='2'>
                <FcGoogle />
                <Text
                  fontWeight={"normal"}
                  fontSize="14px">
                  Google
                </Text>
              </Flex>
            )}
          </Flex>
        </Button>
      </FormProvider>
    </Container>
  );
};

export default LoginPage;
