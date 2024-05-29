import React, { useEffect, useState } from 'react';
import Screen from '../Screen/Screen';
import Keyboard from '../Keyboard/Keyboard';

const Calculator = () => {
    const [operation, setOperation] = useState('');

    const addFunct = (value) => {
        if (operation === 'Error') {
            setOperation('')
        }
        else {
            setOperation((prev) => prev + value)
        }
        
    };

    const delFunc = () => {
        if (operation === 'Error' || operation === ''){
            setOperation('');
        }
        else {
            setOperation((prev) => prev.slice(0, -1))
        }
    };

    const operateFunc = () => {

        if (operation === 'Error' || operation === ''){
            setOperation('')
        }
        else {
            if (operation.includes('.')){
                setOperation((prev) => eval(prev).toFixed(2).toString())
            }
            else {
                setOperation((prev) => eval(prev).toString())
            }
        
        }
            
        } 

    const deleteAllFunct = () => {
        setOperation('');
    };

    useEffect(() => {
        if (parseFloat(operation) < 0 || parseFloat(operation) > 999999999 || operation === 'Infinity' || operation === '-Infinity'){
            setOperation('Error')
        }

    }, [operation])

    return (
        <div className = 'calculator-container'>
            <Screen text={operation} />
            <Keyboard
                addFunct={addFunct}
                delFunc={delFunc}
                operateFunc={operateFunc}
                deleteAllFunct={deleteAllFunct}
            />
        </div>
    )


}

export default Calculator
