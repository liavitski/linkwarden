import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import MobileMenu from './MobileMenu';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a {...props}>{children}</a>,
}));

describe('MobileMenu', () => {
  it('renders a dialog with an accessible close button', () => {
    render(<MobileMenu isOpen onDismiss={() => {}} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Close menu' })
    ).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<MobileMenu isOpen onDismiss={() => {}} />);

    for (const label of ['Features', 'Pricing', 'FAQs', 'Docs', 'Blog']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    }
  });

  it('calls onDismiss when the close button is clicked', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<MobileMenu isOpen onDismiss={onDismiss} />);

    await user.click(screen.getByRole('button', { name: 'Close menu' }));

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
