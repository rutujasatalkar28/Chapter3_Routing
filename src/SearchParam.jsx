//import React from 'react';
//import { useSearchParams } from 'react-router-dom';

//function SearchParam(props) {
//    let [searchparam,setSearchParam] = useSearchParams()
//    let price = searchparam.get('price_range')
//    function update(e)
//    {
//        setSearchParam({price_range:e.target.value})
//    }
//    return (
//        <div>
//            Select Range: <input type='range' min={1000} max={10000} onChange={update}/>
//            <span>{price}</span>
            
//        </div>
//    );
//}

//export default SearchParam;

import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParam(props) {
    let [searchparam,setSearchParam] = useSearchParams()
    let price = searchparam.get('price')
    let cat = searchparam.get('cat')
    let sub = searchparam.get('sub')
    function update()
    {
        setSearchParam({price:1000,cat:'Men',sub:'T-shirts'})

    }
    return (
        <div>
            <button onClick={update}>Set Parameters</button>
            <br />
            Price : {price}
            <br />
            Cat : {cat}
            <br />
            Sub_cat : {sub}
        </div>
    );
}

export default SearchParam;