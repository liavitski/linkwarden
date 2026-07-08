export function getTransitionStyles(isOpen: boolean) {
  return {
    backdropStyles: {
      transition: 'opacity',
      transitionDuration: isOpen ? '1000ms' : '500ms',
      transitionDelay: isOpen ? '0ms' : '100ms',
    },
    modalStyles: {
      transition: 'transform',
      transitionDuration: isOpen ? '400ms' : '250ms',
      transitionDelay: isOpen ? '250ms' : '0ms',
      transitionTimingFunction: isOpen ? 'ease-out' : 'ease-in',
    },
    closeButtonStyles: {
      transition: 'opacity, transform',
      transitionDuration: '250ms',
      transitionDelay: isOpen ? '600ms' : '0ms',
    },
  };
}
