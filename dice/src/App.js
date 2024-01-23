import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleStartGame = () => {
    setGameStart(true);
  };
 
  // console.log(selectedNumber);
  const onNumberClicked = (value) =>{
    setSelectedNumber(value);
    setError(null)
  }


  
  const genRandomNo = () =>{
    if(selectedNumber){
      const genrateNo = Math.ceil(Math.random()*6);
      setDice(genrateNo);

      if(selectedNumber === genrateNo){
        setScore((prev) => prev + genrateNo);
      }else{
        setScore((prev) => prev - 2);
      }

    }else{
      setError("Please Select Number")
    }
  }

  return (
    <div>
      {gameStart ? (
        <div>
          <Stack
            justify="center"
            align="center"
            maxW="1300px"
            mx="auto"
            h="100vh"
          >
            <Heading as="h1" color= {error ? "red" : "black"} fontSize="6xl" mb = "8">
              {error ? error : "Select Number"}
              </Heading>
            <Flex pb = "10">
              {numbers.map((value) => (
                <Flex
                  justify="center"
                  align="center"
                  h="50px"
                  w="50px"
                  bg={selectedNumber === value ? 'green' : 'black'}
                  color="white"
                  fontSize="x-large"
                  key={value}
                  mr={4}
                  borderRadius="md"
                  onClick={()=> onNumberClicked(value)}
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <Box h = "150px" width= "150px" onClick={genRandomNo}>
              <Image src={`/dice/dice${dice}.png`}/>
            </Box>
            <Text as="p" fontSize="x-large">Click on dice to roll</Text>
            <Text color={score > 0 ? "green" : "red"} fontSize="6xl" fontWeight="bold">
              {score}
              </Text>
            <Text fontSize="4xl" fontWeight="bold">Total Score</Text>
            <Button onClick={ () => setScore(0)}>Reset Score</Button>
          </Stack>
          <Stack maxW="900px" mx="auto">
            <Heading as="h2">Game Rules:-</Heading>
            <List >
              <ListItem>Select Number any number</ListItem>
              <ListItem>Click on dice image to roll it</ListItem>
              <ListItem>
                Select number is equal to obtained dice result then you will get
                same point of dice
              </ListItem>
              <ListItem>
                if You are Wrong Score will be deducted by 2 points Join channel
              </ListItem>
            </List>
          </Stack>
        </div>
      ) : (
        <Flex justify="center" align="center">
          <Image width="50%" src="dices.png"/>
          <Stack>
            <Heading fontSize="xxx-large" as="h1">
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
        </Flex>
      )}
    </div>
  );
}
export default App;
