import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
} from "@chakra-ui/react";
import image from "../assests/download.jpeg";

let init={
    email:"",
    password:""
}

const Login = () => {

    const [formData, setFormData] = useState(init)

    const handleChange = (e) => {
       const {name,value} = e.target
       setFormData({...formData,[name]:value})
    }

    // console.log(formData)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:3000/api/login",formData)
        
    }
     

  return (
    <Box w="100%" h="800px">
      <HStack w="100%" h="100%">
        <Box w="50%" h="100%" bgImage="url('https://img.freepik.com/premium-photo/young-collage-student-using-computer-mobile-device-studying-online-education-online-learning_1421-4504.jpg?size=626&ext=jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"} >
        </Box>
        <Box
          w="50%"
          h="100%"
          bgImage="url('https://img.freepik.com/free-photo/graduating-time-covid-19-background_53876-104067.jpg?w=1060&t=st=1671672026~exp=1671672626~hmac=cada175a84ee1dc233bad09f3cc9db3266320dcf8391c435bfd60e2ad25a56dd')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
        >
          <Box w="70%" h="60%" m="auto" mt={"20%"} p={"30px"} bgColor="white">
            <Heading textAlign={"center"} fontSize="40px">Sigin</Heading>
            <form action="submit">
              <FormControl isRequired mt={"30px"}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter Email" bg={"white"} name="email" onChange={handleChange}></Input>
              </FormControl>
              <FormControl isRequired>
                <FormLabel mt={"30px"}>Password</FormLabel>
                <Input type="password" placeholder="Enter Password"  bg={"white"} name="password" onChange={handleChange}></Input>
              </FormControl>
              <Button
                type="submit"
                colorScheme={"rgb(20, 154, 250)"}
                bgColor="blue"
                color={"white"}
                display={"block"}
                m={"auto"}
                mt="30px"
              >
                Signin
              </Button>
            </form>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Login;

// export async function getStaticProps(context){

//     // const query = context.query;
//     // const {id} = query

//     const info = await axios.get(`http://localhost:3000/api/login`)
//     const meta = info.data
//     console.log(meta.name)

//     return {
//         props:{ data: {meta}}
//     }
// }
