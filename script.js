const card = document.querySelector(".card");
const glow = document.querySelector(".card-glow");

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("loginBtn");
const status = document.getElementById("status");
const scanLine = document.querySelector(".scan-line");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    const rotateY = ((x / rect.width) - 0.5) * 16;
    const rotateX = ((y / rect.height) - 0.5) * -16;

    card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});



button.addEventListener("click", () => {

    if(button.disabled) return;

    const user = username.value.trim();
    const pass = password.value.trim();

    button.disabled = true;
    button.textContent = "AUTHENTICATING...";

    status.className = "";
    status.textContent = "";

    scanLine.style.animationDuration = ".5s";

    setTimeout(() => {

        if(user === "beyondcode" && pass === "omega123"){

            status.textContent = "ACCESS GRANTED";
            status.classList.add("success");

            button.textContent = "WELCOME";

            card.style.boxShadow =
            "0 0 80px rgba(0,255,136,.7)";

        }else{

            status.textContent = "ACCESS DENIED";
            status.classList.add("error");

            card.classList.add("shake");

            button.textContent = "TRY AGAIN";

            setTimeout(()=>{
                card.classList.remove("shake");
            },400);

            setTimeout(()=>{
                button.textContent="ENTER TERMINAL";
                button.disabled=false;
            },1000);

        }

        scanLine.style.animationDuration = "4s";

    },2000);

});