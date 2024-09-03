'use client'
import Link from "next/link";
import dataDescription from "../app/data/data_description.json";
import Products from "@/app/product/page";
import { BackgroundGradient } from "./ui/background-gradient";


interface Product {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  category: string,
  isFeatured: boolean,

}

function FeaturedSection() {
  const featuredSection = dataDescription.products.filter((product: Product) => product.isFeatured);

  return (

    <div className="px-8 py-5 bg-amber-800">

      <div>

        <div className="text-center">

          <p className="mt-7 text-3xl leading-8 font-bold tracking-tight text-white sm:text-5xl">Home made products</p>

        </div>

      </div>
      

      <div className=" mx-10 mt-12 ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">

          {featuredSection.map((product: Product) => (

            <div key={product.id} className="flex justify-center">

              <BackgroundGradient className="flex flex-row-reverse rounded-[22px] bg-black divide-black overflow-hidden h-full max-w-sm">
                
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                
              
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-extrabold animate-pulse ">{product.category}</p>
                

                <p className="text-sm text-white dark:text-amber-800 flex-grow ">{product.description}</p>
                <span className="text-white" >Buy now </span>
                <span className="bg-amber-800 rounded-full text-[0.9rem] px-2 py-0 text-white animate-pulse">${product.price}</span>
            

                {/* <p className="text-pretty text-white flex-grow font-extrabold animate-pulse ">{product.price}</p> */}
              
              </div></BackgroundGradient>

            </div>

          ))}

        </div>


      </div>

      <div className="mt-20 text-center">

        <Link href={"/products"} className="px-4 py-2 rounded border border-l-white text-amber-500 bg-black hover:bg-white transition duration-200">View all products</Link>
        

      </div>

    </div>


  )
}

export default FeaturedSection;
