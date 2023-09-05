import React from 'react'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

const position = [59.287191, 32.455224]
const customIcon = new Icon({
  iconUrl: require('../../images/location.png'),
  iconSize: [38, 38]
})

export default function Map() {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={customIcon} >
      <Popup>
      г. Санкт-Петербург, Комсомольская, 43 к1
      </Popup>
    </Marker>
  </MapContainer>
  )
}
