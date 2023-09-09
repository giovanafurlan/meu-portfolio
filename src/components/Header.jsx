import React from 'react'
import { Box, Flex } from '@chakra-ui/react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";
import DarkLight from './DarkLight';
import Language from './Language';

export default function Header() {
  return (
    <Flex
      pos="fixed"
      zIndex={2}
      left={{
        lg: "2",
        sm: "20"
      }}
      top={{
        lg: "2",
        sm: "6"
      }}
      pt="6"
      ml='20'
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
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </Flex>
  )
}
