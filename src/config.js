// Central API Configuration for PlanEx PWA
// Backend is hosted on a PHP server (https://api.planexapp.ir)

export const API_BASE_URL = 'https://api.planexapp.ir';

if (typeof window !== 'undefined') {
  window.API_BASE_URL = API_BASE_URL;
}

export default {
  API_BASE_URL
};
