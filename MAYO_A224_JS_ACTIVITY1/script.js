const btnCount = document.getElementById("btncount");
const count = document.getElementById("count");
let counter = 0;

btnCount.addEventListener("click", () => {counter++;
    count.textContent = countertxt;
    console.log("Button clicked");
}
);


