import React from 'react';
import { render, screen } from '@testing-library/react';
import InterviewPrepPage from './InterviewPrep';

test('renders Interview Prep Resources', () => {
    render(<InterviewPrepPage />)
    expect(screen.getByText(/Interview Prep Resources/)).toBeInTheDocument()
});

test('renders Top 20 Interview Repositories', () => {
    render(<InterviewPrepPage />)
    expect(screen.getByText(/Top 20 Interview Repositories/)).toBeInTheDocument()
});