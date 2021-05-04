const moduleName = 'iappointment';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`
export default {
  urlBase : urlBase,
  version: moduleVersion,
  categories: `${urlBase}/categories`,
  appointments: `${urlBase}/appointments`,
  appointmentStatuses: `${urlBase}/appointment-statuses`,
}
