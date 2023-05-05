import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { handleClick } from "../functions/handleClick";

const textColor = "#818182";
const HeaderColor = "#2E9CCA";

//Card Component used to display the projects for the Portfolio
const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack borderRadius={15} backgroundColor ="#FAFAFA"  maxWidth="md" 
    overflow="hidden">
      <Image src={imageSrc} borderRadius={15} alt = {title}
      width = "600px" height="300px"/>
      <VStack align="left" p={5} >
        <Heading  size='md'  color={HeaderColor} textAlign='left'>
          {title}
        </Heading>
        <Text color={textColor}>
          {description}
        </Text>
        <HStack>
          <a  href="/#home" className="seeMoreButtons" onClick={handleClick('profile')} >
            <Text className="seeMoreButtons" textAlign="left" color={HeaderColor}>
              See more:&nbsp;
              <FontAwesomeIcon className="seeMoreButtons" color={HeaderColor} icon={faArrowRight} size="1x" />
            </Text>
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
