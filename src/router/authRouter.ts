const authRouter = [
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/pages/auth/Register.vue')
      }
    ]
  }
];

export default authRouter;
