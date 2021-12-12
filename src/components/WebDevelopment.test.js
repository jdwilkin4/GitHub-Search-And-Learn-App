import React from 'react';
import { render, screen } from '@testing-library/react';
import WebDevelopmentPage from './WebDevelopment';

test('renders Web Development Resources', () => {
    render(<WebDevelopmentPage />)
    expect(screen.getByText(/Web Development Resources/)).toBeInTheDocument()
});