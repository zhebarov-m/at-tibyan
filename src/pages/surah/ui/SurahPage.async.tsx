import { lazy } from 'react';

export const SurahPageAsync = lazy(async () => await import('./SurahPage.tsx'));
