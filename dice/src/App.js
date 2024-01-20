import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function App() {
  return (
    <div>
    <Flex justify="center" align="center">
      <Image width = "50%" src = "dices.png"/>
      <Stack>
        <Heading fontSize="xxx-large" as = "h1">The Dice Game </Heading>
        <Button alignSelf="flex-end" bg="black" color="white" _hover={{bg:'grey'}}>Start Game</Button>
      </Stack>
    </Flex>
    </div>
  );
}

export default App;
