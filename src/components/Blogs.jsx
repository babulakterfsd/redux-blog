import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByAuthor, filterByCategory } from '../redux/filters/actions';
import Blog from './Blog';

function Blogs() {
    const blogs = useSelector((state) => state.blogs);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const categoryFilterFn = (blog) => {
        const { category } = filters;
        switch (category) {
            case 'development':
                return blog.category === 'development';

            case 'design':
                return blog.category === 'design';

            case 'various':
                return blog.category === 'various';

            default:
                return true;
        }
    };
    const authorFilterFn = (blog) => {
        const { author } = filters;
        switch (author) {
            case 'Learn with Sumit':
                return blog.author === 'Learn with Sumit';

            case 'Babul Akter':
                return blog.author === 'Babul Akter';

            default:
                return true;
        }
    };

    const filterByCategoryHandler = (category) => {
        dispatch(filterByCategory(category));
    };

    const filterByAuthorHandler = (author) => {
        dispatch(filterByAuthor(author));
    };

    return (
        <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        ALL BLOGS ARE HERE
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore
                        natus atque, ducimus sed.
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {blogs
                        .filter(categoryFilterFn)
                        .filter(authorFilterFn)
                        .map((blog) => (
                            <Blog
                                key={blog.id}
                                blog={blog}
                                filterByCategoryHandler={filterByCategoryHandler}
                                filterByAuthorHandler={filterByAuthorHandler}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
