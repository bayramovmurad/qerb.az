"use client"

import {useState} from "react";
import {blogData} from "@/constants/blogData";
import BlogCard from "@/components/shared/BlogCard";
import Button from "@/components/ui/Button";


const LatestPost = () => {
    const latestPost = blogData.filter((blog) => blog.latestPost === true)

    const [visibleBlogs, setVisibleBlogs] = useState(3);
    const showMoreBlogs = () => {
        setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
    };

    return (
        <section
            className="col-span-2"
            aria-labelledby="latest-post"
        >
           <div
               className="w-full text-center"
           >
               <h2
                    id="latest-post"
                    className="uppercase text-center text-2xl font-extrabold text-tertiary inline-block px-2 mb-10"
               >
                   Son Məqalələr
               </h2>
           </div>
            <div
                className="flex flex-col gap-10 h-full"
            >
                {
                    latestPost.slice(0, visibleBlogs).map((post,id) => (
                        <BlogCard
                            post={post}
                            key={id}
                        />
                    ))
                }
                {
                    visibleBlogs < latestPost.length && (
                        <div
                            className="flex justify-center"
                        >
                            <Button
                                onClick={showMoreBlogs}
                                text="Daha Çox"
                                ariaLabel="Show more Blog Post"
                            />
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default LatestPost;