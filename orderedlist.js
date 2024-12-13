const items = ["Item 1", "Item 2", "Item 3"];
const ol = document.createElement("ol");

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ol.appendChild(li);
});

document.body.appendChild(ol);
