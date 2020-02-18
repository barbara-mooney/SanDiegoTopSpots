import React from 'react';

export default props => (
    <div className = 'well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={props.href} className="btn btn-link">Go to Google Maps</a>
    </div>
);


// 1) THE WELLS CLASSNAME IS NOT WORKING. 
// 2) WHY COULDN'T I MAKE CHANGES TO THE TOPSPOTS FILE... TO COMBINE THE LINK? JUST TO RENDER?
// 3) HOW DO I STYLE THE WEBPAGE? I TRIED TO LINK A CSS STYLE SHEET AND WOULD GIVE ME ERRORS 
