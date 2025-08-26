import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from '../TodoList';

describe('TodoList', () => {
  it('renders todo list heading', () => {
    render(<TodoList />);
    expect(screen.getByRole('heading', { name: /todo list/i })).toBeInTheDocument();
  });

  it('renders input field for new todos', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
  });

  it('renders add button', () => {
    render(<TodoList />);
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('starts with empty todo list', () => {
    render(<TodoList />);
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });


  it('adds a new todo when add button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.type(input, 'New todo item');
    await user.click(addButton);
    
    expect(screen.getByText('New todo item')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('adds a new todo when Enter key is pressed', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Todo via Enter{enter}');
    
    expect(screen.getByText('Todo via Enter')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('does not add empty todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.click(addButton);
    
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('does not add todos with only whitespace', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.type(input, '   ');
    await user.click(addButton);
    
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('trims whitespace from new todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.type(input, '  Todo with spaces  ');
    await user.click(addButton);
    
    expect(screen.getByText('Todo with spaces')).toBeInTheDocument();
    expect(screen.queryByText('  Todo with spaces  ')).not.toBeInTheDocument();
  });

  it('toggles todo completion status', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    await user.type(input, 'Toggle me{enter}');
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('deletes todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    await user.type(input, 'Delete me{enter}');
    
    expect(screen.getByText('Delete me')).toBeInTheDocument();
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    await user.click(deleteButton);
    
    expect(screen.queryByText('Delete me')).not.toBeInTheDocument();
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('handles multiple todos correctly', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'First todo{enter}');
    await user.type(input, 'Second todo{enter}');
    await user.type(input, 'Third todo{enter}');
    
    expect(screen.getByText('First todo')).toBeInTheDocument();
    expect(screen.getByText('Second todo')).toBeInTheDocument();
    expect(screen.getByText('Third todo')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(3);
  });

  it('maintains todo order', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'First{enter}');
    await user.type(input, 'Second{enter}');
    await user.type(input, 'Third{enter}');
    
    const todoTexts = screen.getAllByText(/First|Second|Third/);
    expect(todoTexts[0]).toHaveTextContent('First');
    expect(todoTexts[1]).toHaveTextContent('Second');
    expect(todoTexts[2]).toHaveTextContent('Third');
  });

  it('generates unique IDs for todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Todo 1{enter}');
    await user.type(input, 'Todo 2{enter}');
    
    const checkboxes = screen.getAllByRole('checkbox');
    const firstCheckbox = checkboxes[0];
    const secondCheckbox = checkboxes[1];
    
    await user.click(firstCheckbox);
    
    expect(firstCheckbox).toBeChecked();
    expect(secondCheckbox).not.toBeChecked();
  });

  it('preserves other todos when deleting one', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Keep me{enter}');
    await user.type(input, 'Delete me{enter}');
    await user.type(input, 'Keep me too{enter}');
    
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    await user.click(deleteButtons[1]);
    
    expect(screen.getByText('Keep me')).toBeInTheDocument();
    expect(screen.getByText('Keep me too')).toBeInTheDocument();
    expect(screen.queryByText('Delete me')).not.toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });

  it('preserves completion status when other todos are modified', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Todo 1{enter}');
    await user.type(input, 'Todo 2{enter}');
    
    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    
    expect(checkboxes[0]).toBeChecked();
    
    await user.type(input, 'Todo 3{enter}');
    
    const updatedCheckboxes = screen.getAllByRole('checkbox');
    expect(updatedCheckboxes[0]).toBeChecked();
    expect(updatedCheckboxes[1]).not.toBeChecked();
    expect(updatedCheckboxes[2]).not.toBeChecked();
  });
});