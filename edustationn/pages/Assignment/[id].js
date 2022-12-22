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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../..//styles/Assignment.module.css";

export default function Assignment() {
  const router = useRouter();
  console.log(router.query);
  //   const [post, setData] = useState({});
  return (
    <Box>
      <Box className={styles.nav}>
        <Heading>{router.query.id} </Heading>
      </Box>

      <Box className={styles.desc}>
        <Heading>{router.query.id}</Heading>
        <Text>{"Description"}</Text>
      </Box>
      <Box className={styles.bottom}>
        <Text textAlign={"start"} pl="15%">
          Submission Link
        </Text>
        <Input w="70%" h={"20%"} mb={"2%"} borderRadius={10} />
        <br />
        <Button className={styles.cardBtn}>Submit</Button>
      </Box>
    </Box>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const post = await res.json();
//   //   console.log("data", data);
//   return {
//     props: {
//       post,
//     },
//   };
// };
