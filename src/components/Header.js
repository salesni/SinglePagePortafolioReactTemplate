import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { handleClick } from "../functions/handleClick";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    id:""
  },
  {
    icon: faGithub,
    url: "https://github.com/salesni",
    id:"gitHubIcon"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/j-salvador-fuentes-s%C3%A1nchez-b38374144",
    id:"linkedInIcon"
  }
];

const Header = () => {
  const [previousPos, setPreviousPos] = useState(0);
  //Use Reference Hook for the header to change its style property
  const headRef = useRef(document.getElementById('header-box'))

  //Use Effect hook that is attached to the scroll event
  //When the user scrolls down it will hide the header and when he/she scrolls down it will show the header.
  useEffect(()=>{

    const scrollEvent = ()=>{
      const currentPos = window.scrollY;
      if (previousPos < currentPos ){
        headRef.current.style.transform = `translateY(-200px)`;
      }else{
        headRef.current.style.transform = `translateY(0px)`;
      }
      setPreviousPos(currentPos);

    }

    window.addEventListener("scroll", scrollEvent);

    return (()=>{
      window.removeEventListener("scroll",scrollEvent);
    })

  },[previousPos]);


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headRef}
      style={{zIndex:"2"}}
      fontWeight = "bold"
      id="header-box"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto"
        fontSize={['xs', 'md', 'lg']} >
        <HStack
          px={[10,16]} 
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              socials.map((social) => {
                return(
                  <a  href={social.url} key = {social.url} id={(social.id)}
                  className="navItems">
                    <FontAwesomeIcon icon={social.icon} 
                     size='2x' style={{ marginRight: '16px' }}/>
                  </a>
                )
              })
            }
          </nav>
          <nav>
            <HStack  spacing={8}>
                <a href="/#projects" className="navItems" onClick={handleClick('projects') }>Projects</a>
                <a href="/#contact" className="navItems" onClick={handleClick('contactme') }>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
