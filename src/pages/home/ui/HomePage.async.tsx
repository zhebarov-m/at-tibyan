import { lazy } from 'react';

export const HomePageAsync = lazy(async () => await import('./HomePage.tsx'));
