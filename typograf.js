import clipboardy from "clipboardy";
import Typograf from "typograf";

async function runTypograf() {
  try {
    const text = await clipboardy.read();

    if (!text || text.trim() === "") {
      console.log("❌ Буфер обмена пуст.");
      return;
    }

    // Создаем экземпляр Типографа (включаем русский и английский)
    const tp = new Typograf({
      locale: ["ru", "en-US"],
    });

    // Обрабатываем текст
    const formattedText = tp.execute(text);

    await clipboardy.write(formattedText);

    console.log("✅ Готово! Текст в буфере обмена отформатирован локально.");
  } catch (error) {
    console.error("❌ Ошибка:", error.message);
  }
}

// Дожидаемся выполнения
await runTypograf();
