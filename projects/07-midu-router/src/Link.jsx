import { EVENTS } from "./consts";

export function navigate(href) {
  // Cambia la url en el navegador sin navegar al sitio
  window.history.pushState({}, "", href);

  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}
