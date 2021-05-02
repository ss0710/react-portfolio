import React from 'react';

const Title = ({title , span}) =>  {
    return (
        <div className="title">
            {title}
            <h3><span>{span}</span></h3>
        </div>
    )
}

export default Title;
