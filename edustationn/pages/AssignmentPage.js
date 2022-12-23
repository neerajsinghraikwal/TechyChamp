import { getAssignmentData } from "./Data/data";
import Link from "next/link";
import {
  Box,
  Heading,
  Stack,
  Feature,
  Image,
  Text,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import styles from "../styles/Assignment.module.css";
import { useEffect, useState } from "react";

export default function AssignmentPage() {
  // localhost:3000/api/getassignment
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch(`http://localhost:3000/api/getassignment`);
    let data = await res.json();
    setData([...data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Box className={styles.nav}>
        <Heading>Assignment List </Heading>
      </Box>
      <Box className={styles.container}>
        {data.map((AssignmentData) => (
          <Box className={styles.cart} key={AssignmentData._id}>
            <Text>{AssignmentData._id}</Text>
            <Text width={"200px"} textAlign={"start"}>
              {AssignmentData.title}
            </Text>
            <Text ml={"20px"}>Valid Till :- {AssignmentData.valid}</Text>
            <Button className={styles.cardBtn1}>
              <Link
                href={`/Assignment/${encodeURIComponent(AssignmentData._id)}`}
              >
                Show
              </Link>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
