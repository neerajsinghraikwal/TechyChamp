import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import Router from "next/router";
import axios from "axios";
// import { headers } from "../next.config";

let init = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/adduser", formData)
      .then((response) => {

        if (response) {
          Router.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box
        w="100%"
        h="100vh"
        bgImage="url('https://img.freepik.com/free-photo/close-up-hand-taking-notes_23-2148888827.jpg?size=626&ext=jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        bgSize={"cover"}
        border="1px solid black"
      >
        <Box
          w="35%"
          h="80%"
          m="auto"
          p={"30px"}
          mt="5%"
          bgColor="white"
          borderRadius={"5%"}
        >
          {/* <Heading textAlign={"center"} fontSize="40px">
            Signup
          </Heading> */}
          <form action="submit" method="POST" onSubmit={handleSubmit}>
            <FormControl isRequired mt={"30px"}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Email"
                bg={"white"}
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></Input>
            </FormControl>
            <FormControl isRequired mt={"30px"}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email"
                bg={"white"}
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></Input>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mt={"30px"}>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter Password"
                bg={"white"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              ></Input>
            </FormControl>

            <Button
              // onClick={handleSubmit}
              type="submit"
              colorScheme={"rgb(20, 154, 250)"}
              bgColor="blue"
              color={"white"}
              display={"block"}
              m={"auto"}
              mt="30px"
            >
              Signup
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
