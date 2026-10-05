import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders its children as a button', () => {
    render(
      <Button variant="ghost" size="medium">
        Login
      </Button>
    );

    expect(
      screen.getByRole('button', { name: 'Login' })
    ).toBeInTheDocument();
  });

  it.each(['fill', 'outline', 'ghost'] as const)(
    'renders the %s variant without errors',
    (variant) => {
      const { container } = render(
        <Button variant={variant} size="small">
          Go
        </Button>
      );

      expect(container.querySelector('button')).toBeInTheDocument();
    }
  );

  it('applies the size design tokens as CSS custom properties', () => {
    render(
      <Button variant="ghost" size="large">
        Login
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button.style.getPropertyValue('--fontSize')).toBe('1.5rem');
    expect(button.style.getPropertyValue('--padding')).toBe('10px 30px');
    expect(button.style.getPropertyValue('--borderRadius')).toBe('32px');
  });
});
