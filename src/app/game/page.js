'use client'

import { useEffect } from "react"

const GamePage = () => {
    useEffect(()=> {
        fetch('/api/game')
            .then((data) => {
                console.log(data);
            })
            .catch(err => {
                console.log(err, "ERROR HERE")
            })
    }, [])

    return (
        <div>
        </div>
    )
}

export default GamePage;