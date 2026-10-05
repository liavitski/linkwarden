import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import PlanSection from './PlanSection';

describe('PlanSection', () => {
  it('groups the billing toggle and marks the active period', () => {
    render(<PlanSection />);

    const monthly = screen.getByRole('button', { name: 'Monthly' });
    const yearly = screen.getByRole('button', { name: 'Yearly' });

    expect(
      screen.getByRole('group', { name: 'Billing period' })
    ).toBeInTheDocument();
    expect(monthly).toHaveAttribute('aria-pressed', 'true');
    expect(yearly).toHaveAttribute('aria-pressed', 'false');
  });

  it('switches the active period and the cloud price on click', async () => {
    const user = userEvent.setup();
    render(<PlanSection />);

    expect(screen.getByText('$3')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Yearly' }));

    expect(screen.getByRole('button', { name: 'Yearly' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    expect(screen.getByText('$27')).toBeInTheDocument();
  });
});
