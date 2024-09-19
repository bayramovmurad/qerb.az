export interface searchParamsTypes {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured:string;
  topPost:string;
  tags:string;
  authorImage:string;
  authorName:string;
  publishedDate:string;

}


const page = ({searchParams}:{
  searchParams : searchParamsTypes}
) => {
  const post = searchParams;
  return <div>{post.title}</div>
}

export default page;