import React from "react";

import './SortBlock.css';

const SortBlock = () => {
    return (
        <div>
            <div className='SortBlock'>
                <button  type='button' className='btn btn-primary'>A-z</button>
                <button  type='button' className='btn btn-primary'>Z-a</button>
                <button  type='button' className='btn btn-primary'>Сортировать по дате</button>
            </div>
            <div className='sortOF'>
                <button type='button' className='btn'>сбросить сортировку</button>
            </div>
        </div>

    )
};

export default SortBlock;