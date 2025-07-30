import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest'; // ✅ Vitest mock function
import ContactForm from './ContactForm';

// ✅ Mock the global fetch function using Vitest
global.fetch = vi.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    fetch.mockClear(); // Clear mock before each test
  });

  test('renders form fields and button', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });

  test('shows success message on valid submission', async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'Tiji' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'tiji@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), {
      target: { value: 'Hello, this is a test.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() => {
      expect(screen.getByText('Contact message sent successfully!')).toBeInTheDocument();
    });
  });

  test('shows failure message on server error', async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'Tiji' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'tiji@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Message'), {
      target: { value: 'Testing error response.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() => {
      expect(screen.getByText('Failed to send message.')).toBeInTheDocument();
    });
  });
});
