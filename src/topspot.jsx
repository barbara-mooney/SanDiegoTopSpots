import React from 'react';

export default props => (
    <div>        
        <div className = "card card-body">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.href} className="btn btn-link">Go to Google Maps</a>
        </div>
    </div>
);


// 2) WHY COULDN'T I MAKE CHANGES TO THE TOPSPOTS FILE... TO COMBINE THE LINK? JUST TO RENDER?
// 3) HOW DO I STYLE THE WEBPAGE? I TRIED TO LINK A CSS STYLE SHEET AND WOULD GIVE ME ERRORS 
