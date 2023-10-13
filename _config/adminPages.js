export default {
  categories: {
    permission: 'iappointment.categories.manage',
    activated: true,
    authenticated: true,
    path: '/appointment/categories/index',
    name: 'qappointment.admin.categories',
    crud: import('@imagina/qappointment/_crud/categories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iappointment.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    subHeader: {
      refresh: true,
    }
  }
}
