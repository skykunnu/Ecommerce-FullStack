import {useState} from "react"
import instance from "../axiosConfig"
function AddProduct() {

    const [form, setForm]=useState({
        title:"",
        brand:"",
        category:"",
        usualPrice:"",
        discountedPrice:"",
    })


    function handleChange(e){
        const {name, value} =e.target;
        setForm({...form,[name]:value}); // [name] is a variable which can be anything like title, category and so on. 
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
           const formData= new FormData();
           formData.append("title",form.title);
           formData.append("brand",form.brand);
           formData.append("category",form.category);
           formData.append("usualPrice",form.usualPrice);
           formData.append("discountedPrice",form.discountedPrice);

         const response= await instance.post("/product/add", formData)
    console.log(response);
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Product Title' name='title' value={form.title} onChange={handleChange} />
        <input type="text" placeholder='Enter Product Brand' name='brand' value={form.brand} onChange={handleChange} />
        <input type="text" placeholder='Enter Product Category' name='category' value={form.category} onChange={handleChange} />
        <input type="text" placeholder='Enter Product Usual Price' name='usualPrice' value={form.usualPrice} onChange={handleChange} />
        <input type="text" placeholder='Enter Product Discounted Price' name='discountedPrice' value={form.discountedPrice} onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddProduct