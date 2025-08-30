import { useLocation, Outlet } from "react-router-dom";
import Seo from "../seo/Seo";
import metaMap, { SITE_ORIGIN } from "../seo/metaMap";

export default function AppLayout() {
  const { pathname } = useLocation();
  const meta = metaMap[pathname] || metaMap["/"];

  // базовая визитка schema.org (исправь телефоны/адрес при необходимости)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "VikupAuto39",
    url: `${SITE_ORIGIN}${pathname}`,
    areaServed: "Калининградская область",
    image: meta.image,
    description: meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Калининград",
      addressCountry: "RU",
    },
    telephone: "+7", // подставь ваш номер
  };

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        url={`${SITE_ORIGIN}${pathname}`}
        image={meta.image}
        jsonLd={jsonLd}
      />
      {/* header */}
      <Outlet />
      {/* footer */}
    </>
  );
}
