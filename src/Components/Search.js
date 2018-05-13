
// import React, { Component } from 'react';
// import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
// import styles from './autocomplete.css';

// class Contents extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             // position: null,
//             position: {
//                 lat: null,
//                 lng: null
//             },
//             LatLng: {
//                 lat: 40.7128,
//                 lng: -74.0060
//             },
//             zoom: {
//                 zoom: 11
//             },
//             activeMarker: {},
//             selectedPlace: {},
//             showingInfoWindow: false,
            
//         }
//       }
 

//   componentDidMount() {
//         this.geoLocate()
//         this.renderAutoComplete();
       
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props !== prevProps.map) this.renderAutoComplete();
//   }

//   geoLocate() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             this.setState({
//                     LatLng: {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     },
//                     zoom: {
//                         zoom: 13
//                     }
//                 })
//         })
//     } else {
//         this.setState({
//                 LatLng: {
//                     lat: 40.7128,
//                     lng: -74.0060
//                 },
//                 zoom: {
//                     zoom: 11
//                 }
//             });
//     }
// }
//   onSubmit(e) {
//     e.preventDefault();
//   }

//   renderAutoComplete() {
//     const { google, map } = this.props;

//     if (!google || !map) return;

//     const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
//     autocomplete.bindTo('bounds', map);

//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace();

//       if (!place.geometry) return;

//       if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
//       else {
//         map.setCenter(place.geometry.location);
//         console.log('regular ' + place.geometry.location)
//         map.setZoom(9);
//       }
//       console.log('place' + place.geometry.location.lat);
//       this.setState({ position: {
//                         lat: place.geometry.location.lat,
//                         lng: place.geometry.location.lng
//                         }
//                     });
//       console.log(this.state.position);
       
//     });
//   }

//   render() {
 

//     return (
//       <div>
//         <div>
//           <form onSubmit={this.onSubmit}>
//             <input
//               placeholder="Enter a location"
//               ref={ref => (this.autocomplete = ref)}
//               type="text"
//             />
//           </form>
//         </div>

//         <div>
//           <Map
         
//             {...this.props}
//             zoom = {this.state.zoom.zoom}
//             initialCenter={{
//                 lat: 40.730610,
//                 lng: -73.935242
//               }}
//             center= {{
//                 lat: this.state.LatLng.lat,
//                 lng: this.state.LatLng.lng
//             }}
//             center = {{
//                 lat:  this.state.position.lat && this.state.position.lat(),
//                 lng: this.state.position.lng && this.state.position.lng()
//             }}
              
//             centerAroundCurrentLocation={true}
//             containerStyle={{
//               height: '100vh',
//               position: 'relative',
//               width: '100%'
//             }}>
//             <Marker position={{
//                 lat: this.state.position.lat && this.state.position.lat(),
//                 lng: this.state.position.lng && this.state.position.lng()
//             }}
//                 />
//           </Map>
//         </div>
//       </div>
//     );
//   }
// }

// const MapWrapper = props => (
//   <Map className="map" google={props.google} visible={false}>
//     <Contents {...props} />
//   </Map>
// );

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyCE2cEIub5O3yH4b1S2e9zOFj3d6BspM7A')
//   })(MapWrapper);