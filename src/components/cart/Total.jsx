import React from 'react';

function Total({ title, amount }) {
    return (
        <div className="py-4 border border-indigo-100 my-4 rounded-md shadow-md">
            <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
            <h5 className="text-md text-center font-semibold">{amount}</h5>
        </div>
    );
}

export default Total;
