// Function to display the clicked value in the input box
function display(value) {
  const textarea = document.getElementById("textarea");
  textarea.value += value;
}

function clr() {
  const textarea = document.getElementById("textarea");
  textarea.value = "";
}

function calculate() {
  const textarea = document.getElementById("textarea");
  const input = textarea.value;

  try {
    const result = eval(input);
    textarea.value = result;
  } catch (error) {
    textarea.value = "Error";
  }
}

const buttons = document.querySelectorAll("input[type='button']");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    if (value === "=") {
      calculate();
    } else {
      display(value);
    }
  });
});

document.getElementById("textarea").addEventListener("input", () => {
  const textarea = document.getElementById("textarea");
  textarea.value = textarea.value.replace(/[^\d()+\-*/.%]/g, "");
});

document.getElementById("textarea").addEventListener("keydown", (event) => {
  if (
    event.key.length === 1 &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.metaKey &&
    !/[0-9()+\-*/.%]/.test(event.key)
  ) {
    event.preventDefault();
  }
});
