import React, {useEffect, useState} from 'react'

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
                <div key={crypto.id} className='cryptoinf'>
                    <p>{crypto.symbol}</p>
                    <p>{crypto.name}</p>
                </div>
            ) : <div>Wait</div>
                
            }
        </div>
    )
}

export default Information
