// Import Modules
const dashboard = () => import('@/modules/Dashboard');
const users = () => import('@/modules/Users');
const services = () => import('@/modules/Services');

// Export
export default [
  // Dashboard
  {
    path: '/admin/dashboard',
    component: dashboard,
    name: 'admin.dashboard',
    meta: {
      // auth: true,
      breadCrumb: [{ name: 'Dashboard', link: 'admin.dashboard' }],
    },
  },

  // Users
  {
    path: '/admin/users',
    component: users,
    name: 'admin.users',
    meta: {
      // auth: true,
      breadCrumb: [{ name: 'Users', link: 'admin.users' }],
    },
  },

  // Services
  {
    path: '/admin/services',
    component: services,
    name: 'admin.services',
    meta: {
      // auth: true,
      breadCrumb: [{ name: 'Services', link: 'admin.services' }],
    },
  },
];
