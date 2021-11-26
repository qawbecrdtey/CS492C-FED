/* eslint-disable react/prop-types */
import React from 'react';
import { Socket } from 'socket.io-client';

// returns JSX of form (<td></td>)
const PaginationArrow = props => {
    const { currentPagi, pagePerPagi, totalPagiCount, symbol, type, enabled } = props;
    if(enabled === false) return (<td type={type}><p>{symbol}</p></td>);
    
    const startIndex = currentPagi * pagePerPagi + 1;
    const getGotoPagi = (t) => {
        if(t == 'first') {
            return 1;
        }
        else if(t == 'prev') {
            return currentPagi - 1;
        }
        else if(t == 'next') {
            return currentPagi + 1;
        }
        else if(t == 'last') {
            return totalPagiCount;
        }
        else {
            console.error(`Wrong type: ${type}`);
            return null;
        }
    };
    const gotoPagi = getGotoPagi(type);
    const pageNo = gotoPagi * pagePerPagi + 1;

    const clicked = () => {
        let item = {
            pageNo: pageNo
        };
        Socket.emit('post-click-snd', item);
    };

    if(gotoPagi === null) return (<></>);
    return (
    <td type={type}>
        <Link to={`/Main/${gotoPagi}`} onClick={clicked}>{symbol}</Link>
    </td>
    );
};

export default PaginationArrow;