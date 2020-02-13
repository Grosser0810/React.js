import React from "react";

const SortBlock = ({sortAZ, sortZA, sortDate, sortOF}) => {
    return(
        <div>
            <div className='SortBlock'>
                <button
                    onClick={sortAZ}
                    type='button'
                    className='btn btn-primary'>A-z
                </button>
                <button
                    onClick={sortZA}
                    type='button'
                    className='btn btn-primary'>Z-a
                </button>
                <button
                    onClick={sortDate}
                    type='button'
                    className='btn btn-primary'>Сортировать по дате
                </button>
            </div>
            <div className='sortOF'>
                <button
                    onClick={sortOF}
                    type='button'
                    className='btn'>сбросить сортировку</button>
            </div>
        </div>
    )
};

export default SortBlock;