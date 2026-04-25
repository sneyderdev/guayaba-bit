/**
 * Small helpers for JSON in localStorage.
 */

const readStoredJson = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key);

    if (raw === null) return fallback;

    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Could not read JSON for key "${key}"`, error);

    return fallback;
  }
};

const writeStoredJson = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
