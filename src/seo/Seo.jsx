import { Helmet } from "react-helmet";

export default function Seo({
  title = "VikupAuto39 — выкуп авто в Калининграде",
  description = "Быстрый и честный выкуп авто. Оценка по фото, деньги в день сделки.",
  url = "https://vikupauto39.ru/",
  image = "https://vikupauto39.ru/og-image.jpg",
  noindex = false,
  jsonLd, // объект schema.org
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VikupAuto39" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
