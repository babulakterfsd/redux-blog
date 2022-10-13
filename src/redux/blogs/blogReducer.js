const initialState = [
    {
        id: 1,
        blogImg: 'https://i.ibb.co/7jkv9FC/blogimg-1.jpg',
        category: 'development',
        title: 'How to create mobile-optimized web page',
        date: '23 April 2020',
        timeToRead: '5 min read',
        author: 'Learn with Sumit',
        authorImg: 'https://i.ibb.co/R0YHRH4/authimg-1.jpg',
    },
    {
        id: 2,
        blogImg: 'https://i.ibb.co/HTvtRgN/blogimg-2.jpg',
        category: 'development',
        title: 'Learn Javascript to build your own website',
        date: '13 August 2016',
        timeToRead: '11 min read',
        author: 'Babul Akter',
        authorImg: 'https://i.ibb.co/Mg6S1GW/authimg-2.jpg',
    },
    {
        id: 3,
        blogImg: 'https://i.ibb.co/7jkv9FC/blogimg-1.jpg',
        category: 'various',
        title: 'Start earning money from your blog',
        date: '13 April 2019',
        timeToRead: '7 min read',
        author: 'Learn with Sumit',
        authorImg: 'https://i.ibb.co/R0YHRH4/authimg-1.jpg',
    },
    {
        id: 4,
        blogImg: 'https://i.ibb.co/BV8FYn6/blogimg-2.png',
        category: 'design',
        title: 'Design your own website with figma',
        date: '28 April 2014',
        timeToRead: '9 min read',
        author: 'Babul Akter',
        authorImg: 'https://i.ibb.co/R0YHRH4/authimg-2.jpg',
    },
    {
        id: 5,
        blogImg: 'https://i.ibb.co/BV8FYn6/blogimg-1.png',
        category: 'design',
        title: 'React JS for beginners with awsome projects',
        date: '13 May 2022',
        timeToRead: '4 min read',
        author: 'Learn with Sumit',
        authorImg: 'https://i.ibb.co/R0YHRH4/authimg-1.jpg',
    },
];

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default blogReducer;
