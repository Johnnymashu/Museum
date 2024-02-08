import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Artists = () => {

    const { artistName } = useParams();
    const navigate = useNavigate();

    const [artistInfo, setArtistInfo] = useState();

    const images = require.context('../images/artist/', true);

    useEffect(() => {
        const getArtistInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/artist  ');
                const data = await response.json();
                setArtistInfo(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getArtistInfo();
    }, []);

    return (
        <div class="container w-75">
            <Header pageTitle={"Artists"}/>

            {artistInfo ? (
                <div class="row row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-4 my-3">
                    {artistInfo.map((artist) => (
                        <div class="col px-4">
                            <Link to={artist.name} class="text-decoration-none">
                                <div class="card bg-light" style={{ width: "" }}>
                                    <img src={images(`./${artist.name}/artist.jpeg`)} class="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                    <div class="card-body">
                                        <p class="card-text">{artist.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading artist's works...</p>
            )
            }
        </div >
    );
};

export default Artists;
