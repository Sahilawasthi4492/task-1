// script.js

function showDetails(serviceId) {
  const element = document.getElementById(serviceId);
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}
