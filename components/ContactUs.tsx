"use client"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs(){
    const [formData, setFormData] = useState({
        title: "",
        description: "",
      });
      const onChangeHandler = (e: { target: { name: any; value: any; }; }) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(form => ({ ...form, [name]: value }));
        console.log(formData);
      };
      const onSubmitHandler = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
          //api code
          toast.success('Ordered')
        } catch (error) {
          toast.error("Error")
        }
      };
      return (

        <div className="min-h-60">
        
        <ToastContainer />

        <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[700px] mt-20 px-4 mx-auto text-black bg-yellow-800 bg-opacity-60 rounded-3xl backdrop:blur-2xl">

        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter your name" className="mt-2 px-3 py-2 rounded-xl border-spacing-6 w-full bg-amber-800 hover:bg-white text-black border-black"/>

        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Product name/description" className="mt-2 px-3 py-2 border-spacing-6 w-full hover:bg-white bg-amber-800 text-black border-black"></textarea>

        <button type="submit" className="bg-amber-800 mt-2 rounded-3xl mb-2 py-3 px-11 text-black hover:bg-white font-semibold ">Order</button>
      </form>
      <h1></h1>
    </div>
    );
}