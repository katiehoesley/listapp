import { TextField, Button } from '@mui/material';
import { React, useState } from 'react'
import './App.css'

function App() {
    const [groceryList, setGroceryList] = useState([])
    const [newItem, setNewItem] = useState('')

    const handleChange = (e) => {
        setNewItem(e.target.value)
    }

    const handleSubmit = (e) => {
        if(newItem.length>0 && !groceryList.includes(newItem)){
            setGroceryList([...groceryList, newItem])
        } else {
            alert('New Entry Required!')
        }
    }

    let list = groceryList.map(item => {
        return(
            <div>
                <li>{item}</li>
                <Button aria-label="delete" size="small"  onClick={()=>{
                    let newList = groceryList.filter(el=>el!==item)
                    setGroceryList(newList)
                    }} 
                >
                Delete
                </Button>
            </div>
        )
    })

    return(
        <div id="app">
            <TextField onChange={handleChange} id="input" label="Grocery Item" variant="outlined" />
            <Button id="button" onClick={handleSubmit} variant="contained">Add item</Button><br/><br/>
            <div id="content">
                <h1 style={{fontFamily: "Courier New"}}>Grocery List</h1>
                <ul>{list}</ul>
            </div>
        </div>
    )
}
export default App; 