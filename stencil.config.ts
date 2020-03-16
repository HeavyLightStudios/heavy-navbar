import {Config} from '@stencil/core';
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'heavynavbar',
  globalStyle: 'src/globals/global.css',
  outputTargets: [
    reactOutputTarget({
      loaderDir: 'dist/loader',
      componentCorePackage: 'heavy-navbar',
      proxiesFile: '../heavy-navbar-react/src/components.ts',
    }),
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  copy: [
    { src: 'images' }
  ]
};
