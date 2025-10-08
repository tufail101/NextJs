import React from 'react'
import BlogCard from '../component/BlogCard';
import { blogs } from '@/blog';

export default function Blog() {



  return (
    <div>
      <h1>Blog</h1>
     
      <div className='flex justify-between mx-5'>
        {blogs.map(blog => (

          <BlogCard key={blog.id} id = {blog.id} title={blog.title} content={blog.content} />
         
        ))}
      </div>
    </div>
  )
}
