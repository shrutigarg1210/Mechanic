import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import useGeolocation from "react-hook-geolocation";
const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId =
  "635979112033-lmk9lhtqvopba3glabr2jh2i87s3drd6.apps.googleusercontent.com";
function distance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const phi1 = radians(lat1);
  const phi2 = radians(lat2);
  const deltaPhi = radians(lat2 - lat1);
  const deltaLambda = radians(lon2 - lon1);
  
  const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
          Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2)
          
          ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  
  return d;
}
/*
The distance() function takes four parameters: the latitude and longitude of the first location (lat1, lon1) and the latitude and longitude of the second location (lat2, lon2). It returns the distance between the two locations in meters.

The radians() function converts degrees to radians, which is necessary for the Haversine formula to work.

In the example usage, the function is called with the latitude and longitude of New York City (40.7128, -74.0060) and London (51.5074, -0.1278), and the result is printed to the console in meters.
*/
function radians(degrees) {
  return degrees * Math.PI / 180;
}

// example usage:
const distanceInMeters = distance(40.7128, -74.0060, 51.5074, -0.1278);
console.log(distanceInMeters); // Output: 5573059.050628106 (in meters)
const geolocation=()=>{
    
}
const Location=()=>{
  const geolocation= useGeolocation();
  return !geolocation.error ? (
    <ul>
      <li>Latitude: {geolocation.latitude}</li>
      <li>Longitude: {geolocation.longitude}</li>
      <li>Location accuracy: {geolocation.accuracy}</li>
      <li>Altitude: {geolocation.altitude}</li>
      <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
      <li>Heading: {geolocation.heading}</li>
      <li>Speed: {geolocation.speed}</li>
      <li>Timestamp: {geolocation.timestamp}</li>
    </ul>
  ) : (
    <p>No geolocation, sorry.</p>
    );
}


root.render(
  <>
  <Location></Location>
  </>
);
