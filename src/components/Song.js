import React from "react";
import './ChartList'

const Song = ({ position, title, artist }) => {



    return <li>
    <h3>{position}</h3>
    <p>{title}</p>
    <p>{artist}</p>
    </li>


}




export default Song;