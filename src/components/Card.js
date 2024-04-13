import React from "react";
import { VStack, Card, CardBody, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ title, description, imageSrc }) => {
  return (
    <VStack>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={imageSrc}
            alt={title}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>{description}</Text>
            <Button variant='ghost' colorScheme='blue'>
              See More <FontAwesomeIcon icon={faArrowRight} size="1x" spacing={2}/>
            </Button>
          </Stack>
        </CardBody>
</Card>
    </VStack>
  );
};

export default CardComponent;


