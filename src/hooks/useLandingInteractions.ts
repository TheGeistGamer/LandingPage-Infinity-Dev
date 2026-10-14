import { useEffect } from 'react';
import { initLandingInteractions } from '../scripts/landingInteractions';

export const useLandingInteractions = () => {
  useEffect(initLandingInteractions, []);
};
