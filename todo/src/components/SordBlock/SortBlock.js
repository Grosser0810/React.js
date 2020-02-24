import React from "react";

import './sortBlock.css'

const SortBlock = ({sortAZ, sortZA, sortDate, sortOF }) => {

    return(
        <div>
            <div className='SortBlock'>
                <button onClick={sortAZ} type='button' className='az'>A-z</button>
                <button onClick={sortZA} type='button' className='za'>Z-a</button>
                <button onClick={sortDate} type='button' className='date'>Сортировать по дате</button>
            </div>
            <div className='sortOF'>
                <button onClick={sortOF} type='button' className='off'>Сбросить сортировку</button>
            </div>
        </div>
    )
};

export default SortBlock;