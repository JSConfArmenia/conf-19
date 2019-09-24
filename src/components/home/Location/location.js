import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import './location.css';

const Map = () => {
    return (
        <GoogleMap
            defaultZoom={21}
            defaultCenter={{lat: 40.1783632, lng: 44.5110651}}
        >
        </GoogleMap>
    );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Location() {
    return (
        <div className={'toCenter'}>
            <h1 className={'galaxy_title'}>
                A <span style={{color: '#19B1FF'}}>GALAXY</span> FAR FAR AWAY
            </h1>
            <div
                style={{
                    width: '1000px',
                    height: '100vh',
                    marginTop: '10px'
                }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDrPSNUf_6iI95MrqwlcT7njNrt6rU0CAE`}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `500px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>
        </div>

    )
};