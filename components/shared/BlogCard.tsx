import Image from "next/image";
import {AiOutlineArrowRight} from "react-icons/ai";
import Tag from "@/components/ui/Tag";
import Overlay from "@/components/ui/Overlay";
import Link from "next/link";



const BlogCard = ({post}) => {
    return (
        <article className="relative  rounded-lg overflow-hidden">
            <div className="w-[1000px] h-[450px] relative">
                <Image

                    src={post.image_path}
                    alt={`Image for ${post.title}`}
                    className="object-cover"
                    width={1000}
                    height={450}
                />
                <Overlay/>
            </div>
            <div
                className="absolute w-full h-full top-0 p-5 flex flex-col justify-between"
            >
                <Tag text={post.tags}/>
                <h3
                    className="text-3xl font-extrabold uppercase text-white"
                >
                    {post.title}
                </h3>
            </div>

            <Link href={
                    {pathname:`meqaleler/${post.id}`,
                        query: {...post},
                    }}
            >
                 <AiOutlineArrowRight size={40} className="bg-darkBlue text-white p-2 absolute bottom-0 right-0 rounded-tl-lg " />
            </Link>
        </article>
    );
};

export default BlogCard;

