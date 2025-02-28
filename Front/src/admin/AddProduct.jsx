/* eslint-disable no-unused-vars */
import { useState} from "react";
import instance from '../axiosConfig'



function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    brand: "",
    category: "",
    OriginalPrice: "",
    discountedPrice: "",
    image: "",
  });

  


  function handleChange(e) {
    if (e.target.name === "image") {
      // console.log("imageFile", e.target.files[0]);
      setForm((form) => ({ ...form, image: e.target.files[0] }));
    } else {
      const { name, value } = e.target;
      setForm((form) => ({ ...form, [name]: value })); // [name] is a variable which can be anything like title, category and so on.
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("brand", form.brand);
      formData.append("category", form.category);
      formData.append("usualPrice", form.OriginalPrice);
      formData.append("discountedPrice", form.discountedPrice);
      formData.append("image", form.image);

      const response = await instance.post("/product/add", formData,{withCredentials:true});
      console.log(response);
      setForm({
        title:'',
        brand: "",
        category: "",
        OriginalPrice: "",
        discountedPrice: "",
        image: "",
      })

      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col gap-3 items-center justify-between"
    >
      <input
        type="text"
        placeholder="Enter Product Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        className="border"
      />
      <input
        type="text"
        placeholder="Enter Product Brand"
        name="brand"
        value={form.brand}
        onChange={handleChange}
        className="border"
      />
      <input
        type="text"
        placeholder="Enter Product Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        className="border"
      />
      <input
        type="text"
        placeholder="Enter Product Usual Price"
        name="usualPrice"
        value={form.OriginalPrice}
        onChange={handleChange}
        className="border"
      />
      <input
        type="text"
        placeholder="Enter Product Discounted Price"
        name="discountedPrice"
        value={form.discountedPrice}
        onChange={handleChange}
        className="border"
      />

      <input type="file" name="image" onChange={handleChange} />
      <button type="submit" className="border px-2">
        Submit
      </button>
    </form>
  );
}

export default AddProduct;
