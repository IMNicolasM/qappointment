import pages from 'src/config/pages' // Get Pages from config

//Appointment
export default [
  {
    title: 'iappointment.cms.sidebar.adminGroup',
    icon: 'fas fa-clipboard-check',
    children: [
      pages.mainqappointment.appointmentIndex,
      pages.qappointment.appointmentAssignedIndex
    ]
  }
]
