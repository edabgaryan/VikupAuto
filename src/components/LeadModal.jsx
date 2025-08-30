// LeadModal.jsx
import React, { useState, useEffect } from "react";

export default function LeadModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "", // Марка-модель-год (вместе)
    plate: "", // Госномер
    price: "", // Желаемая стоимость
    message: "", // Доп. комментарий (опционально)
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ⚠️ Не храните токен в фронтенде в проде — вынести на сервер/Cloud Function
  const TG_BOT_TOKEN = "8496469683:AAFe84f-mNDBbDaF3cvRxjmL5bg6xsn5vXw";
  const TG_CHAT_ID = "8217086110";

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

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
      `💰 Желаемая стоимость: ${price}`,
      message?.trim() ? `📝 Комментарий: ${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const resp = await fetch(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
      }
    );

    if (!resp.ok) {
      const body = await resp.text();
      throw new Error(`Telegram error ${resp.status}: ${body}`);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
            <h3 className="lead-modal__title">Оставить заявку</h3>

            <form className="lead-modal__form" onSubmit={onSubmit} noValidate>
              <input
                className="lead-modal__input"
                name="name"
                placeholder="Ваше имя"
                value={form.name}
                onChange={onChange}
                autoComplete="name"
                required
              />

              <input
                className="lead-modal__input"
                name="phone"
                placeholder="Телефон"
                value={form.phone}
                onChange={onChange}
                autoComplete="tel"
                inputMode="tel"
                required
              />

              <input
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
                name="price"
                placeholder="Желаемая стоимость (₽)"
                value={form.price}
                onChange={onChange}
                inputMode="numeric"
                autoComplete="off"
                required
              />

              <textarea
                className="lead-modal__textarea"
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
                  disabled={loading}
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
