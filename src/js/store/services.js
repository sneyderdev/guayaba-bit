/**
 * Service catalog in localStorage.
 * Initial data: store/initial-data.js (INITIAL_SERVICES).
 */

const SERVICES_STORAGE_KEY = "services";

// ─── Seeding ─────────────────────────────────────────────────────────────────

/**
 * Seeds INITIAL_SERVICES into localStorage when:
 * - the key is missing, or
 * - the stored value is invalid JSON, or
 * - the stored value is an empty array.
 */
const seedServices = () => {
  if (
    typeof INITIAL_SERVICES === "undefined" ||
    !Array.isArray(INITIAL_SERVICES)
  ) {
    console.warn(
      "INITIAL_SERVICES is not defined. Load store/initial-data.js before store/services.js.",
    );

    return;
  }

  const stored = readStoredJson(SERVICES_STORAGE_KEY, []);

  if (!Array.isArray(stored) || stored.length === 0) {
    writeStoredJson(SERVICES_STORAGE_KEY, INITIAL_SERVICES);
  }
};

// ─── Read ─────────────────────────────────────────────────────────────────────

const loadAllServices = () => {
  seedServices();

  return readStoredJson(SERVICES_STORAGE_KEY, []);
};

// ─── Write ────────────────────────────────────────────────────────────────────

const saveAllServices = (services) => {
  writeStoredJson(SERVICES_STORAGE_KEY, services);
};

const addService = (service) => {
  saveAllServices([...loadAllServices(), service]);
};

const deleteServiceById = (id) => {
  saveAllServices(loadAllServices().filter((service) => service.id !== id));
};

const makeNewServiceId = () =>
  `svc_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
