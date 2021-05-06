import React from 'react';

const Title = ({title , span}) =>  {
    return (
        <div className="title" data-aos="fade-in" data-aos-duration="2000">
            {title}
            <h3><span>{span}</span></h3>
        </div>
    )
}

export default Title;
