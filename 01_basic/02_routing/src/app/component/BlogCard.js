import React from "react";
import Link from "next/link";

export default function BlogCard({ id, title, content }) {
  const isLongContent = content.length > 100; 
  const previewText = isLongContent
    ? content.slice(0, 100) + "..." 
    : content;

  return (
    <div className="blogcard max-w-sm border border-gray-500 shadow-sm p-4 my-4 rounded-lg">
      <h4 className="title font-bold">{title}</h4>
      <p className="mx-4 my-3">{previewText}</p>

      {isLongContent && ( 
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </Link>
      )}
    </div>
  );
}
