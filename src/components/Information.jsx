import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap'


const Information = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/list")
            .then(result => result.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])


    return (

        
        <div>
            {
               data.length ? data.map(crypto => 
            

<div className="cryptoinf">
    <div className="info">
        <div className="name">{crypto.name}</div>
        <p>{crypto.symbol}</p>
    </div>
</div>


            ) : <div>Wait</div>
                
            }
        </div>
    )
}

export default Information
