import React, {
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
  Text,
  useColorModeValue,
  useToast,
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
  sendEmailVerification
} from "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../context/AuthContext";
import { setCookie } from "cookies-next";

const SignupPage = () => {
  const bg = useColorModeValue("white", "gray.900");

  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState();
  const [error, setError] = useState("none");
  const [errorMessage, setErrorMessage] = useState();
  const [errorPassword, setErrorPassword] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState();

  const { signUp } = useAuth();
  const router = useRouter();
  const toast = useToast()

  const methods = useForm({ mode: "onBlur" });

  const auth = getAuth();

  const [user, setUser] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);

    // if (password !== confirmPassword) {
    //   setErrorPassword("flex");
    //   setIsLoading(false);
    // } else {
    //   setErrorPassword("none");
    //   setIsLoading(true);
    try {
      setCookie('name', name);
      await signUp(data.email, data.password)
        .then(
          async (cred) => await sendEmailVerification(cred.user), setIsLoading(false),
          toast({
            title: 'Account created.',
            description: "We send a email verification, check you mail box",
            status: 'success',
            position: 'top',
            duration: 12000,
            isClosable: true,
          }), setTimeout(router.push("/"), 3000)
        )
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError("flex");
      setErrorMessage(error.message);
    }
    // }
  }

  const googleAuth = new GoogleAuthProvider();

  const logInGoogle = async () => {
    setIsLoading(true);
    setErrorPassword("none");
    try {
      await signInWithPopup(auth, googleAuth);
      // router.push("/home");
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError("flex");
      setErrorMessage(error.message);
    }
  };

  return (
    <Container
      p="10">
      <Heading
        mb="4"
        textAlign={"center"}>
        Sign Up
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
                htmlFor="name">
                Name
              </FormLabel>
              <Input
                id='name'
                type="name"
                borderRadius={"10px"}
                bg={bg}
                autoComplete='on'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel
                htmlFor="email">
                Email
              </FormLabel>
              <Input
                id='email'
                type="email"
                borderRadius={"10px"}
                bg={bg}
                autoComplete='on'
                {...register("email", { required: "Email is required" })}
              />
              {errors.email
                &&
                <Text>
                  {errors.email.message}
                </Text>}
            </FormControl>
            <Box
              display={errorPassword}
              justifyContent="center"
              color="red.400"
              mb="-4">
              Senhas não correspondem
            </Box>
            <FormControl>
              <FormLabel
                htmlFor="password">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  id='password'
                  type={showPassword ? "text" : "password"}
                  borderRadius={"10px"}
                  bg={bg}
                  autoComplete='on'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  {...register("password", {
                    required: "Password is required",
                  })} />
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
            {/* <FormControl>
              <FormLabel
                htmlFor="confirmPassword">
                Confirm Password
              </FormLabel>
              <InputGroup>
                <Input
                  id='confirmPassword'
                  type={showPassword ? "text" : "password"}
                  borderRadius={"10px"}
                  bg={bg}
                  autoComplete='on'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  {...register("password_confirm", {
                    required: "Verify your password",
                  })} />
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
              {errors.password_confirm
                && (
                  <FormErrorMessage>
                    {errors.password_confirm.message}
                  </FormErrorMessage>
                )}
            </FormControl> */}
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

export default SignupPage;
