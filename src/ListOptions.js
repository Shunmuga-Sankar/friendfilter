import './ListOptions.css';
import Bin from './Assests/Bin.svg';
import Fav from './Assests/Fav.svg';
import { ReactComponent as MyBin } from './Assests/Bin.svg';
import { ReactComponent as FavFilled } from './Assests/Fav.svg';
import { ReactComponent as FavUnfilled } from './Assests/FavUnfilled.svg';
const ListOptions = (props) => {
    return (
        <>
            <div className='list-div'>
                <div className='list-label-content'>
                    <div className='label-title'>{props.listData.name}</div>
                    <div className='label-sub-title'>is your friend</div>
                </div>
                <div className='list-action-content'>
                    <div
                        className={`action-btn btn mr10 ${props.listData.favourite && 'active' || ''}`}
                        onClick={props?.addToFav?.bind(this, props.listData)}>
                        {props.listData.favourite && <FavFilled /> || <FavUnfilled />}
                    </div>
                    <div
                        className='action-btn btn'
                        onClick={props?.deleteData?.bind(this, props.listData)}>
                        <MyBin />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListOptions;