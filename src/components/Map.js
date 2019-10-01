import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

//     mapboxgl.accessToken = 'pk.eyJ1IjoiaGVsbG9sYW1wcG9zdCIsImEiOiJjanhrYXhmdDcyODgwM3lzOGg1OG50ZmVtIn0.4PNfG_tujoAdey9k61WSdA';
//     var map = new mapboxgl.Map({
//     container: 'YOUR_CONTAINER_ELEMENT_ID',
//     style: 'mapbox://styles/mapbox/streets-v11'
//     });

class Map extends Component {
    state = {
        viewport: {
            latitude: 51.5134595,
            longitude: -0.3198111,
            zoom: 16
        }
    }
    
    render() {
        return (
            <div className="map">
                <ReactMapGL 
                {...this.state.viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/hellolamppost/cjy8rs4jw018n1cmd7q897c9x"
                mapboxApiAccessToken="pk.eyJ1IjoiaGVsbG9sYW1wcG9zdCIsImEiOiJjanhrYXhmdDcyODgwM3lzOGg1OG50ZmVtIn0.4PNfG_tujoAdey9k61WSdA"/>
            </div>
        )
    }
}

export default Map