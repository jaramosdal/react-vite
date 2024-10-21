import { EVENTS, BUTTONS } from "./consts";

export function navigate(href) {
  // Cambia la url en el navegador sin navegar al sitio
  window.history.pushState({}, "", href);

  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainClick = event.button === BUTTONS.primary; // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageable = target === undefined || target === "self";

    // Navegación SPA
    if (isMainClick && isManageable && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
