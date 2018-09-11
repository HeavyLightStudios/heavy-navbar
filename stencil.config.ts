import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'heavynavbar',
  globalStyle: 'src/globals/global.css',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
