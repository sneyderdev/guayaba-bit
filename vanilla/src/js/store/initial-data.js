/**
 * Initial catalog (read-only). Copied into localStorage the first time
 * the app opens and the storage key doesn't exist yet.
 *
 * Edit this file to change the seed data; no other code needs to change
 */
const INITIAL_SERVICES = [
  {
    id: "svc_init_consultoria",
    title: "Servicio de consultoría",
    shortDescription:
      "Asesoría estratégica para alinear procesos, metas y recursos con visión clara de negocio.",
    longDescription:
      "Trabajamos en talleres con tu equipo para mapear situación actual, riesgos y oportunidades. Entregamos un plan priorizado con hitos, responsables e indicadores simples de seguimiento.",
    category: "Consultoría",
    priceLabel: "Desde $ 9.800.000 COP",
    image: "https://picsum.photos/seed/consultoria/800/500",
  },
  {
    id: "svc_init_web",
    title: "Desarrollo web",
    shortDescription:
      "Sitios y aplicaciones web rápidas, accesibles y fáciles de mantener.",
    longDescription:
      "Desde landing pages hasta paneles internos: definimos alcance, diseño responsive, validación de formularios y buenas prácticas de SEO básico. Documentación breve para que tu equipo pueda evolucionar el producto.",
    category: "Desarrollo",
    priceLabel: "Desde $ 18.500.000 COP",
    image: "https://picsum.photos/seed/webdev/800/500",
  },
  {
    id: "svc_init_marketing",
    title: "Marketing digital",
    shortDescription:
      "Contenido y campañas alineados con tu público para dar visibilidad medible.",
    longDescription:
      "Auditamos canales actuales, proponemos calendario editorial y piezas clave, y configuramos métricas mínimas (conversiones, clics, formularios) para iterar con datos.",
    category: "Marketing",
    priceLabel: "Desde $ 3.600.000 COP / mes",
    image: "https://picsum.photos/seed/marketing/800/500",
  },
  {
    id: "svc_init_nube",
    title: "Migración a la nube",
    shortDescription:
      "Plan y ejecución para mover cargas de trabajo con mínima interrupción.",
    longDescription:
      "Inventario de sistemas, estimación de costos, diseño de red y copias de seguridad. Acompañamos el traslado por fases con pruebas y plan de rollback.",
    category: "Nube",
    priceLabel: "Desde $ 32.000.000 COP",
    image: "https://picsum.photos/seed/cloudmigration/800/500",
  },
  {
    id: "svc_init_seguridad",
    title: "Auditoría de seguridad",
    shortDescription:
      "Revisión de configuración, accesos y buenas prácticas para reducir riesgos.",
    longDescription:
      "Combinamos revisión manual y listas de verificación sobre identidad, endpoints y exposición en Internet. Recibes informe priorizado y remedios rápidos primero.",
    category: "Seguridad",
    priceLabel: "Desde $ 12.800.000 COP",
    image: "https://picsum.photos/seed/security/800/500",
  },
  {
    id: "svc_init_soporte",
    title: "Soporte TI gestionado",
    shortDescription:
      "Mesa de ayuda con tiempos de respuesta acordados y seguimiento de incidencias.",
    longDescription:
      "Canal único de tickets, clasificación por urgencia, inventario básico de equipos y coordinación con proveedores externos cuando haga falta.",
    category: "Soporte",
    priceLabel: "Desde $ 2.700.000 COP / mes",
    image: "https://picsum.photos/seed/itsupport/800/500",
  },
  {
    id: "svc_init_datos",
    title: "Informes y datos",
    shortDescription:
      "Cuadros de mando y consultas para decisiones basadas en datos confiables.",
    longDescription:
      "Conectamos fuentes habituales (hojas de cálculo, bases SQL exportables), definimos indicadores claros y publicamos vistas que no dependan de una sola persona.",
    category: "Datos",
    priceLabel: "Desde $ 21.500.000 COP",
    image: "https://picsum.photos/seed/analytics/800/500",
  },
  {
    id: "svc_init_integraciones",
    title: "Integraciones entre sistemas",
    shortDescription:
      "Enlace entre CRM, ERP y otras herramientas sin copiar y pegar a mano.",
    longDescription:
      "Definimos contratos de datos, reintentos ante fallos y logs mínimos para saber qué falló. Evitamos acoplamientos frágiles a un solo formato de archivo.",
    category: "Integraciones",
    priceLabel: "Desde $ 14.900.000 COP",
    image: "https://picsum.photos/seed/integrations/800/500",
  },
];
