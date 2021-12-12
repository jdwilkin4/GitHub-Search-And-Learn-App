import React from 'react';
import { render, screen } from '@testing-library/react';
import SoftwareCourses from './SoftwareCourses';

test('renders Software Development Courses', () => {
    render(<SoftwareCourses />)
    expect(screen.getByText(/Software Development Courses/)).toBeInTheDocument()
});

test('renders Top 20 Software Development Courses', () => {
    render(<SoftwareCourses />)
    expect(screen.getByText(/Top 20 Software Development Courses/)).toBeInTheDocument()
});