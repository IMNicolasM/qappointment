export default {
  appointmentIndex: {
    permission: 'iappointment.appointments.index',
    activated: true,
    authenticated: true,
    path: '/appointments/index',
    name: 'qappointment.main.appointments.index',
    crud: import('@imagina/qappointment/_crud/appointments'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iappointment.cms.sidebar.panelAppointments',
    icon: 'fas fa-clipboard-check',
    subHeader: {
      refresh: true,
    }
  },
}
