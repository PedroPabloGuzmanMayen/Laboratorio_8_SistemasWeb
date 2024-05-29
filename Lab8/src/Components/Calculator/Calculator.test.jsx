// src/Components/Calculator/Calculator.test.jsx

import React from 'react'
import {test, expect, vi} from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'

test ('Calculator perfomrs addition', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('2')
    fireEvent.click(button2)
    const button3 = screen.getByText('+')
    fireEvent.click(button3)
    const button4 = getByText('3')
    fireEvent.click(button4)
    const button5 = getByText('=')
    fireEvent.click(button5)
    const result = getByText('15', { selector: 'h1' })
    expect(result).toBeInTheDocument()
    

})


test('Calculator performs substraction', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('2')
    fireEvent.click(button2)
    const button3 = getByText('-')
    fireEvent.click(button3)
    const button4 = getByText('3')
    fireEvent.click(button4)
    const button5 = getByText('=')
    fireEvent.click(button5)
    const result = getByText('9', { selector: 'h1' })
    expect(result).toBeInTheDocument()
})

test ('Calculator performs multiplication', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('2')
    fireEvent.click(button2)
    const button3 = getByText('*')
    fireEvent.click(button3)
    const button4 = getByText('3')
    fireEvent.click(button4)
    const button5 = getByText('=')
    fireEvent.click(button5)
    const result = getByText('36', { selector: 'h1' })
    expect(result).toBeInTheDocument()
})

test ('Calculator performs division', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('2')
    fireEvent.click(button2)
    const button3 = getByText('/')
    fireEvent.click(button3)
    const button4 = getByText('3')
    fireEvent.click(button4)
    const button5 = getByText('=')
    fireEvent.click(button5)
    const result = getByText('4', { selector: 'h1' })
    expect(result).toBeInTheDocument()
})

test ('Calculator performs decimal operations and rounds the result to two decimal places', () => {
    const {getByText} = render(<Calculator />);
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('.')
    fireEvent.click(button2);
    const button3 = getByText('2')
    fireEvent.click(button3);
    const button4 = getByText('*')
    fireEvent.click(button4);
    const button5 = getByText('3')
    fireEvent.click(button5);
    const button6 = getByText('=')
    fireEvent.click(button6)
    const result = getByText('3.60', { selector: 'h1' })
    expect(result).toBeInTheDocument()
})

test ('Calculator performs AC operation', () => {
    const {getByText} = render(<Calculator />);
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('2')
    fireEvent.click(button2)
    const button3 = getByText('AC')
    fireEvent.click(button3)
    const result = getByText('', { selector: 'h1' });
    expect(result).toBeInTheDocument()
})

test ('Calculator performs C operation', () => {
    const {getByText} = render(<Calculator />);
    const button = getByText('1')
    fireEvent.click(button);
    const button2 = getByText('2')
    fireEvent.click(button2);
    const button3 = getByText('C')
    fireEvent.click(button3);
    const result = getByText('1', { selector: 'h1' });
    expect(result).toBeInTheDocument()
})

test ('Calculator performs error operation when division by zero is performed', () => {
    const {getByText} = render(<Calculator />);
    const button = getByText('1')
    fireEvent.click(button);
    const button2 = getByText('/')
    fireEvent.click(button2);
    const button3 = getByText('0')
    fireEvent.click(button3);
    const button4 = getByText('=')
    fireEvent.click(button4);
    const result = getByText('Error', { selector: 'h1' });
    expect(result).toBeInTheDocument()
})

test ('Calculator performs error operation whenthe result is a negative number', () => {
    const {getByText} = render(<Calculator />);
    const button = getByText('1')
    fireEvent.click(button);
    const button3 = getByText('-')
    fireEvent.click(button3);
    const button4 = getByText('3')
    fireEvent.click(button4);
    const button5 = getByText('=')
    fireEvent.click(button5);
    const result = getByText('Error', { selector: 'h1' });
    expect(result).toBeInTheDocument()
})

test ('Screen only displays error when more than 9 characters are entered', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button);
    const button2 = getByText('2')
    fireEvent.click(button2);
    const button3 = getByText('3')
    fireEvent.click(button3);
    const button4 = getByText('4')
    fireEvent.click(button4);
    const button5 = getByText('5')
    fireEvent.click(button5);
    const button6 = getByText('6')
    fireEvent.click(button6);
    const button7 = getByText('7')
    fireEvent.click(button7);
    const button8 = getByText('8')
    fireEvent.click(button8);
    const button9 = getByText('9')
    fireEvent.click(button9);
    const button10 = getByText('0')
    fireEvent.click(button10);
    const result = getByText('Error', { selector: 'h1' });
    
    expect(result).toBeInTheDocument()
})

test ('Calculator respects operation order', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button);
    const button2 = getByText('+')
    fireEvent.click(button2);
    const button3 = getByText('2')
    fireEvent.click(button3);
    const button4 = getByText('*')
    fireEvent.click(button4);
    const button5 = getByText('3')
    fireEvent.click(button5);
    const button6 = getByText('=')
    fireEvent.click(button6);
    const result = getByText('7', { selector: 'h1' });
    expect(result).toBeInTheDocument();
})

test ('Calculator sets the display to null when users try to perform operations after an error', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('/')
    fireEvent.click(button2)
    const button3 = getByText('0')
    fireEvent.click(button3)
    const button4 = getByText('=')
    fireEvent.click(button4)
    const button5 = getByText('1')
    fireEvent.click(button5)
    const result = getByText('', { selector: 'h1' })
    expect(result).toBeInTheDocument()
})

test ('Del button sets display to null when the users try to delete after an error', () => {
    const {getByText} = render(<Calculator />)
    const button = getByText('1')
    fireEvent.click(button)
    const button2 = getByText('/')
    fireEvent.click(button2)
    const button3 = getByText('0')
    fireEvent.click(button3)
    const button4 = getByText('=')
    fireEvent.click(button4)
    const button5 = getByText('C')
    fireEvent.click(button5)
    const result = getByText('', { selector: 'h1' })
    expect(result).toBeInTheDocument()
})





