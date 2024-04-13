import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: 4,
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const projectsAndContacts = [
  {
    id: "projects-section",
    name: "Projects",
    url: "/#projects",
  },
  {
    id: "contactme-section",
    name: "Contact Me",
    url: "/#contact-me",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav style={{ display: "flex", gap: "35px" }}>
            {/* Add social media links based on the `socials` data */}
            {socials.map((social) => (
              <HStack key={social.id}>
                <a href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              </HStack>
            ))}
          </nav>
          <nav style={{ display: "flex", gap: "35px"}}>
            {/* Add links to Projects and Contact me section */}
            {projectsAndContacts.map((projectAndContact) => (
              <HStack spacing={8} key={projectAndContact.id} >
                <a
                  href={projectAndContact.url}
                  onClick={handleClick(projectAndContact.id)}
                >
                  {projectAndContact.name}
                </a>
              </HStack>
            ))}
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
