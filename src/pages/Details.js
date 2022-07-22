import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBeer } from '../services/api';
import './Details.css';

export function Details() {
    const [beerDetail, setBeerDetail] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getBeer(id).then((resp) => {
            setBeerDetail(resp.data);
        });
    }, [id]);

    return (
        <div className="details-container">
            <nav className="nav-bar">
                <h1 className="title-app">Punk API</h1>
                <Link className="link-home" to="/">
                    Home
                </Link>
            </nav>
            {beerDetail && (
                <>
                    {beerDetail.map((item) => (
                        <div key={item.id}>
                            <section className="section">
                                <img
                                    className="detail-img"
                                    src={item.image_url}
                                    alt={item.name}
                                />
                                <h1 className="detail-name">{item.name}</h1>
                                <h3 className="detail-sub-name">
                                    {item.tagline}
                                </h3>
                                <h4 className="detail-brewed">
                                    First brewed: {item.first_brewed}
                                </h4>
                                <span className="detail-abv">{item.abv} %</span>
                                <p className="detail-description">
                                    {item.description}
                                </p>
                                <div className="detail-food">
                                    <h5>Food pairing:</h5>
                                    {item.food_pairing.map((food, index) => (
                                        <ul key={index}>
                                            <li className="detail-list">
                                                {food}
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </section>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}
