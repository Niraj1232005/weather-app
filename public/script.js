document.addEventListener("DOMContentLoaded", async () => {

  function setupDropdown(dropdownId, inputId) {
    const dropdown = document.getElementById(dropdownId);
    const selected = dropdown.querySelector(".dropdown-selected");
    const optionsContainer = dropdown.querySelector(".options-list");
    const searchInput = dropdown.querySelector(".dropdown-search");
    const input = document.getElementById(inputId);

    let allOptions = [];

    selected.addEventListener("click", () => {
      dropdown.classList.toggle("active");
      searchInput.focus();
    });

    function renderOptions(list) {
      optionsContainer.innerHTML = "";
      list.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item;

        div.addEventListener("click", () => {
          selected.textContent = item;
          input.value = item;
          dropdown.classList.remove("active");
        });

        optionsContainer.appendChild(div);
      });
    }

    function setOptions(list) {
      allOptions = list;
      renderOptions(list);
    }

    searchInput.addEventListener("input", () => {
      const filtered = allOptions.filter(item =>
        item.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      renderOptions(filtered);
    });

    return { setOptions, selected };
  }

  const countryDD = setupDropdown("countryDropdown", "countryInput");
  const stateDD = setupDropdown("stateDropdown", "stateInput");
  const cityDD = setupDropdown("cityDropdown", "cityInput");

  // 🌍 Countries
  const res = await fetch("https://countriesnow.space/api/v0.1/countries/positions");
  const data = await res.json();
  const countries = data.data.map(c => c.name);
  countryDD.setOptions(countries);

  // 🏙 States
  document.getElementById("countryDropdown")
    .querySelector(".options-list")
    .addEventListener("click", async (e) => {

      const country = e.target.textContent;

      const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ country })
      });

      const data = await res.json();
      stateDD.setOptions(data.data.states.map(s => s.name));
      cityDD.setOptions([]);
    });

  // 🌆 Cities
  document.getElementById("stateDropdown")
    .querySelector(".options-list")
    .addEventListener("click", async (e) => {

      const state = e.target.textContent;
      const country = document.getElementById("countryInput").value;

      const res = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ country, state })
      });

      const data = await res.json();
      cityDD.setOptions(data.data);
    });

  // ❌ Close when clicking outside
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown").forEach(d => {
      if (!d.contains(e.target)) {
        d.classList.remove("active");
      }
    });
  });

});
