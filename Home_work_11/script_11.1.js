// Створення таблиці Піфагора динамічно
function createPifagorTable(size) {
  // Створюємо елемент таблиці
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.textAlign = "center";

  for (let i = 1; i <= size; i++) {
    // Створюємо рядок таблиці
    const row = document.createElement("tr");

    for (let j = 1; j <= size; j++) {
      // Створюємо клітинку
      const cell = document.createElement("td");
      cell.textContent = i * j; // Значення таблиці Піфагора

      // Додаємо стилі для клітинки
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";

      row.appendChild(cell); // Додаємо клітинку в рядок
    }

    table.appendChild(row); // Додаємо рядок в таблицю
  }

  return table;
}

// Виводимо таблицю на сторінку
const container = document.getElementById("pifagor-table-container");
const pifagorTable = createPifagorTable(10);
container.appendChild(pifagorTable);
