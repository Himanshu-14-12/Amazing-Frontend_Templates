import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getRelatedPosts } from '../services/index';

const Widgets = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) { //inside a post
      getRelatedPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
    console.log(relatedPosts);
  }, [slug])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-ml mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => {
        return (
          <>
            <div key={post.title} className='flex items-center w-full'>
              <div className='w-16 flex-none'>
                <img alt={post.title} height="60px" width="60px" className="align-middle rounded" src={post.featuredImage.url}></img>
              </div>
              <div className='flex-grow ml-4 '>
                <p className='text-gray-500 font-xs'>
                  {moment(post.createdAt).format('MMM DD YYYY')}
                </p>
                <Link key={post.title} href={`/post/${post.slug}`} className="text-md">
                  {post.title}
                </Link>
              </div>
            </div>
          </>);
      })}
    </div>
  )
}

export default Widgets
