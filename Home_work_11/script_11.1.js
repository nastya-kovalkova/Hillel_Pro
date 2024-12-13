function createPythagoreanTable(size) {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.textAlign = "center";

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      cell.style.border = "1px solid black";
      cell.style.padding = "15px";

      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  return table;
}

const container = document.querySelector(".container");
const PythagoreanTable = createPythagoreanTable(10);
container.appendChild(PythagoreanTable);
