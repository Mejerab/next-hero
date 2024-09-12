import getData from "@/components/getData";
import Link from "next/link";

export const metadata = {
    title: 'Posts',
    description: "Posts Page",
  };

const page = async() => {
    const data = await getData();
    
    
    return (
        <div>
            All Posts
            <div className="grid gap-4 grid-cols-3">
                {
                    data?.slice(0, 20)?.map(({id, title, body})=>
                        <div key={id} className="border-2 p-6">
                            <h6>{title}</h6>
                            <h6>{body}</h6>
                            <button className="mt-4"><Link  className="bg-red-500 px-7 py-3 text-white" href={`/posts/${id}`}>View Details</Link></button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default page;