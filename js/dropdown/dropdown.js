const changePlaceholder = (dropdown) => {
    const input = dropdown.querySelector("input.form-control-secondary");
    const { placeholder } = input;
    input.placeholder = input.dataset.message;
    input.dataset.message = placeholder;
  };
  
  document.addEventListener("click", (e) => {
    const dropdownButton = e.target.matches("[data-dropdown-button]");
    if (!dropdownButton && e.target.closest("[data-dropdown]") !== null) return;
  
    let currentDropdown;
  
    if (dropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
      changePlaceholder(currentDropdown);
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
      changePlaceholder(dropdown);
    });
  });
  
  