import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({ flag, data, scrollValue }) => {
    console.log(data);
    const rowContainer = useRef();
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);
    return (
        <div
            ref={rowContainer}
            className={`w-full flex rounded-2xl items-center gap-3 my-12 scroll-smooth bg-gradient-to-tl from-red-500 to red-800 ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}>


            {data && data.map(item => (< div key={item.id} className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto my-12 bg-gray-100 rounded-lg p-2 shadow-md backdrop-blur-lg hover:drop-shadow-lg' >
                <div while className='w-full flex items-center justify-between'>
                    <motion.div className='w-48 h-23 -mt-8 drop-shadow-2xl' whileHover={{ scale: 1.2 }}>
                        <img
                            src={item?.imageURL}
                            alt=""
                            className='w-full -mt-full object-fit' />
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.75 }} className='w-12 h-12 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white' />
                    </motion.div>
                </div>
                <div className='w-full mt-4 flex flex-col items-end justify-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>{item?.titel}
                    </p>
                    <p className='mt-1 text-sm text-gray-500'>{item?.category}</p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg text-headingColor font-semibold'>
                            <span className='text-sm text-red-500'>₱</span> {item?.price}
                        </p>
                    </div>
                </div>
            </div>))
            }
        </div >
    )
}

export default RowContainer