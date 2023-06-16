import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {

  return (
    <VStack spacing={4} align="start" w="100%">
      <Image src={imageSrc}/>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </VStack>
  );
};

export default Card;
