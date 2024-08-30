"use client"
import { useState } from "react";

import Navbar from "@/components/Navbar";
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
          toast.success('submit successfully')
        } catch (error) {
          toast.error("Error")
        }
      };
      return (

        <div className="min-h-screen">
        <Navbar></Navbar>
        <ToastContainer />
        <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[700px] mt-40 px-2 mx-auto text-black">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter your name" className=" mt-2 px-3 py-2 border-spacing-6 w-full bg-amber-600 hover:bg-white text-black border-black" />
        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Product name/description" className="mt-2 px-3 py-2 border-spacing-6 w-full hover:bg-white bg-amber-600 text-black border-black"></textarea>
        <button type="submit" className="bg-amber-600 mt-2 py-3 px-11 text-black hover:bg-white font-semibold ">Submit</button>
      </form>
      <h1></h1>
    </div>
    );
}