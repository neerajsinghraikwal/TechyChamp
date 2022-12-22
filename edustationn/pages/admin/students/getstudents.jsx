import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const Getstudents = () => {
  const [student, setStudent] = useState([]);

  const getStudent = () => {
    axios
      .get("http://localhost:3000/api/getuser")
      .then((r) => {
        setStudent(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (student.length === 0) {
      getStudent();
    }
  }, []);
  return (
    <>
      <Link href="/admin">
        <Button p={"10px"}>{"<"}</Button>
      </Link>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Sr No.</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          {student &&
            student.map((ele, i) => (
              <Tbody key={ele._id}>
                <Tr>
                  <Td>{i + 1}</Td>
                  <Td>{ele.userName}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.role}</Td>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </TableContainer>
    </>
  );
};

export default Getstudents;
