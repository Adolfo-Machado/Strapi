
const injectReducer = require('./utils/injectReducer').default;
const injectSaga = require('./utils/injectSaga').default;
const useInjectReducer = require('./utils/injectReducer').useInjectReducer;
const useInjectSaga = require('./utils/injectSaga').useInjectSaga;
const { languages } = require('./i18n');

window.strapi = Object.assign(window.strapi || {}, {
  node: MODE || 'host',
  backendURL: BACKEND_URL === '/' ? window.location.origin : BACKEND_URL,
  languages,
  currentLanguage:
  window.localStorage.getItem('strapi-admin-language') ||
  window.navigator.language ||
  window.navigator.userLanguage ||
  'en',
  injectReducer,
  injectSaga,
  useInjectReducer,
  useInjectSaga,
});

module.exports = {
  'content-manager': require('../../plugins/strapi-plugin-content-manager/admin/src').default,
'content-type-builder': require('../../plugins/strapi-plugin-content-type-builder/admin/src').default,
'documentation': require('../../plugins/strapi-plugin-documentation/admin/src').default,
'email': require('../../plugins/strapi-plugin-email/admin/src').default,
'entity-relationship-chart': require('../../plugins/strapi-plugin-entity-relationship-chart/admin/src').default,
'graphql': require('../../plugins/strapi-plugin-graphql/admin/src').default,
'i18n': require('../../plugins/strapi-plugin-i18n/admin/src').default,
'upload': require('../../plugins/strapi-plugin-upload/admin/src').default,
'users-permissions': require('../../plugins/strapi-plugin-users-permissions/admin/src').default,
  
}
  