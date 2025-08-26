import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoItem } from '../TodoItem';

describe('TodoItem', () => {
  const defaultProps = {
    id: '1',
    text: 'Test todo',
    completed: false,
    onToggle: vi.fn(),
    onDelete: vi.fn(),
  };

  it('renders todo text', () => {
    render(<TodoItem {...defaultProps} />);
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  it('renders checkbox unchecked when not completed', () => {
    render(<TodoItem {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders checkbox checked when completed', () => {
    render(<TodoItem {...defaultProps} completed={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('applies line-through style when completed', () => {
    render(<TodoItem {...defaultProps} completed={true} />);
    const textSpan = screen.getByText('Test todo');
    expect(textSpan).toHaveStyle({ textDecoration: 'line-through' });
  });

  it('does not apply line-through style when not completed', () => {
    render(<TodoItem {...defaultProps} />);
    const textSpan = screen.getByText('Test todo');
    expect(textSpan).toHaveStyle({ textDecoration: 'none' });
  });

  it('calls onToggle when checkbox is clicked', async () => {
    const user = userEvent.setup();
    const onToggleMock = vi.fn();
    render(<TodoItem {...defaultProps} onToggle={onToggleMock} />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(onToggleMock).toHaveBeenCalledWith('1');
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    const onDeleteMock = vi.fn();
    render(<TodoItem {...defaultProps} onDelete={onDeleteMock} />);
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    await user.click(deleteButton);
    
    expect(onDeleteMock).toHaveBeenCalledWith('1');
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it('renders delete button', () => {
    render(<TodoItem {...defaultProps} />);
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('handles empty text gracefully', () => {
    render(<TodoItem {...defaultProps} text="" />);
    const todoItem = screen.getByRole('checkbox').closest('.todo-item');
    const textSpan = todoItem?.querySelector('span');
    expect(textSpan).toBeInTheDocument();
    expect(textSpan).toHaveTextContent('');
  });

  it('handles long text content', () => {
    const longText = 'This is a very long todo item that might wrap to multiple lines and should still be handled correctly by the component';
    render(<TodoItem {...defaultProps} text={longText} />);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it('handles special characters in text', () => {
    const specialText = 'Todo with special chars: <>&"\'@#$%';
    render(<TodoItem {...defaultProps} text={specialText} />);
    expect(screen.getByText(specialText)).toBeInTheDocument();
  });
});