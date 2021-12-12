import React from 'react';
import { render, screen } from '@testing-library/react';
import CardTemplate from './CardTemplate';

test('renders visit GitHub profile', () => {
    render(<CardTemplate />)
    expect(screen.getByText(/Visit GitHub Profile/)).toBeInTheDocument()
});

test('renders Stargazers count', () => {
    render(<CardTemplate />)
    expect(screen.getByText(/Stargazers count/)).toBeInTheDocument()
});