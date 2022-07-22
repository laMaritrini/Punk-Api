import React, { useState } from 'react';
import { ListBeers } from '../components/ListBeers';

export function Home() {
    const [keyword, setKeyword] = useState('');
    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    return (
        <div>
            <h1>Punk API</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="Search"
                    value={keyword}
                    onChange={handleChange}
                />
            </form>
            <ListBeers keyword={keyword} />
        </div>
    );
}
