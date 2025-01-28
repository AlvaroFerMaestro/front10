/* import "./Button.css"

export const Button = ({ text, fnc, className }) => {
    const button = document.createElement("button");
    button.classList.add("main-button")
    button.classList.add(className)
    button.textContent = text;
    button.addEventListener("click", fnc)
    return button;
} */

    import "./Button.css";

export const Button = ({ text, fnc, className }) => {
    const button = document.createElement("button");
    button.classList.add("main-button");
    button.classList.add(className);
    button.textContent = text;

    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.style.display = "none";
    button.appendChild(loader);

    button.addEventListener("click", async () => {
        button.disabled = true;
        button.classList.add("loading");
        loader.style.display = "block";

        try {
            await fnc();
        } finally {
            button.disabled = false;
            button.classList.remove("loading");
            loader.style.display = "none";
        }
    });

    return button;
};
