import { lazy } from 'react';

export const LessonPageAsync = lazy(async () => await import('./LessonPage.tsx'));
