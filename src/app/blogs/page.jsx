import Link from "next/link";

const page = () => {
    return (
        <div>
            blogs
            <div className="grid gap-y-3 mx-5 rounded-2xl">
                {
                    blogs.map(blog =>
                        <div className="border-2 p-6" key={blog.id}>
                            <h4>{blog.title}</h4>p
                            <p>{blog.description}</p>
                            <button className="bg-red-500 px-7 py-2 my-2 rounded-lg text-white"><Link href={`/blogs/${blog.id}`}>View Details</Link></button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

const blogs = [
    {
        "id": 1,
        "title": "The Benefits of Regular Exercise",
        "description": "Exercise is not just about weight loss, it's about maintaining a healthy mind and body. In this blog, we explore how regular physical activity can improve your mood, boost your energy levels, and help you live a longer life."
    },
    {
        "id": 2,
        "title": "10 Simple Tips for Better Sleep",
        "description": "Getting enough sleep is crucial for overall well-being. This blog shares ten easy tips to improve your sleep quality, from establishing a bedtime routine to minimizing screen time before bed."
    },
    {
        "id": 3,
        "title": "How to Create a Sustainable Diet",
        "description": "Eating healthy doesn’t have to be complicated. Discover how to build a sustainable diet that nourishes your body, supports the environment, and helps you feel your best every day."
    },
    {
        "id": 4,
        "title": "The Future of Technology in Healthcare",
        "description": "Advances in technology are revolutionizing healthcare. This blog examines the role of AI, robotics, and wearable devices in shaping the future of medical treatment and patient care."
    },
    {
        "id": 5,
        "title": "The Power of Positive Thinking",
        "description": "Your mindset can make a huge difference in your life. Learn about the science behind positive thinking and how shifting your perspective can lead to better outcomes in your personal and professional life."
    }
];

export default page;