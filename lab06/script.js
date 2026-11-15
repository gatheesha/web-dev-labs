const events = [
  { id: 1, name: "First Byte", category: "Icts", duration: 2, fee: 500, available: true, priority: "High" },
  { id: 2, name: "Secont Byte", category: "Icts", duration: 1.5, fee: 300, available: true, priority: "Medium" },
  { id: 3, name: "Third Byte", category: "Icts", duration: 8, fee: 1000, available: true, priority: "High" },
  { id: 4, name: "Last Byte", category: "Icts", duration: 5, fee: 400, available: true, priority: "Low" },
  { id: 5, name: "Even Last Byte", category: "Social", duration: 4, fee: 200, available: true, priority: "Medium" },
  { id: 6, name: "Go brr", category: "Academic", duration: 3, fee: 800, available: false, priority: "Low" }
];

const itemsDiv = document.querySelector("#items");
const form = document.querySelector("#passForm");
const output = document.querySelector("#output");


function renderItems() {
  for (const e of events) {
    const label = document.createElement("label");
    label.className = "checkbox";
    label.textContent = ` ${e.name} (${e.category}, ${e.duration}h, Rs. ${e.fee}, ${e.priority})`;
    if (!e.available) {
      label.textContent += " - UNAVAILABLE";
      label.classList.add("has-text-grey");
    }
    const box = document.createElement("input");
    box.type = "checkbox";
    box.value = e.id;
    label.prepend(box);
    itemsDiv.appendChild(label);
    itemsDiv.appendChild(document.createElement("br"));
  }
}

function getSelected() {
  const selected = [];
  const boxes = document.querySelectorAll("#items input:checked");
  for (const box of boxes) {
    selected.push(events.find(e => e.id == box.value));
  }
  return selected;
}

function getFee(item, position) {
  if (position < 2) {
    return item.fee;
  }
  return item.fee * 0.8;
}

function calculateTotals(selected) {
  let duration = 0;
  let fee = 0;
  for (let i = 0; i < selected.length; i++) {
    duration += selected[i].duration;
    fee += getFee(selected[i], i);
  }
  return { count: selected.length, duration: duration, fee: fee };
}

function updateTotals() {
  const t = calculateTotals(getSelected());
  document.querySelector("#count").textContent = t.count;
  document.querySelector("#duration").textContent = t.duration;
  document.querySelector("#fee").textContent = t.fee;
}

function showError(id, message, field) {
  document.querySelector("#" + id + "Error").textContent = message;
  if (field) {
    field.classList.add("is-danger");
  }
}

function clearErrors() {
  for (const p of document.querySelectorAll(".help")) {
    p.textContent = "";
  }
  for (const f of document.querySelectorAll(".is-danger")) {
    f.classList.remove("is-danger");
  }
}

function validateForm() {
  clearErrors();
  const name = document.querySelector("#name");
  const index = document.querySelector("#index");
  const email = document.querySelector("#email");
  const programme = document.querySelector("#programme");
  const year = document.querySelector("#year");
  const notes = document.querySelector("#notes");
  const selected = getSelected();
  const bad = [];

  if (name.value.trim() === "" || /^\d+$/.test(name.value.trim())) {
    showError("name", "Enter a valid name (not empty or only numbers)", name);
    bad.push(name);
  }
  if (!/^[A-Za-z]{3}\d{5}$/.test(index.value.trim())) {
    showError("index", "Index must be 3 letters + 5 digits, e.g. ICT12345", index);
    bad.push(index);
  }
  if (!/^\S+@(\w+\.)*sjp\.ac\.lk$/.test(email.value.trim())) {
    showError("email", "Enter a valid university email (@sjp.ac.lk)", email);
    bad.push(email);
  }
  if (programme.value === "") {
    showError("programme", "Select a programme", programme.parentElement);
    bad.push(programme);
  }
  if (year.value === "") {
    showError("year", "Select an academic year", year.parentElement);
    bad.push(year);
  }
  if (notes.value.trim() === "") {
    showError("notes", "Notes cannot be empty", notes);
    bad.push(notes);
  }
  if (selected.length === 0) {
    showError("items", "Select at least one event");
    bad.push(itemsDiv.querySelector("input"));
  } else {
    for (const s of selected) {
      if (!s.available) {
        showError("items", s.name + " is unavailable, please remove it");
        bad.push(itemsDiv.querySelector("input"));
        break;
      }
    }
  }

  if (bad.length > 0) {
    bad[0].focus();
    return false;
  }
  return true;
}


function buildTable() {
  const selected = getSelected();
  output.textContent = "";
  if (selected.length === 0) {
    return;
  }

  const table = document.createElement("table");
  table.className = "table";
  table.innerHTML = "<tr><th>Event</th><th>Category</th><th>Duration</th><th>Fee</th><th></th></tr>";

  for (let i = 0; i < selected.length; i++) {
    const tr = document.createElement("tr");
    const cells = [selected[i].name, selected[i].category, selected[i].duration + " h", "Rs. " + getFee(selected[i], i)];
    for (const c of cells) {
      const td = document.createElement("td");
      td.textContent = c;
      tr.appendChild(td);
    }
    const td = document.createElement("td");
    const btn = document.createElement("button");
    btn.className = "button is-small is-danger";
    btn.textContent = "Remove";
    btn.addEventListener("click", function () {
      document.querySelector(`#items input[value="${selected[i].id}"]`).checked = false;
      updateTotals();
      buildTable();
    });
    td.appendChild(btn);
    tr.appendChild(td);
    table.appendChild(tr);
  }

  const t = calculateTotals(selected);
  const total = document.createElement("p");
  total.textContent = `Total: ${t.count} events, ${t.duration} h, Rs. ${t.fee}`;

  const ref = "S1-" + document.querySelector("#index").value.trim().slice(-4) + "-" + t.count + "-" + new Date().toLocaleTimeString();
  const msg = document.createElement("p");
  msg.className = "notification is-success";
  msg.textContent = `Pass confirmed for ${document.querySelector("#name").value.trim()}. Reference: ${ref}`;

  output.appendChild(msg);
  output.appendChild(table);
  output.appendChild(total);
}

function resetApp() {
  form.reset();
  clearErrors();
  output.textContent = "";
  updateTotals();
}

renderItems();
itemsDiv.addEventListener("change", updateTotals);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    buildTable();
  } else {
    output.textContent = "";
  }
});
document.querySelector("#resetBtn").addEventListener("click", resetApp);
