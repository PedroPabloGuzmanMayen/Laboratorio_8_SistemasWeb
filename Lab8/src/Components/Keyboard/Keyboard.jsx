import React from 'react';
import './Keyboard.css';
import Button from '../Button/Button';

const Keyboard = ({ delFunc, addFunct, operateFunc, deleteAllFunct }) => {
    const values = ['1', '2', '3', '4', '5','+', '6', '7', '8', '9', '0', '-','*', 'C', '=', '/', 'AC', '.'];

    return (
        <div className='KeyBoard'>
            {values.map((value) => (
                <Button
                    key={value}
                    text={value}
                    onClick={() => {
                        if (value === '=') {
                            operateFunc();
                        } else if (value === 'C') {
                            delFunc();
                        } else if (value === 'AC') {
                            deleteAllFunct();
                        } else {
                            addFunct(value);
                        }
                    }}
                />
            ))}
        </div>
    );
}

export default Keyboard;
