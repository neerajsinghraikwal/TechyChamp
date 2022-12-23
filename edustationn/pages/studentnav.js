import style from "./student.module.css";
import Link from "next/link";
import { Router } from "next/router";

export default function StudentNav(){

const handleclick=()=>{
Router.push("/")
}

return (
<div className={style.mainSt}>
<div className={style.mainSt2}  >
   <div className={style.mainStPro}> <h2>Profile</h2>  </div>
     <div className={style.mainSt4}>
   

     <img src="https://thumbs.dreamstime.com/z/portfolio-management-businessman-hologram-concept-futuristic-portfolio-management-businessman-hologram-concept-177205308.jpg"/>
  
        <h4>name:-</h4>
        <h4>name:- </h4>
        <h4>name:- </h4>
        <h4>name:- </h4>
        </div> 
        
    </div>
      <div className={style.mainSt3}>
<Link href="./assignment" className={style.LinkA}>Assignment </Link>
<Link href="./socket/client" className={style.LinkA}>Descussion </Link>
 <h4 onClick={handleclick} >Logout</h4>

    </div>
   
</div>
  


)

}