import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
const addassignment = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [valid,setValid]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body&&valid) {
      let payload = {
        title: title,
        body: body,
        valid:valid
      };

    }
  };
  return (
    <>
      <Link href="/admin">
        <Button p={"10px"}>{"<"}</Button>
      </Link>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        h={"90vh"}
        m={"auto"}
        bgColor={"#414141"}
      >
        <FormControl
          w={"40%"}
          bgColor={"whitesmoke"}
          p={"1.5rem"}
          borderRadius={"10px"}
        >
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <FormLabel>Valid Date</FormLabel>
          <Input
            type="date"
            value={valid}
            onChange={(e) => setValid(e.target.value)}
          />
          <FormLabel>Body</FormLabel>
          <Textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <Button onClick={handleSubmit} mt={"10px"}>
            Submit
          </Button>
        </FormControl>
      </Flex>
    </>
  );
};

export default addassignment;
