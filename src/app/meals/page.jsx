import Meals from "@/components/input";

export const metadata = {
    title: 'Meals',
    description: "Meals Page",
  };

const page = () => {
    return (
        <div className="mt-4">
            <h1 className="text-red-500 text-3xl font-semibold">Search your meal</h1>
            <Meals />
        </div>
    );
};

export default page;