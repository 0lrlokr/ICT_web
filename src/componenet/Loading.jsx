import React from 'react'
import { BeatLoader } from 'react-spinners';

// 그냥 API 로딩 페이지 
const override = {
    marginTop: '280px',




};

const Loading = ({ loading }) => {
    return (
        <div>
            <BeatLoader
                color="#fff"
                margin={7}
                size={25}
                speedMultiplier={0.8}
                cssOverride={override}
            />
            <div style={{
                marginTop: '10px',
                color: '#fff',
                fontSize: '15px',
                fontWeight: '600',
            }}>
                <h2> 로딩중입니다 .. </h2>
            </div>



        </div>
    )
}

export default Loading;