import React, {useState} from 'react';

function Slider() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return  (
        <div className='slider'>
            <div className = 'scale'>
                <div className = 'btn'></div>
            </div>
        </div>
    )
}