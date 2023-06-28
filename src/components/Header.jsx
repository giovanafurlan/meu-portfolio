import React from 'react'
import { Box } from '@chakra-ui/react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";

export default function Header() {
  return (
    <Box
      pos="absolute"
      zIndex={1}
      right="2"
      top="2"
      bg="primary"
      color="white"
      p='2'
      borderRadius={"lg"}
      _hover={{
        bg:"secondary"
      }}>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton
          showName={true}
          afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </Box>
  )
}
