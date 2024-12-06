import { lazyLoad } from '../../config/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  (module) => module.Home
);
