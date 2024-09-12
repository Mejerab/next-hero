"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const links = [
        {
            path: '/posts',
            title: 'Posts'
        },
        {
            path: '/meals',
            title: 'Meals'
        },
    ];
    const handler = () =>{
        router.push('/login')
    }
    if (pathname.includes('/dashboard')) {
        return
    }
    return (
        <div className="flex justify-between font-medium border-b-2 py-4 px-5">
            <h6 className="text-3xl">Next <span className="text-slate-600">Hero</span></h6>
            <ul className="flex justify-between gap-x-4 items-center">
                {
                    links.map(link => <li className={`${pathname === link.path && 'text-slate-600'}`} key={link.path}>
                        <Link href={link.path}>{link.title}</Link>
                    </li>)
                }
            </ul>
            <button onClick={handler} className="border-2 rounded-lg px-6 py-2">Login</button>
        </div>
    );
};

export default Navbar;