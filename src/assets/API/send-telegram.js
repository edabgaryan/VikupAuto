export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  try {
    const { name, phone, message } = req.body || {};
    if (!name || !phone) {
      return res
        .status(400)
        .json({ ok: false, error: "name and phone are required" });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID; // куда слать (ваш личный чат или группа)
    if (!token || !chatId) {
      return res
        .status(500)
        .json({ ok: false, error: "Server is not configured" });
    }

    const text =
      `🆕 Новая заявка\n` +
      `Имя: ${name}\n` +
      `Телефон: ${phone}\n` +
      `Сообщение: ${message?.trim() ? message : "—"}`;

    const tgResp = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    const data = await tgResp.json();
    if (!data.ok) {
      console.error("Telegram error:", data);
      return res
        .status(502)
        .json({ ok: false, error: "Telegram API error", details: data });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ ok: false, error: "Unexpected server error" });
  }
}
