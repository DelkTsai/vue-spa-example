/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
import Home from './home';
import Profile from './profile';
import Auth from './auth';

// 设置路由默认状态
const arr = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/home',
  },
];
// 数组合并
export default [...Home, ...Profile, ...Auth, ...arr];

