import React from 'react'
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser
} from "@clerk/nextjs";

export default function Header() {

  const { user } = useUser();

  const bg2 = useColorModeValue('black', 'white');
  const color = useColorModeValue('white', 'black');
  const hover = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      pos="fixed"
      zIndex={2}
      left={{
        lg: "14",
        sm: "20"
      }}
      top={{
        lg: "2",
        sm: "0"
      }}
      pt="6"
      borderRadius={"lg"}
      align={"center"}
      gap="4">
      {/* <DarkLight />
      <Language /> */}
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton
          showName={false}
          afterSignOutUrl="/"
          appearance={{
            variables: {
              colorPrimary: "black",
            }
          }} />
        <Text>
          {user?.firstName}
        </Text>
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton>
          <Button w={{
            lg: 'min-content',
            sm: 'full'
          }}
            color={bg2}
            bg={"none"}
            _hover={{
              bg: hover,
              color: color
            }}>Sign in</Button>
        </SignInButton>
      </SignedOut>
    </Flex>
  )
}
