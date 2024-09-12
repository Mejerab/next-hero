import Link from "next/link";

export const metadata = {
    title: 'About',
    description: "About Page",
  };
  const getTime = async() =>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER}/time`, {next: {revalidate: 5}})
    const data = await res.json()
    return data.currentTime;
  }

const page = async() => {
    const currentTIme = await getTime();
    console.log(currentTIme);
    
    
    return (
        <div>
            About page
            <Link className="ml-12 text-blue-500" href={'/about/history'}>History</Link>
            <h6>Time: {currentTIme}</h6>
        </div>
    );
};

export default page;