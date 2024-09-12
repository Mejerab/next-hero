
const getData =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/posts`)
    const data = await res.json();
    return data;
};

export default getData;