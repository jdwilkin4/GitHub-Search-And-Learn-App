import React from 'react';
import { render, screen } from '@testing-library/react';
import ComputerSciencePage from './ComputerScience';

test('Computer Science Resources', () => {
    render(<ComputerSciencePage />)
    expect(screen.getByText(/Computer Science Resources/)).toBeInTheDocument()
});

test('renders Top 20 Computer Science Repositories', () => {
    render(<ComputerSciencePage />)
    expect(screen.getByText(/Top 20 Computer Science Repositories/)).toBeInTheDocument()
});

