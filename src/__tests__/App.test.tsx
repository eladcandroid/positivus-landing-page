import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /todo list/i })).toBeInTheDocument();
  });

  it('renders TodoList component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('allows full todo workflow through the app', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Integration test todo{enter}');
    
    expect(screen.getByText('Integration test todo')).toBeInTheDocument();
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    await user.click(deleteButton);
    
    expect(screen.queryByText('Integration test todo')).not.toBeInTheDocument();
  });

  it('maintains app structure with correct CSS classes', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
    expect(container.querySelector('.todo-list')).toBeInTheDocument();
  });
});