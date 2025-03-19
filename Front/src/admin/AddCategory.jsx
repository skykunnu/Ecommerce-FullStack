/* eslint-disable no-unused-vars */
import {useState} from "react"
import instance from "../axiosConfig"



 
function AddCategory() {
const[form,setForm]=useState({
    name:'',
    image:'',
})

const [error, setError]=useState("");

function handleChange(e){
    let {name,value}=e.target;
    if(name==="image") value=e.target.files[0]
    setForm((prev)=>{return {...prev,[name]:value}})
}

async function handleSubmit(e){
e.preventDefault();
try{
    const frm= new FormData();
    frm.append("name",form.name)
    frm.append("image",form.image)
    const response=await instance.post("/product/category/add",frm,{withCredentials:true})
  console.log(response.data)
  setForm({
    name:"",
    image:"",
  })

}
catch(error){
console.log(error)
}

}
  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-4">
        <div className="max-w-lg w-full space-y-8 p-8 bg-white rounded-lg shadow">
          <h2 className="text-3xl font-bold text-center">Add Category</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
        <form action="" encType='multipart/form-data' onSubmit={handleSubmit}>
        <input type="text" name='name' value={form.name} onChange={handleChange} className='border mx-2' placeholder='Enter the name' />
        <input type="file" name='image'  onChange={handleChange} className='border mx-2' />
        <button type='submit' className='rounded border px-2 mx-2'>Submit</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default AddCategory