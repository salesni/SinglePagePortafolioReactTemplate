import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am J.Salvador!";
const bio1 = "A Frontend Developer";
const bio2 = "specialized in React";

const avatarStyle = {
  width:"200px",
  height:"200px"
}

const nameStyle = {
  padding:"0 0 1rem 0"
}

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#25274D"
    id="profile-section"
  >
    <VStack>
      <Avatar size="2xl" name="J.Salvador Fuentes" src="https://i.pravatar.cc/300"
      style={avatarStyle}/>
      <Heading size='md'  fontWeight='bold' style={nameStyle}>
        {greeting}
      </Heading>
      <Heading  as='h1' size='2xl' fontWeight='normal'>
        {bio1}
      </Heading>
      <Heading as='h1' size='2xl' fontWeight='normal'>
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
