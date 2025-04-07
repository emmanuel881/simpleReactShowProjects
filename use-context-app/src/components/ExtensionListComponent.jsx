import React, { useEffect, useState } from 'react'
import { getItems, toggleItem } from '../components/ItemsComponent'

function ExtensionListComponent() {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
    }, [])

    const handleToggle = (id) => {
        const updatedItems = toggleItem(id)
        setItems(updatedItems)
    }


    //my filter filter based on active button
    const [filter, setFilter] = useState("All")
    const filteredItems = filter === "All"
        ? items
        : items.filter(item => item.active === filter)

    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between mt-15 mb-10 '>
                <h1 className='text-[22px] font-bold dark:text-black'>Extensions List</h1>
                <div className='flex mt-4 sm:mt-0 justify-around w-80'>
                    <button onClick={() => setFilter("All")} className='pt-2 pb-2 pl-6 pr-6 bg-[#1B1E2D] rounded-full border-2 border-gray-400 focus:border-pink-700 hover:cursor-pointer dark:bg-white dark:text-black'>All</button>
                    <button onClick={() => setFilter(true)} className='pt-2 pb-2 pl-6 pr-6 bg-[#1B1E2D] rounded-full border-2 border-gray-400 focus:border-pink-700  hover:cursor-pointer dark:bg-white dark:text-black'>Active</button>
                    <button onClick={() => setFilter(false)} className='pt-2 pb-2 pl-6 pr-6 bg-[#1B1E2D] rounded-full border-2 border-gray-400 focus:border-pink-700  hover:cursor-pointer dark:bg-white dark:text-black'>Inactive</button>
                </div>
            </div>
            <div className='flex flex-col lg:grid grid-cols-3 gap-5'>
                {filteredItems.map((item) => (
                    <div key={item.id} className='bg-[hsl(226,25%,17%)] rounded-xl p-6 dark:bg-gray-100 dark:text-black'>
                        <div className='flex flex-row mb-10'>
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                            <div className='ml-2'>
                                <h2 className='font-bold'>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between items-center p-2'>
                            <button className='border p-2 rounded-full'>Remove</button>
                            <button
                                onClick={() => handleToggle(item.id)}
                                className={`w-10 h-4 flex items-center rounded-full  transition duration-300 ${item.active ? 'bg-green-500' : 'bg-gray-400'}`}
                            >
                                <div
                                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${item.active ? 'translate-x-6' : 'translate-x-0'}`}
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExtensionListComponent
