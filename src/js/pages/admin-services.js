/**
 * Admin panel: create and delete services in localStorage.
 * Requires jQuery (loaded in admin/services.html).
 */

const renderAdminList = () => {
  const $list = $("#admin-service-list");
  if (!$list.length) return;

  const services = loadAllServices();

  $("#admin-count").text(
    services.length === 1 ? "1 servicio" : `${services.length} servicios`,
  );

  if (services.length === 0) {
    $list.html(
      '<p class="p-6 text-slate-500 text-sm">No hay servicios. Añade uno con el formulario.</p>',
    );
    return;
  }

  $list.html(
    services
      .map(
        (s) => `
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 hover:bg-slate-50">
      <div class="min-w-0 flex-1">
        <p class="font-semibold text-slate-900 truncate">${s.title}</p>
        <p class="text-xs text-violet-600 font-medium uppercase tracking-wide mt-0.5">${s.category}</p>
        <p class="text-sm text-slate-600 mt-1 line-clamp-2">${s.shortDescription}</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <a href="../services/detail.html?id=${encodeURIComponent(s.id)}" class="text-sm font-medium text-blue-600 hover:text-blue-800">Ver</a>
        <button type="button" class="admin-delete rounded-md border border-red-200 bg-white px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50" data-id="${s.id}">Eliminar</button>
      </div>
    </div>`,
      )
      .join(""),
  );
};

const showSuccessMessage = () => {
  $("#admin-form-message")
    .text("Servicio guardado correctamente.")
    .removeClass("hidden")
    .addClass("text-emerald-700");
};

$(function () {
  renderAdminList();

  $("#f-title").on("input", function () {
    const seed = $(this).val().trim();
    const $image = $("#f-image");
    if (seed) {
      $image.val(
        `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/500`,
      );
    } else {
      $image.val("");
    }
  });

  $("#admin-service-list").on("click", ".admin-delete", function () {
    const id = $(this).data("id");
    if (!id) return;

    const ok = window.confirm(
      "¿Seguro que quieres eliminar este servicio? Esta acción no se puede deshacer.",
    );
    if (!ok) return;

    deleteServiceById(id);
    renderAdminList();
  });

  $("#admin-service-form").on("submit", function (e) {
    e.preventDefault();

    addService({
      id: makeNewServiceId(),
      title: $("#f-title").val().trim(),
      category: $("#f-category").val().trim(),
      shortDescription: $("#f-short").val().trim(),
      longDescription: $("#f-long").val().trim(),
      priceLabel: $("#f-price").val().trim(),
      image: $("#f-image").val().trim(),
    });
    this.reset();
    showSuccessMessage();
    renderAdminList();
  });
});
