<<<<<<< HEAD
const SITE = "https://vikupauto39.ru";

const metaMap = {
  "/": {
    title: "Выккуп авто в Калининграде — быстро и честно | VikupAuto39",
    description:
      "Оценка по фото за 5 минут. Прозрачная цена без скрытых комиссий. Осмотр, оформление и выплата в день сделки.",
    image: `${SITE}/images/og/home.jpg`,
  },
  "/about": {
    title: "О нас | VikupAuto39",
    description:
      "Кто мы и как работаем: прозрачный выкуп авто, быстрый осмотр и деньги в день сделки.",
    image: `${SITE}/images/og/about.jpg`,
  },
  "/contacts": {
    title: "Контакты | VikupAuto39",
    description:
      "Свяжитесь с нами для быстрой оценки и выкупа авто в Калининграде и области.",
    image: `${SITE}/images/og/contacts.jpg`,
  },
  "/evaluate": {
    title: "Оценка авто онлайн | VikupAuto39",
    description:
      "Предварительная оценка по фото и описанию за 5 минут. Узнайте цену вашего авто сейчас.",
    image: `${SITE}/images/og/evaluate.jpg`,
  },
  "/services": {
    title: "Услуги | Срочный выкуп авто | VikupAuto39",
    description:
      "Выкуп авто в любом состоянии, в том числе после ДТП, кредитные и залоговые авто.",
    image: `${SITE}/images/og/services.jpg`,
  },
};

export default metaMap;
export const SITE_ORIGIN = SITE;
=======
// seoMeta.js
export const SITE_ORIGIN = "https://vikupauto39.ru";

const img = (slug) => `${SITE_ORIGIN}/images/og/${slug}.jpg`;
const u = (path) => `${SITE_ORIGIN}${path}`;

export const metaMap = {
  "/": {
    title:
      "Выкуп авто в Калининграде — продать машину быстро, скупка машин | VikupAuto39",
    description:
      "Продать машину в Калининграде быстро и безопасно. Скупка машин в любом состоянии: после ДТП, не на ходу. Оценка за 5–15 минут, выезд бесплатно, деньги в день сделки.",
    image: img("home"),
  },

  // УСЛУГИ
  "/uslugi/srochnyj-vykup": {
    title: "Срочный выкуп авто в Калининграде — деньги сразу | VikupAuto39",
    description:
      "Срочный выкуп автомобилей: оценка за 5–15 минут, выезд и оформление бесплатно. Перевод денег в день сделки.",
    image: img("srochniy-vykup"),
    jsonLdExtra: (path) => [
      breadcrumb(path, [
        ["Главная", "/"],
        ["Срочный выкуп авто", "/uslugi/srochnyj-vykup"],
      ]),
      service(
        "Срочный выкуп авто",
        u("/uslugi/srochnyj-vykup"),
        "Срочный выкуп автомобилей в Калининграде, моментальная выплата, выезд бесплатно."
      ),
    ],
  },

  "/uslugi/momentnaya-vyplata": {
    title: "Моментальная выплата за авто — продать машину быстро | VikupAuto39",
    description:
      "Фиксируем цену и выплачиваем деньги сразу после подписания договора. Оценка по фото, бесплатный выезд и оформление.",
    image: img("momentnaya-vyplata"),
    jsonLdExtra: (path) => [
      breadcrumb(path, [
        ["Главная", "/"],
        ["Моментальная выплата", "/uslugi/momentnaya-vyplata"],
      ]),
      service(
        "Моментальная выплата за авто",
        u("/uslugi/momentnaya-vyplata"),
        "Быстрая продажа автомобиля с мгновенной выплатой, юридическое оформление."
      ),
    ],
  },

  "/uslugi/vykup-avto-posle-dtp": {
    title:
      "Выкуп авто после ДТП в Калининграде — скупка битых машин | VikupAuto39",
    description:
      "Скупка битых и аварийных автомобилей. Эвакуация и оформление на нас. Честная цена и выплата в день сделки.",
    image: img("posle-dtp"),
    jsonLdExtra: (path) => [
      breadcrumb(path, [
        ["Главная", "/"],
        ["Выкуп авто после ДТП", "/uslugi/vykup-avto-posle-dtp"],
      ]),
      service(
        "Выкуп авто после ДТП",
        u("/uslugi/vykup-avto-posle-dtp"),
        "Покупаем битые и аварийные машины в Калининграде, эвакуация бесплатно."
      ),
    ],
  },

  // FAQ
  "/faq": {
    title: "FAQ — как продать машину и оформить срочный выкуп | VikupAuto39",
    description:
      "Ответы на вопросы: как проходит срочный выкуп авто, какие документы нужны, когда переводим деньги.",
    image: img("faq"),
    jsonLdExtra: (path) => [
      breadcrumb(path, [
        ["Главная", "/"],
        ["FAQ", "/faq"],
      ]),
      faq([
        [
          "Как быстро я получу деньги?",
          "В день сделки, сразу после подписания договора.",
        ],
        ["Нужен ли осмотр?", "Да, выезд и диагностика бесплатны."],
        [
          "Вы покупаете авто после ДТП?",
          "Да, в любом состоянии, эвакуация на нас.",
        ],
      ]),
    ],
  },
};

// ---------- JSON-LD helpers ----------
const orgId = `${SITE_ORIGIN}/#business`;

export function breadcrumb(currentPath, items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: name,
      item: u(path),
    })),
  };
}

export function service(name, url, description) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    url: url,
    provider: { "@id": orgId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Калининградская область",
    },
    description: description,
  };
}

export function faq(qa) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
>>>>>>> 7274d14 (VikupAuto03112025)
