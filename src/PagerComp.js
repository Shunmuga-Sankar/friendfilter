import { useEffect, useState } from 'react';
import './PagerComp.css'

const PagerComp = (props) => {

    const [state, setState] = useState({
        totalPages: 1,
        currentPageNo: 1
    })

    const updatePageCount = () => {
        setState({ ...state, totalPages: Math.ceil(props.ListLength % 4) });
    }

    const onPageChange = (next) => {
        setState({ ...state, currentPageNo: next ? state.currentPageNo + 1 : state.currentPageNo - 1 });
    }
    return (
        <div className='page-info-div'>
            <button className='btn' disabled={state.currentPageNo == 1}>{`<`}</button>
            <span className='page-num-label'>{state.currentPageNo}</span>
            <button className='btn' disabled={state.totalPages == state.currentPageNo} >{`>`}</button>
        </div>
    )
}

export default PagerComp;