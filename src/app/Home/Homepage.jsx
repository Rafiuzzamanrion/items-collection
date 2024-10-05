
import ItemData from '@/components/ItemData';
import {fetchALLItem} from '@/controls/fetchItem';

import React from 'react';

const Homepage = async() => {

//    server side rendering (SSR)
    const data = await fetchALLItem();
    return (
        <div>
            <ItemData data={data}/>
        </div>
    );
};

export default Homepage;