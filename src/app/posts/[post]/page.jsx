

const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data
}

// export const metadata = {
//     title: 'Meals',
//     description: "Meals Page",
//   };
// export async function generateMetadata({ params }) {
    
//   }
export const generateMetadata = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
    const data = await res.json();
    
    return {
      title: data.title,
      description: data.body,
      keywords: data.body.split(' ')
    };
};

const page = async ({ params }) => {
    const { title, body } = await getPost(params.post);
    return (
        <div>
            nothing: {params.post}
            <h6>Title: {title}</h6>
            <h6>Description: {body}</h6>
        </div>
    );
};

export default page;