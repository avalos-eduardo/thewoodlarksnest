export const trackEvent = (eventName, parameters = {}) => {
  if (window.zaraz) {
    window.zaraz.track(eventName, parameters);
  }
};
