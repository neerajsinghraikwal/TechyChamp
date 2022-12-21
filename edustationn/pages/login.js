import React from 'react'
import axios from 'axios'

const Login = (meta) => {
console.log(meta.name)
  return (
    <div>hello</div>
  )
}

export default Login


export async function getStaticProps(context){

    // const query = context.query;
    // const {id} = query

    const info = await axios.get(`http://localhost:3000/api/login`)
    const meta = info.data
    console.log(meta.name)

    return {
        props:{ data: {meta}}
    }
} 

