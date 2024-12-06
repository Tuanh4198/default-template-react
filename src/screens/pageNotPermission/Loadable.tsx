import { lazyLoad } from '../../config/loadable';

export const PageNotPermission = lazyLoad(
  () => import('./index'),
  (module) => module.NotPermission
);
