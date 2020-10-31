import React, {useEffect} from 'react'

const Information = () => {

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/list")
            .then(result => result.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Information
