import React, { useEffect, useState } from 'react';

import { getAllBeers } from '../services/api';

export function ListBeers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        getAllBeers().then((resp) => {
            return setBeers(resp.data);
        });
    }, []);

    return (
        <div className="grid-container">
            {beers.map((beer) => {
                return (
                    <div key={beer.id} className="beer-container">
                        <img
                            className="beer-img"
                            src={beer.image_url}
                            alt={beer.name}
                        />
                        <div className="beer-info">
                            <h3 className="beer__title">{beer.name}</h3>
                            <h4 className="beer__title--sub">{beer.tagline}</h4>
                            <span>{beer.abv}%</span>
                            <p>First brewed: {beer.first_brewed}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
