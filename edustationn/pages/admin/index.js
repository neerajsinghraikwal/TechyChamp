import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

import AdminNavbar from "../../components/adminNavbar";
const Admin = () => {

  return (
    <Box w={"100%"}>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        bgColor={"teal"}
        h={"10vh"}
        alignItems={"center"}
        p={"10px"}
      >
        <AdminNavbar/>
      </Flex>
      <VStack w={"18%"} bgColor={"whitesmoke"} h={"100vh"}>
        <Box alignContent={"center"}>
          <Image
            borderRadius="full"
            width={100}
            height={100}
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Text>Name: Ashish</Text>
          <Text>Role: Admin</Text>
        </Box>
        <Box bgColor={"lightgray"} h={"1px"} w={"100%"}></Box>
      </VStack>
      <VStack>
        
      </VStack>
    </Box>
  );
};

export default Admin;
