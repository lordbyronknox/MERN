// import React, { Suspense, useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

function Swr() {
    const { data } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, {
        Suspense: true}
        );
    
    return (
        <div>
            <img width={500} src={data.message} />
        </div>
    );
}


export default Swr;