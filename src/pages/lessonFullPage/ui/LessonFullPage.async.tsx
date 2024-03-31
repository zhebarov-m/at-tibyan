import { lazy } from 'react';

export const LessonFullPageAsync = lazy(async () => await import('./LessonFullPage.tsx'));
