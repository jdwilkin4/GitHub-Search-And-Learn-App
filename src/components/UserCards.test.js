import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCards from './UserCards';

test('renders Total search results', () => {
    render(<UserCards />)
    expect(screen.getByText(/Total search results/)).toBeInTheDocument()
});

