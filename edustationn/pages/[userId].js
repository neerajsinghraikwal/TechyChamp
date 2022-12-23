import style from "./student.module.css";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function StudentNav() {
  const router = useRouter();
  const {_id}=router.query
  console.log("user router",_id)
  const [user, setUser] = useState([]);
  const getData = async () => {
    let res = await fetch(
      `http://localhost:3000/api/singleuser/?_id=${_id}`
    );
    let data = await res.json();
    console.log("user",data);
    setUser(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={style.mainSt}>
      <div className={style.mainSt2}>
        <div className={style.mainStPro}>
          {" "}
          <h2>Profile</h2>{" "}
        </div>
        <div className={style.mainSt4}>
          <img src="https://thumbs.dreamstime.com/z/portfolio-management-businessman-hologram-concept-futuristic-portfolio-management-businessman-hologram-concept-177205308.jpg" />

          <h4>{user.userName}</h4>
          <h4>{user.email}</h4>
        </div>
      </div>
      <div className={style.mainSt3}>
        <Link href="./assignment" className={style.LinkA}>
          Assignment{" "}
        </Link>
        <Link href="./discussion" className={style.LinkA}>
          Descussion{" "}
        </Link>
        <h4>Logout</h4>
      </div>
    </div>
  );
}
