import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";

function App() {
const [gameStart, setGameStart] = useState(false);
const numbers = [1, 2, 3, 4, 5, 6];

const handleStartGame = () =>{
  setGameStart(true);
}

  return (
    <div>
      {gameStart ? (
      <Stack>
        <Heading>Select Number</Heading>
       <Flex>
       {numbers.map((value)=>(
           <Flex
           justify="center"
           align="center"
           h="50px"
           w="50px"
           bg="black"
           color="white"
           fontSize="x-large"
           key={value}
           mr={4}
           borderRadius="md"
           >
             {value}
           </Flex>
        ))}
       </Flex>
      <Box>
      <Image src="/dice/dice1.png"/>
      {" "}
      </Box>
      </Stack>
      ):(
      <Flex justify="center" align="center">
        <Image width="50%" src="dices.png" />
        <Stack>
          <Heading fontSize="xxx-large" as="h1">
           {" "}
            The Dice Game
          </Heading>
          <Button
            alignSelf="flex-end"
            bg="black"
            color="white"
            _hover={{ bg: "grey" }}
            onClick={handleStartGame}
          >
            Start Game
          </Button>
        </Stack>
      </Flex>)}
    </div>
  );
}

export default App;
