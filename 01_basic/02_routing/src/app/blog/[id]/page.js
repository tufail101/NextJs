import React from 'react'
import { blogs } from '@/blog'

export default function BlogPost({params}) {
    const blogBy_id = blogs.find((blog) => {
        return blog.id == params.id
    })
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-sm bg-gray-600 text-white rounded-lg m-7 p-6 text-center shadow-lg">
        <h3 className="text-xl font-bold mb-3">{blogBy_id.title}</h3>
        <p>{blogBy_id.content}</p>
      </div>
    </div>
  )
}
