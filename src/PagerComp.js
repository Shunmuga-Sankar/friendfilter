import { useState } from 'react';
import './PagerComp.css'

const PagerComp = (props) => {

    const [state, setState] = useState({
        totalPages: 1,
        currentPageNo: 1
    })
    
    return (
        <div className='page-info-div'>
            <button className='btn' disabled={state.currentPageNo === 1}>{`<`}</button>
            <span className='page-num-label'>{state.currentPageNo}</span>
            <button className='btn' disabled={state.totalPages === state.currentPageNo} >{`>`}</button>
        </div>
    )
}

export default PagerComp;