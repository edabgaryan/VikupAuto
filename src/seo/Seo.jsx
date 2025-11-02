import { Helmet } from "react-helmet";

<<<<<<< HEAD
export default function Seo({
  title = "VikupAuto39 — выкуп авто в Калининграде",
  description = "Быстрый и честный выкуп авто. Оценка по фото, деньги в день сделки.",
  url = "https://vikupauto39.ru/",
  image = "https://vikupauto39.ru/og-image.jpg",
  noindex = false,
  jsonLd, // объект schema.org
}) {
=======
function canonicalize(url) {
  try {
    const u = new URL(url);
    u.search = "";
    u.hash = "";
    return u.toString().replace(/\/$/, ""); // без завершающего слеша
  } catch {
    return url;
  }
}

export default function Seo({
  title = "Выкуп авто в Калининграде — срочный выкуп машин | VikupAuto39",
  description = "Срочный выкуп авто в Калининграде и области. Оценка за 5–15 минут, выезд и диагностика бесплатно. Деньги в день сделки.",
  url = "https://vikupauto39.ru/",
  image = "https://vikupauto39.ru/og-image.jpg",
  ogType = "website",
  noindex = false,
  jsonLdExtra = [], // массив доп. JSON-LD блоков (крошки, страница, услуги и т.д.)
}) {
  const canonical = canonicalize(url);
  const robots = noindex ? "noindex,nofollow" : "index,follow";

  // Базовый LocalBusiness + WebSite, всегда на странице
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": "https://vikupauto39.ru/#business",
    name: "VikupAuto39",
    url: "https://vikupauto39.ru/",
    description:
      "Срочный выкуп автомобилей в Калининграде и области. Любое состояние, онлайн-оценка, выезд бесплатно.",
    image: "https://vikupauto39.ru/og-image.jpg",
    telephone: "+7-996-984-01-62",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Калининград",
      addressRegion: "Калининградская область",
      addressCountry: "RU",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Калининградская область",
    },
    openingHours: "Mo-Su 09:00-21:00",
    priceRange: "₽₽",
    sameAs: ["https://t.me/Vikub_bot"],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://vikupauto39.ru/",
    name: "VikupAuto39",
    inLanguage: "ru-RU",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://vikupauto39.ru/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const allJsonLd = [localBusiness, webSite, ...jsonLdExtra];

>>>>>>> 7274d14 (VikupAuto03112025)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VikupAuto39" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
=======
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="VikupAuto39" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
>>>>>>> 7274d14 (VikupAuto03112025)
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

<<<<<<< HEAD
      <link rel="canonical" href={url} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
=======
      <link rel="canonical" href={canonical} />

      <script type="application/ld+json">{JSON.stringify(allJsonLd)}</script>
>>>>>>> 7274d14 (VikupAuto03112025)
    </Helmet>
  );
}
