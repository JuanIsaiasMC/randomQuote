import React, { useState } from 'react';
import quotes from './quotes.json';
import colors from './colors.json';



const QuoteBox = () => {
    const random = Math.floor(Math.random() * quotes.length);


    const [index, setIndex] = useState(random)
    const cambiarIndex = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setIndex(random);
    };

    const randomColorIndex = Math.floor(Math.random() * colors.length);

    const color = colors[randomColorIndex].hex


    document.body.style = `background: ${color}`


    return (
        <div style={{ color: color }} className='card'>
            <h2 className='phrase'>
                <i style={{ color: color }} class="fa-solid fa-quote-left"></i>
                {quotes[index].quote}
            </h2>
            <div className='card-author'>

                <h3 className='author'>
                    <i>
                        {quotes[index].author}
                    </i>
                </h3>
                <button onClick={cambiarIndex} className='button-random'>
                    <i style={{ color: color }} className="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default QuoteBox;