import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const AdminNavbar = () => {
  const router = useRouter();
  return (
    <>
      <Text color={"white"}>ashishchaudhary3639@gmail.com</Text>
      <Link href="/admin/students">
        <Button>Students</Button>
      </Link>
      <Button>Admins</Button>
      <Button onClick={() => router.push("/admin/course/addcourse")}>
        Courses
      </Button>
      <Link href="/admin/assignments">
        <Button>Assignments</Button>
      </Link>
    </>
  );
};

export default AdminNavbar;
