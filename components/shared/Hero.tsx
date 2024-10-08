import Tag from "@/components/ui/Tag";
import Overlay from "@/components/ui/Overlay";
import {blogData} from "@/constants/blogData";
import Link from "next/link";


const Hero = () => {
    const featuredPost = blogData.filter((blog) => blog.featured === true);
    const topFeatured = featuredPost.slice(0,1)
    const bottomFeatured = featuredPost.slice(1.4)
  return(
      <section className="relative">
          <div className="z-1">
              {
                  topFeatured.map((post,id) => (
                      <article key={id} className="flex flex-col gap-5 mb-5 text-center relative">
                          <Tag text={post.tags}/>

                          <h2 className="text-6xl font-extrabold uppercase text-tertiary">
                              {post.title}
                          </h2>
                          <div className="flex items-center justify-center gap-3 font-light text-tertiary">
                              <div className="w-10 h-10 rounded-full bg-black"></div>
                              <span>{post.authorName}</span>
                              <span className="italic">
                                      {post.publishDate}
                                  </span>
                          </div>
                          <Link href={
                              {pathname:`meqaleler/${post.id}`,
                              query: {...post},
                          }}>
                              <div className="relative max-h-[600px] overflow-hidden shadow-xl">
                                  <img
                                      src={post.image_path}
                                      alt={`image for ${post.title}`}
                                  />
                              </div>
                          </Link>
                      </article>
                  ))
              }
              <div
                  className="grid grid-cols-3 gap-8 max-lg:grid-cols-1"
              >
                  {
                      bottomFeatured.map((post, id) => (
                          <article key={id} className="flex flex-col gap-3 items-center relative">
                              <Link href={
                                  {pathname:`meqaleler/${post.id}`,
                                      query: {...post},
                                  }}>
                              <div
                                  className="relative overflow-hidden shadow-xl f-full"
                              >
                                  <img
                                      src={post.image_path}
                                      alt={`image for ${post.title}`}
                                      className="object-cover w-full h-full"
                                  />
                                  <Overlay/>
                              </div>
                              </Link>
                              <Tag text={post.tags}/>
                              <h3 className="font-extrabold text-center uppercase text-tertiary px-5">
                                  {post.title}
                              </h3>
                              <span className="italic">
                                  {post.publishDate}
                              </span>
                          </article>
                      ))}
              </div>
          </div>

      </section>
  )
}

export default Hero