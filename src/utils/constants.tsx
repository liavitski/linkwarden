import { title } from 'process';

import type { Variant } from '@/components/PlanCard';
import { m } from 'motion/react';

export const APP_TITLE = 'Linkwarden';

export const DARK_COLORS = {
  '--color-text': '#FAFAFA',
  '--color-text-secondary': '#C0C0C0',
  '--color-text-hover': '#E5E7EB',
  '--color-background': '#0F1115',
  '--color-button-ghost-border': '#828282',
  '--color-button-ghost-border-darker': '#616161',

  '--color-plan-buttons-border': '#43484B',
  '--color-plan-buttons-tag-bg': '#F10000',
  '--color-plan-button-active': '#4A46FC',
  '--color-plan-subheading': '#79C5FC',
};

export const DARK_SHADOWS = {
  '--shadow-card': 'none',
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

type CardData = {
  subtitle: string;
  features: string[];
  variant: Variant;
};

export const CARDS_DATA: CardData[] = [
  {
    subtitle: 'Self-Hosted',
    features: [
      'Hosted by yourself.',
      'Unlimited Links.',
      'Unlimited Collections.',
      'Unlimited Tags.',
      'All the premium features.',
    ],
    variant: 'self-hosted',
  },
  {
    subtitle: 'Cloud',
    features: [
      'Hosted by us.',
      'Unlimited Links.',
      'Unlimited Collections.',
      'Unlimited Tags.',
      'All the premium features.',
      'Priority support.',
      'Fully custom instance.',
    ],
    variant: 'cloud',
  },
  {
    subtitle: 'Enterprise',
    features: [
      'Hosted by us.',
      'Unlimited Links.',
      'Unlimited Collections.',
      'Unlimited Tags.',
      'All the premium features.',
      'Priority support.',
      'Fully custom instance.',
    ],
    variant: 'enterprise',
  },
];
