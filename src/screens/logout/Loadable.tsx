import { lazyLoad } from '../../config/loadable';

export const LogoutPage = lazyLoad(
  () => import('./index'),
  (module) => module.Logout
);
