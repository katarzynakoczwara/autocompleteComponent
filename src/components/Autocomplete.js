import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Autocomplete = ({array}) => {

    const [inputValue, setInputValue] = useState([]);
    const [suggestions, setSuggestions] = useState(array);
    const [list, setList] = useState(array);
    const [selectedSuggestions, setSelectedSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); 

    const handleClick = e => {         
        if(e.key === 'Enter') {     
            if(inputValue.length > 0) {
                const inputValueToUpperCase = inputValue.slice(0,1).toUpperCase() + inputValue.slice(1);
                if(suggestions.length > 0 && suggestions[0].name === inputValueToUpperCase && inputValue !== '') {           
                    if(!selectedSuggestions.includes(inputValueToUpperCase)) {
                        setSelectedSuggestions([...selectedSuggestions, inputValueToUpperCase]);
                    } 
                    setInputValue('');                    
                } 
            else {
                const inputValueToUpperCase = inputValue.slice(0,1).toUpperCase() + inputValue.slice(1);
                if(!selectedSuggestions.includes(inputValueToUpperCase)) {
                    setSelectedSuggestions([...selectedSuggestions, inputValueToUpperCase]);
                } 
                setInputValue('');
                setSuggestions([...array, {id: array.length + 1, name: inputValueToUpperCase}]);  
            }}     
            setShowSuggestions(false);
        }        
    }

    const handleInput = e => {   
        setInputValue(e.target.value);  
        const value = toLowerCase(e.target.value);
        const length = e.target.value.length;
        
        const filteredSuggestions = list.filter(item => {            
            const {name} = item;
            const nameToLowerCase = toLowerCase(name);           
            if(value === nameToLowerCase.slice(0, length)) {
                return item;                
            }            
        })
        setSuggestions(filteredSuggestions);
    }

    const toLowerCase = value => {
        return value.toLowerCase();
    }

    const addToSelected = name => {
        if(!selectedSuggestions.includes(name)) {
            setSelectedSuggestions([...selectedSuggestions, name]);
        }    
        setShowSuggestions(false); 
    }

    const deleteItem = name => {
        const newSelectedSuggestions = selectedSuggestions.filter( suggestion => suggestion !== name);
        setSelectedSuggestions(newSelectedSuggestions);
    }
    
    return ( 
        <div className="container">
            <div className="selected-container">
                {selectedSuggestions.map(item => {
                    return <span key={item} className="selected-item">{item}<FontAwesomeIcon icon={faTimes} className='icon' onClick={() => deleteItem(item)}/></span>                           
                })}
            </div>  
            <input type="text" id='name' className='input' value={inputValue} onChange={handleInput} onClick={() => setShowSuggestions(true)}  onKeyDown={handleClick} placeholder='Choose a country' />
            {showSuggestions && <ul className="list-container">
                {suggestions.map(item => {
                    const {id, name} = item;
                    return <li key={id}  className='listItem' onClick={() => addToSelected(name)} >{name}</li>
                    }                    
                )}
            </ul>}            
        </div>
    )
}

export default Autocomplete



