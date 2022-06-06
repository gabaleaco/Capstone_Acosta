import React from 'react';
import '../Styles.css';

const Banner = props => {
    const {title, subtitle} = props;
    return (
        <>
            <h2 className='primary'>{title}</h2>
            <p className='secondary'>{subtitle}</p>
        </>
    )
}

export default Banner;

//look at this later - https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10
//random subtitle on click? for funsies