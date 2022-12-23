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
} from "@chakra-ui/react";
import styles from "../styles/Assignment.module.css";

export default function AssignmentPage() {
  return (
    <Box>
      <Box className={styles.nav}>
        <Heading>Assignment List </Heading>
      </Box>
      <Box className={styles.container}>
        {getAssignmentData().map((AssignmentData) => (
          <Box className={styles.cart} key={AssignmentData.id}>
            <Text>{AssignmentData.id}</Text>
            <Text textAlign={"start"}>{AssignmentData.name}</Text>
            <Text>Valid Till :- {AssignmentData.valid}</Text>
            <Button className={styles.cardBtn1}>
              <Link
                href={`/Assignment/${encodeURIComponent(AssignmentData.name)}`}
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
