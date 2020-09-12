import React from 'react'
import { Button } from 'reactstrap'

export default function Search(props) {
    return (
        <div>
            <input type="text" placeholder="Enter a Movie Title..." onChange={(e) => {
                e.persist()
                e.preventDefault()
                props.searchInput(e)
            }} />
            <Button onClick={(e) => {
                e.persist()
                e.preventDefault()
                props.searchQuery(e)
            }}>Search</Button>
        </div>
    )
}
