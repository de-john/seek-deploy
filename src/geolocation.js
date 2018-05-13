/** 
 * @location.js
 * 
 * contains functions for geocoding and geolocation
*/
export function geoLocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                    LatLng: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    zoom: {
                        zoom: 13
                    }
                });
        })
    } else {
        this.setState({
                LatLng: {
                    lat: 49.8527,
                    lng: -123.1207
                },
                zoom: {
                    zoom: 11
                }
            });
    }
}
export function getLocation() {
    let myLatLng = {
        lat: 40.730610,
        lng: -73.935242
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            myLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // console.log("this is myLatLng" + myLatLng.toString());
            console.log("return value of if cond");
            console.log(myLatLng);
            return myLatLng;
        })
    } else {
        //browser doesn't support geolocation, set as vancouver
        console.log("return value of else cond");
        console.log(myLatLng);
        return myLatLng;
    }
}
////////////////////////////////////////////////////////
//Promise returns latlng array of user's location
export function getGeoLocation(){
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve({lat: position.coords.latitude, lng: position.coords.longitude});
            }, error => reject(error));
        }else{
            reject('Not Supported');
        }
    });
}



//Promise returns latlng array of first result
export function getLocationAddress(address){
    //note probably use places api would be better, https://developers.google.com/maps/documentation/javascript/places-autocomplete
    const GMAPS_GEOCODE_API_BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCE2cEIub5O3yH4b1S2e9zOFj3d6BspM7A";


    return new Promise((resolve, reject) => {
        return fetch(`${GMAPS_GEOCODE_API_BASEURL}&address=${address}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === 'OK'){
                const {lat, lng} = data.results[0].geometry.location;
                resolve([lat, lng]);
            }else{
                reject(data.status);
            }
        });
    });
}

