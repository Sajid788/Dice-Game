import { Flex, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function App() {
  return (
    <div>
    <Flex>
      <Image src = "dices.png"/>
      <Stack>
        <Heading as = "h1">The Dice Game </Heading>
      </Stack>
    </Flex>
    </div>
  );
}

export default App;
