import { lazyLoad } from '../../config/loadable';

export const LoginPage = lazyLoad(
  () => import('./index'),
  (module) => module.LoginRedirect
);
