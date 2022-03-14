
import './SearchInput.css'
import ListOptions from './ListOptions';
import { useEffect, useState } from 'react';
const friendListMock = [
    { name: 'Naveen', favourite: true, id: 1 },
    { name: 'Mani', favourite: false, id: 3 },
    { name: 'Arav', favourite: false, id: 2 },
    { name: 'Kani', favourite: true, id: 4 },
    { name: 'Monisha', favourite: false, id: 5 },
    { name: 'Vignesh', favourite: false, id: 6 },
];

const SearchInput = (props) => {

    const [state, setState] = useState({
        searchIpVal: '',
        pageNo: 1,
        availOptions: [],
        searchResult: [],
        totalPages: 1,
        currentPageNo: 1
    })

    const updateOptionList = () => {
        let derivedData = reOrderData(friendListMock);
        setState({ ...state, availOptions: derivedData, totalPages: Math.ceil(derivedData.length / 4) })
    }

    useEffect(updateOptionList, [])

    const reOrderData = (listArray) => {
        let sortedArray = listArray, favourites = [], others = [];
        sortedArray.sort((data1, data2) => data1?.name?.toLowerCase() < data2?.name?.toLowerCase() ? -1 : 1);
        sortedArray.forEach(friendInfo => {
            if (friendInfo.favourite) {
                favourites.push(friendInfo)
            } else {
                others.push(friendInfo)
            }
        })
        return favourites.concat(others);
    }

    const onEnter = (event) => {
        if(event.key.toLowerCase() === 'enter'){
            onSearch(event);
        }else{
            event.preventDefault && event.preventDefault();
        }
    }

    const onSearch = (event) => {
        setState(prevState => {
            let prevOptions = prevState.availOptions.filter(filterData => filterData?.name?.toLowerCase().indexOf(event?.target?.value?.toLowerCase()) > -1)
            prevOptions = reOrderData(prevOptions);
            if (event?.key?.toLowerCase() === 'enter' && !prevOptions.length) {
                let today = new Date();
                let newOptions = [{
                    name: event.target.value,
                    favourite: false,
                    id: today.getTime()
                }];
                return { ...state, searchIpVal: event.target.value, availOptions: prevState.availOptions.concat(newOptions), searchResult: newOptions, totalPages: 1 }
            }
            return { ...state, searchIpVal: event.target.value, searchResult: prevOptions, totalPages: Math.ceil(prevOptions.length / 4) }
        })
    }

    const bindOptionList = () => {
        return (
            state.searchIpVal ? state.searchResult : state.availOptions).slice((state.currentPageNo - 1) * 4, state.currentPageNo * 4).map((friendData, index) =>
                <ListOptions key={index + 'id'} listData={friendData} deleteData={deleteData} addToFav={addToFav} />)
    }

    const addToFav = (listData) => {
        let pos = state.availOptions.findIndex(arrData => arrData.id === listData.id);
        setState(prevState => {
            let prevOptions = prevState.availOptions;
            prevOptions[pos].favourite = !prevOptions[pos].favourite;
            prevOptions = reOrderData(prevOptions)
            return { ...state, availOptions: prevOptions }
        });
    }

    const deleteData = (listData) => {
        let updatedData = state.availOptions.filter(arrData => arrData.id !== listData.id);
        setState({ ...state, availOptions: updatedData, totalPages: Math.ceil(updatedData.length / 4) });
    }

    const onPageChange = (next) => {
        setState({ ...state, currentPageNo: next === true ? state.currentPageNo + 1 : state.currentPageNo - 1 });
    }

    return (
        <>
            <div className="content-header">
                <div className="content-header-label">Friends List</div>
                <div className='page-info-div' id="page-info-content-div"></div>
                {state.totalPages > 1 &&
                    <div className='page-info-div'>
                        <button className='btn' disabled={state.currentPageNo === 1} onClick={onPageChange}>{`<`}</button>
                        <span className='page-num-label'>{state.currentPageNo}</span>
                        <button className='btn' disabled={state.totalPages === state.currentPageNo} onClick={onPageChange.bind(this, true)} >{`>`}</button>
                    </div>}
            </div>
            <div className='search-ip-div'>
                <input className='search-ip' value={state.searchIpVal} onChange={onSearch} onKeyUp={onEnter} placeholder={`Enter your friend's name`} />
            </div>
            {bindOptionList()}
        </>
    )
}

export default SearchInput;