import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services/index';

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((result) => {
          setCategories(result);
        })
      }, [])
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-white-800 py-8'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-black'>
                            क्षितिज
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => {
                        return (
                            <Link key={category.slug} href={`/category/${category.slug}`}>
                                <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                                    {category.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar
