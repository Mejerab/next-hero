'use client'
import Image from "next/image";
import { useState } from "react";
const Meals = () => {
    const [search, setSearch] = useState('');
    const [meal, setMeal] = useState([]);
    const [error, setError] = useState('');
    const fetching = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json();
            setMeal(data.meals);
            setError('');
        } catch (error) {
            console.log(error);
            setError('No data found...')
        }
    }

    return (
        <>
            <div className="mt-6">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type a meal" className="p-3 text-slate-900" />
                <button onClick={fetching} className="text-white bg-red-500 p-3">Search</button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6">
                {
                    !error && meal?.map(food =>
                        <div key={food.idMeal}>
                            <Image width={500} height={500} src={food.strMealThumb} alt={food.strMeal} />
                            <h6>Name: {food.strMeal}</h6>
                        </div>
                    )
                }
                {
                    error && <h6>{error}</h6>
                }
            </div>
        </>
    );
};
export default Meals