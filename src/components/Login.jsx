import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { getCookie } from "cookies-next";

const Navbar = ({ children }) => {
  const { t } = useTranslation("common");

  const { user, logOut } = useAuth();
  const router = useRouter();

  const emailVerified = getCookie('emailVerified');

  const name = getCookie('name');

  const menuItems = [
    {
      id: 2,
      name: "Login",
      link: "/",
    },
    {
      id: 3,
      name: "Sign Up",
      link: "/signup",
    },
  ];

  // const bg = useColorModeValue("white", "gray.900");

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Flex
        float={"right"}>
        {!user.uid ? (
          menuItems.map((item) => (
            <Box
              key={item.id}
              mr='2'
              py='4'>
              <Link
                href={item?.link}>
                <Button
                  variant={"button"}>
                  {item?.name}
                </Button>
              </Link>
            </Box>
          ))
        ) : (
          <>
            {emailVerified === true
              ?
              <Box
                pos="absolute"
                right="5" top="5">
                {/* <Button
                  onClick={handleLogout}
                  variant="button">
                  Logout
                </Button> */}
                <Menu
                  mr='-10'>
                  <MenuButton
                    borderRadius={"lg"}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                    p="2">
                    <HStack>
                      <Avatar
                        size={"xs"}
                        src={""}
                        bg={"primary"} />
                      <VStack
                        display={{
                          base: "none",
                          md: "flex",
                        }}>
                        <Text fontSize="sm">
                          {name?.substring(0, name?.indexOf(' ')) || t("bemVindo")}
                        </Text>
                      </VStack>
                      <Box
                        display={{
                          base: "none",
                          md: "flex",
                        }} >
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    p="0"
                    minW="32">
                    <MenuItem
                      borderRadius="lg"
                      onClick={handleLogout}
                      color='black'
                      w={"-webkit-fill-available"}>
                      {t("sair")}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              :
              <Heading
                fontSize={'2xl'}
                alignContent='center'
                w='full'
                color='primary'
                m={'4'}>
                {/* Verifique seu email */}
              </Heading>}
          </>
        )}
      </Flex>
      {children}
    </>
  );
};

export default Navbar;