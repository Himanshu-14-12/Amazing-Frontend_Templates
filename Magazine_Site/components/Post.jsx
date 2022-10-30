import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import PIC from '../public/bg.jpg';

const Post = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className="transition duration-525 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 '>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
          <p className='inline align-middle text-gray-700'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium text-gray-700'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20'>
        {post.details}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Post
