<<<<<<< HEAD
// LeadModal.jsx
=======
>>>>>>> 7274d14 (VikupAuto03112025)
import React, { useState, useEffect } from "react";

export default function LeadModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
<<<<<<< HEAD
    car: "", // Марка-модель-год (вместе)
    plate: "", // Госномер
    price: "", // Желаемая стоимость
    message: "", // Доп. комментарий (опционально)
=======
    car: "", // опционально
    price: "",
    message: "",
>>>>>>> 7274d14 (VikupAuto03112025)
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

<<<<<<< HEAD
  // ⚠️ Не храните токен в фронтенде в проде — вынести на сервер/Cloud Function
=======
  // ⚠️ Не храните секреты в клиенте. Сделайте серверный эндпоинт.
>>>>>>> 7274d14 (VikupAuto03112025)
  const TG_BOT_TOKEN = "8496469683:AAFe84f-mNDBbDaF3cvRxjmL5bg6xsn5vXw";
  const TG_CHAT_ID = "8217086110";

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

<<<<<<< HEAD
  // Нормализация и проверки
  const onlyDigits = (s) => (s || "").replace(/[^\d]/g, "");
  const normalizePlate = (s) => (s || "").replace(/\s|-/g, "").toUpperCase(); // убираем пробелы и дефисы

  const isValidPhone = (s) => onlyDigits(s).length >= 10;
  const isValidCar = (s) => {
    // Требуем формат вида "Марка/модель/год" (год 19xx/20xx), но допускаем пробелы вокруг дефисов
    const val = (s || "").trim();
    const re = /^.+\s*-\s*.+\s*-\s*(19|20)\d{2}$/i;
    return re.test(val);
  };
  const isValidPlate = (s) => {
    const p = normalizePlate(s);
    // Лояльная проверка: от 6 до 10 символов (частые форматы РФ: А123АА39 / А123АА799 и т.п.)
    // Можно усилить под ГОСТ: /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/
    return /^[A-ZА-Я0-9]{6,10}$/i.test(p);
  };
  const isValidPrice = (s) => {
    const n = parseInt(onlyDigits(s), 10);
    return Number.isFinite(n) && n > 0; // при желании можно задать минималку, напр. >= 10000
  };

  async function sendToTelegram(payload) {
    const { name, phone, car, plate, price, message } = payload;

    const text = [
      "📩 Новая заявка с сайта",
      `👤 Имя: ${name}`,
      `📱 Телефон: ${phone}`,
      `🚗 Авто (Марка/модель/год): ${car}`,
      `🔢 Госномер: ${normalizePlate(plate)}`,
=======
  const onlyDigits = (s) => (s || "").replace(/\D/g, "");
  const normalizeRuDigits = (s) => {
    let d = onlyDigits(s);
    if (d.startsWith("8")) d = "7" + d.slice(1);
    return d;
  };

  const isValidRuPhone = (s) => {
    const d = normalizeRuDigits(s);
    return d.length === 11 && d[0] === "7";
  };

  const formatRuPhone = (s) => {
    let d = normalizeRuDigits(s);
    if (!d) return "";
    if (d[0] !== "7") return s.trim();
    if (d.length >= 11) {
      const a = d.slice(1, 4);
      const b = d.slice(4, 7);
      const c = d.slice(7, 9);
      const e = d.slice(9, 11);
      return `+7 ${a} ${b}-${c}-${e}`;
    }
    return `+7 ${d.slice(1)}`;
  };

  const onPhoneBlur = () => {
    if (!form.phone) return;
    setForm((s) => ({ ...s, phone: formatRuPhone(s.phone) }));
  };

  const isValidName = (s) => (s || "").trim().length >= 2;
  const isValidPrice = (s) => {
    const n = parseInt(onlyDigits(s), 10);
    return Number.isFinite(n) && n > 0;
  };
  const isValidCarOptional = (s) =>
    (s || "").length === 0 || (s || "").trim().length > 0;

  const vclass = (touched, valid) =>
    touched ? (valid ? "is-valid" : "is-invalid") : "";

  // ✅ валидность формы — управляет disabled у кнопки
  const isFormValid =
    isValidName(form.name) &&
    isValidRuPhone(form.phone) &&
    isValidPrice(form.price) &&
    isValidCarOptional(form.car);

  async function sendToTelegram(payload) {
    const { name, phone, car, price, message } = payload;
    const text = [
      "📩 Новая заявка с сайта",
      `👤 Имя: ${name}`,
      `📱 Телефон: ${formatRuPhone(phone)}`,
      car?.trim() ? `🚗 Авто: ${car.trim()}` : null,
>>>>>>> 7274d14 (VikupAuto03112025)
      `💰 Желаемая стоимость: ${price}`,
      message?.trim() ? `📝 Комментарий: ${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

<<<<<<< HEAD
=======
    // РЕКОМЕНДОВАНО: вместо прямого запроса — отправлять на свой /api/lead
>>>>>>> 7274d14 (VikupAuto03112025)
    const resp = await fetch(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
      }
    );
<<<<<<< HEAD

=======
>>>>>>> 7274d14 (VikupAuto03112025)
    if (!resp.ok) {
      const body = await resp.text();
      throw new Error(`Telegram error ${resp.status}: ${body}`);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

<<<<<<< HEAD
    // Базовые проверки
    if (form.name.trim().length < 2) return setError("Введите имя");
    if (!isValidPhone(form.phone))
      return setError("Введите телефон (не менее 10 цифр)");
    if (!isValidCar(form.car))
      return setError(
        'Укажите авто в формате: "Марка/модель/год" (например: Toyota-Camry-2016)'
      );
    if (!isValidPlate(form.plate))
      return setError(
        "Укажите корректный госномер (6–10 символов, без пробелов)"
      );
    if (!isValidPrice(form.price))
      return setError("Введите желаемую стоимость (число больше 0)");
=======
    // Доп. защита на случай обхода disabled
    if (!isFormValid) {
      return setError("Пожалуйста, заполните обязательные поля корректно.");
    }
>>>>>>> 7274d14 (VikupAuto03112025)

    try {
      setLoading(true);
      await sendToTelegram(form);
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(err.message || "Ошибка отправки. Проверьте токен и chat_id.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      className="lead-modal__backdrop"
      role="dialog"
      aria-modal="true"
      onMouseDown={onBackdropClick}
    >
      <div className="lead-modal__dialog" role="document">
        {!sent ? (
          <>
<<<<<<< HEAD
            <h3 className="lead-modal__title">Оставить заявку</h3>

            <form className="lead-modal__form" onSubmit={onSubmit} noValidate>
              <input
                className="lead-modal__input"
=======
            <div className="lead-modal__header">
              <h3 className="lead-modal__title">Оставить заявку</h3>
              <button
                className="lead-modal__btn lead-modal__close"
                type="button"
                onClick={onClose}
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            <form className="lead-modal__form" onSubmit={onSubmit} noValidate>
              <input
                className={`lead-modal__input ${vclass(
                  form.name.length > 0,
                  isValidName(form.name)
                )}`}
>>>>>>> 7274d14 (VikupAuto03112025)
                name="name"
                placeholder="Ваше имя"
                value={form.name}
                onChange={onChange}
                autoComplete="name"
                required
              />

              <input
<<<<<<< HEAD
                className="lead-modal__input"
                name="phone"
                placeholder="Телефон"
                value={form.phone}
                onChange={onChange}
=======
                className={`lead-modal__input ${vclass(
                  form.phone.length > 0,
                  isValidRuPhone(form.phone)
                )}`}
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={onChange}
                onBlur={onPhoneBlur}
>>>>>>> 7274d14 (VikupAuto03112025)
                autoComplete="tel"
                inputMode="tel"
                required
              />

              <input
<<<<<<< HEAD
                className="lead-modal__input"
                name="car"
                placeholder="Марка/модель/год"
                value={form.car}
                onChange={onChange}
                required
              />

              <input
                className="lead-modal__input"
                name="plate"
                placeholder="Госномер"
                value={form.plate}
                onChange={onChange}
                required
              />

              <input
                className="lead-modal__input"
=======
                className={`lead-modal__input ${vclass(
                  form.car.length > 0,
                  isValidCarOptional(form.car)
                )}`}
                name="car"
                placeholder="Марка/модель/год (необязательно)"
                value={form.car}
                onChange={onChange}
              />

              <input
                className={`lead-modal__input ${vclass(
                  form.price.length > 0,
                  isValidPrice(form.price)
                )}`}
>>>>>>> 7274d14 (VikupAuto03112025)
                name="price"
                placeholder="Желаемая стоимость (₽)"
                value={form.price}
                onChange={onChange}
                inputMode="numeric"
                autoComplete="off"
                required
              />

              <textarea
<<<<<<< HEAD
                className="lead-modal__textarea"
=======
                className={`lead-modal__textarea ${
                  form.message.length > 0 ? "is-valid" : ""
                }`}
>>>>>>> 7274d14 (VikupAuto03112025)
                name="message"
                placeholder="Доп. комментарий (необязательно)"
                value={form.message}
                onChange={onChange}
              />

              {error && <div className="lead-modal__error">{error}</div>}

              <div className="lead-modal__actions">
                <button
                  type="button"
                  className="lead-modal__btn lead-modal__btn--ghost"
                  onClick={onClose}
                  disabled={loading}
                >
                  Отмена
                </button>
                <button
                  className="lead-modal__btn lead-modal__btn--primary"
                  type="submit"
<<<<<<< HEAD
                  disabled={loading}
=======
                  disabled={loading || !isFormValid}
                  aria-disabled={loading || !isFormValid}
>>>>>>> 7274d14 (VikupAuto03112025)
                >
                  {loading ? "Отправка…" : "Отправить"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="lead-modal__success">
            <h3 className="lead-modal__success-title">Спасибо!</h3>
            <p className="lead-modal__success-text">
              Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </p>
            <button
              className="lead-modal__btn lead-modal__btn--primary"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
