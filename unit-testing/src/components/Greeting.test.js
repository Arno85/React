import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
    test('renders Hello World as a title', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const titleEl = screen.getByText('Hello World', { exact: false });
        expect(titleEl).toBeInTheDocument();
    });

    test('renders "Good to see you" paragraph', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const titleEl = screen.getByText('It\'s good to see you', { exact: false });
        expect(titleEl).toBeInTheDocument();
    });

    test('onClick button renders "Changed" paragraph', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonEl = screen.getByRole('button');
        userEvent.click(buttonEl);

        // Assert
        const titleEl = screen.getByText('Changed', { exact: false });
        expect(titleEl).toBeInTheDocument();
    });

    test('onClick button not renders "Good to see you" paragraph', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonEl = screen.getByRole('button');
        userEvent.click(buttonEl);

        // Assert
        const titleEl = screen.queryByText('It\'s good to see you', { exact: false });
        expect(titleEl).toBeNull();
    });
});

