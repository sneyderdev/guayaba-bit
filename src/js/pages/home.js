/**
 * Home page: renders up to 3 featured services from loadAllServices()
 * Requires jQuery (loaded in home.html).
 */

const buildFeaturedCard = (service) => {
  const detailHref = `services/detail.html?id=${encodeURIComponent(service.id)}`;
  const imgHtml = service.image
    ? `<div class="aspect-[16/10] bg-slate-100 overflow-hidden">
        <img src="${service.image}" alt="" class="w-full h-full object-cover" loading="lazy" />
      </div>`
    : "";
  const price =
    service.priceLabel != null && String(service.priceLabel).trim() !== ""
      ? `<p class="text-sm font-medium text-slate-800">${service.priceLabel}</p>`
      : "";

  return `
    <article class="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col h-full">
      ${imgHtml}
      <div class="p-5 flex flex-col gap-3 flex-1">
        <p class="text-xs font-semibold uppercase tracking-wide text-emerald-600">${service.category}</p>
        <h3 class="text-lg font-bold text-slate-900">${service.title}</h3>
        <p class="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">${service.shortDescription}</p>
        ${price}
        <div class="pt-1">
          <a href="${detailHref}" class="inline-flex justify-center w-full px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">Ver más</a>
        </div>
      </div>
    </article>`;
};

$(function () {
  const $grid = $("#featured-grid");
  if (!$grid.length) return;

  const featured = loadAllServices().slice(0, 3);

  if (featured.length === 0) {
    $grid.html(
      '<p class="text-slate-600 col-span-full text-center">No hay servicios en el catálogo.</p>',
    );

    return;
  }

  $grid.html(featured.map(buildFeaturedCard).join(""));
});
