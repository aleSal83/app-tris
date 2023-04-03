import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeAnimation = trigger('inOutAnimation', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [
    style({ opacity: '0' }),
    animate('.5s ease-out', style({ opacity: '1' })),
  ]),
  transition(':leave', [
    style({ opacity: '1' }),
    animate('.5s ease-out', style({ opacity: '0' })),
  ]),
]);

export const slideAnimation = trigger('slideAnimation', [
  state('in', style({ transform: 'translateY(0)' })),
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('.5s ease-out', style({ transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)' }),
    animate('.5s ease-out', style({ transform: 'translateY(100%)' })),
  ]),
]);
