
import Image from "next/image";
const HeroSection = () => {
    return (
        
            <section className="flex flex-wrap items-center justify-center px-10 py-5  bg-amber-200 space-x-5">
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <Image
                        src="./images.img1.jpg"
                        alt="Image 1"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>


            </section>
        

    );
};
export default HeroSection;