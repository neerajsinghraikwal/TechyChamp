import { useRouter } from "next/router";
import {
  Box,
  Heading,
  Stack,
  Feature,
  Image,
  Text,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

import styles from "../..//styles/Assignment.module.css";
import { useEffect, useState } from "react";

export default function Assignment() {
  const [data, setData] = useState([]);
  const router = useRouter();
  // console.log(router.query);

  const getData = async () => {
    let res = await fetch(
      `http://localhost:3000/api/singleassignment/?_id=${router.query.id}`
    );
    let data = await res.json();
    // console.log(data);
    setData(data);
  };
  console.log("newdata", data);

  useEffect(() => {
    getData();
  }, []);

  const toast = useToast();

  return (
    <Box>
      <Box className={styles.nav}>
        <Heading>{"Assignment"} </Heading>
      </Box>
      {data.map((el) => (
        <Box className={styles.desc}>
          <Heading mt={"50px"} fontSize={"25px"} mb={"20px"}>
            {el.title}
          </Heading>
          <Box className={styles.cart} key={el._id}>
            <Text m={"auto"} fontSize={"25px"} textAlign={"start"}>
              {el.desc}
            </Text>
          </Box>
        </Box>
      ))}
      <Box className={styles.bottom}>
        <Text textAlign={"start"} pl="15%">
          Submission Link
        </Text>
        <Input w="70%" h={"20%"} mb={"2%"} borderRadius={10} />
        <br />
        <Button
          color={"black"}
          onClick={() =>
            toast({
              title: "Assignment submitted.",
              description:
                "You assignment is sucessfully submitted. We will review your assignment soon",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }
          className={styles.cardBtn}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
