import { lazyLoad } from '../../config/loadable';

export const PageNotFound = lazyLoad(
  () => import('./index'),
  (module) => module.NotFound
);
