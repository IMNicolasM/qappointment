export default {
  appointmentCustomerShow: {
    permission: 'iappointment.appointments.customer-show',
    activated: true,
    authenticated: true,
    path: '/appointments/customer/:id',
    name: 'qappointment.panel.appointments.index',
    page: () => import('@imagina/qappointment/_pages/panel/appointmentCustomerShow'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iappointment.cms.sidebar.panelAppointments',
    icon: 'fas fa-clipboard-check',
    subHeader: {
      refresh: true,
    }
  },
  appointmentAssignedIndex: {
    permission: 'iappointment.appointments.assigned-index',
    activated: true,
    authenticated: true,
    path: '/appointments/assigned/index',
    name: 'qappointment.panel.appointments.assigned.index',
    page: () => import('@imagina/qappointment/_pages/panel/appointmentAssignedIndex'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'isite.cms.label.chat',
    icon: 'fas fa-comments',
    subHeader: {
      refresh: true,
    }
  }
}
