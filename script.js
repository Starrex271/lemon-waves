tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#333333",
        accent: "#B00000",
        light: "#D6D4D4",
        hue: "#FFE87A",
      },
    },
  },
};


const toggleBtn = document.getElementById("toggleBtn");
const toggleCircle = document.getElementById("toggleCircle");
const monthlyText = document.getElementById("monthlyText");
const yearlyText = document.getElementById("yearlyText");

toggleBtn.addEventListener("click", function () {
  const isYearly = toggleBtn.getAttribute("aria-checked") !== "true";

  toggleBtn.setAttribute("aria-checked", isYearly);

  toggleCircle.style.transform = isYearly
    ? "translateX(38px)"
    : "translateX(0px)";

  yearlyText.style.color = isYearly ? "#B00000" : "";
  monthlyText.style.color = isYearly ? "" : "#B00000";
});



const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  const isOpening = mobileMenu.classList.contains("hidden");

  mobileMenu.classList.toggle("hidden", !isOpening);
  mobileMenu.classList.toggle("flex", isOpening);

  menuBtn.setAttribute("aria-expanded", String(isOpening));
  menuBtn.setAttribute(
    "aria-label",
    isOpening ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close the menu when a navigation link is clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
  });
});
