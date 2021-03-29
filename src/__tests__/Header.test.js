//react testing library here. we used jest in the functions.test.js
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { render, fireEvent } from '@testing-library/react' 
import Header from '../Components/Header';

it('does not show the dropdown when initially mounted', () => {
    const {queryByTestId} = render(<Header />)

    const dropdown = queryByTestId('dropdown')

    expect(dropdown).toBeFalsy();
})

it('shows the dropdown when the hamburger is clicked', () => {
    const {container, getByTestId} = render(<Header />)

    const hamburger = getByTestId('hamburger-button');

    fireEvent.click(hamburger)

    expect (container.textContent).toContain('Dropdown menu');
})