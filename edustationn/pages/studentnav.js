import style from "./student.module.css";
import Link from "next/link";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
   Button,
    MenuGroup,MenuDivider
   
} from "@chakra-ui/react"

export default function StudentNav(){

return (
<div className={style.mainSt}>
<div className={style.mainSt2}  >
   <div className={style.mainStPro}> <h2>Profile</h2>  </div>
     <div className={style.mainSt4}>
   

     <img src="https://thumbs.dreamstime.com/z/portfolio-management-businessman-hologram-concept-futuristic-portfolio-management-businessman-hologram-concept-177205308.jpg"/>
  
        <h4>name:- Kanhaiya chauhan</h4>
        <h4>name:- Kanhaiya</h4>
        <h4>name:- Kanhaiya</h4>
        <h4>name:- kanhaiya</h4>
        </div> 
        
    </div>
      <div className={style.mainSt3}>
<Link href="./assignment" className={style.LinkA}>Assignment </Link>
<Link href="./discussion" className={style.LinkA}>Descussion </Link>
<h4>Logout</h4>

    </div>
   
</div>
  


)

}