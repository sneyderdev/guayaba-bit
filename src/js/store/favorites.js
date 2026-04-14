
const FAVORITES_STORAGE_KEY = "favorites";

const loadFavoriteIds = () =>
  readStoredJson(FAVORITES_STORAGE_KEY, []);

const saveFavoriteIds = (ids) =>
  writeStoredJson(FAVORITES_STORAGE_KEY, ids);

const isFavorite = (id) =>
  loadFavoriteIds().includes(id);

const addFavorite = (id) => {
  if (!isFavorite(id)) saveFavoriteIds([...loadFavoriteIds(), id]);
};

const removeFavorite = (id) =>
  saveFavoriteIds(loadFavoriteIds().filter((fid) => fid !== id));

const toggleFavorite = (id) => {
  if (isFavorite(id)) { removeFavorite(id); return false; }
  addFavorite(id); return true;
};

const loadFavoriteServices = () => {
  const ids = loadFavoriteIds();
  return loadAllServices().filter((s) => ids.includes(s.id));
};

const updateFavoriteButton = (btn, serviceId) => {
  const active = isFavorite(serviceId);
  btn.setAttribute("aria-pressed", active);
  btn.title = active ? "Quitar de favoritos" : "Agregar a favoritos";
  btn.innerHTML = active
    ? '<i class="ti ti-heart-filled text-lg"></i><span>En favoritos</span>'  
    : '<i class="ti ti-heart text-lg"></i><span>Agregar a favoritos</span>'; 
  btn.classList.toggle("text-red-500", active);
  btn.classList.toggle("text-slate-400", !active);
};

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".favorite-btn");
  if (!btn) return;

  const serviceId = btn.dataset.serviceId;
  toggleFavorite(serviceId);

  if (typeof renderFavorites === "function") {
    renderFavorites();
  } else {
    updateFavoriteButton(btn, serviceId);
  }
});
