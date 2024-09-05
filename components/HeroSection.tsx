
import Image from "next/image";
export default function HeroSection  ()  {

let paths = ["/img1.jpg","/img2.jpg","/img3.jpg","/img4.jpg"]

    return (
        
            <section className="flex flex-wrap items-center justify-center px-10 py-5  bg-amber-200 space-x-5">
                

                <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-row items-center justify-center gap-5">
                {paths.map((elem)=>     <Image
                        src={`/images${elem}`}
                        alt="Image 1"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md"
                    />)}
                </div>


            </section>
        

    );
};
