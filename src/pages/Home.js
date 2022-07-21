import React from 'react';
import { ListBeers } from '../components/ListBeers';

export function Home() {
    return (
        <div>
            <h1>Punk API</h1>
            <ListBeers />
        </div>
    );
}
