/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../redux/filters/actions';
import debounce from '../utils/commonFunctions';

function Header() {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const debouncedSearch = useCallback(
        debounce((searchVal) => dispatch(filterBySearch(searchVal)), 500),
        []
    );

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setTimeout(() => {
            debouncedSearch(e.target.value);
        }, 500);
    };

    return (
        <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
            />
            <img className="inline h-6 cursor-pointer" src="./images/search.svg" alt="Search" />
        </div>
    );
}

export default Header;
