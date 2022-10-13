/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function Blog({ blog, filterByCategoryHandler, filterByAuthorHandler }) {
    const { blogImg, category, title, date, timeToRead, author, authorImg } = blog;

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={blogImg} alt="blog" />
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p
                        className="text-sm font-medium text-indigo-600"
                        onClick={() => filterByCategoryHandler(category)}
                    >
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer">
                            {category}
                        </span>
                    </p>
                    <span className="block mt-1">
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                    </span>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0 cursor-pointer">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={authorImg}
                            alt=""
                            onClick={() => filterByAuthorHandler(author)}
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm cursor-pointer font-medium text-gray-900 hover:underline"
                            onClick={() => filterByAuthorHandler(author)}
                        >
                            {author}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">{date} </time>
                            <span aria-hidden="true"> &middot; </span>
                            <span> {timeToRead}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
