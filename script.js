/* =====================================================
   SETTINGS
===================================================== */

/*
    GANTI kode rahasia di sini.

    Contoh:
    "1209"
    "0708"
    "safri"
    "ourdate"
*/

const SECRET_CODE = "0107";


/* =====================================================
   ELEMENTS
===================================================== */

const loader =
    document.getElementById("loader");

const opening =
    document.getElementById("opening");

const secret =
    document.getElementById("secret");

const mainWebsite =
    document.getElementById("mainWebsite");

const openGift =
    document.getElementById("openGift");

const unlockButton =
    document.getElementById("unlockButton");

const secretCode =
    document.getElementById("secretCode");

const codeMessage =
    document.getElementById("codeMessage");

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

const cake =
    document.getElementById("cake");

const flowerMessage =
    document.getElementById("flowerMessage");

const reasonPopup =
    document.getElementById("reasonPopup");

const reasonText =
    document.getElementById("reasonText");

const closeReason =
    document.getElementById("closeReason");


/* =====================================================
   CREATE STARS
===================================================== */

function createStars() {

    const stars =
        document.getElementById("stars");

    const amount =
        window.innerWidth < 600
            ? 45
            : 75;


    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("span");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.animationDuration =
            (7 + Math.random() * 13) + "s";

        star.style.animationDelay =
            (-Math.random() * 15) + "s";

        star.style.opacity =
            .15 + Math.random() * .7;

        const size =
            1 + Math.random() * 2;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        stars.appendChild(star);

    }

}

createStars();


/* =====================================================
   OPEN GIFT
===================================================== */

openGift.addEventListener("click", () => {

    opening.classList.add("hidden");

    secret.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =====================================================
   SECRET CODE
===================================================== */

function unlockWebsite() {

    const value =
        secretCode.value
            .trim()
            .toLowerCase();


    if (value === SECRET_CODE.toLowerCase()) {

        codeMessage.textContent =
            "Unlocked ♡";


        codeMessage.style.color =
            "#d7a5b4";


        setTimeout(() => {

            secret.classList.add("hidden");

            mainWebsite.classList.remove("hidden");

            document.body.style.overflow = "auto";

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });


            /*
                Browser biasanya hanya mengizinkan
                audio setelah user melakukan interaksi.
            */

        }, 700);


    } else {

        codeMessage.textContent =
            "Hmm... belum tepat. Try again ♡";


        secretCode.animate(

            [
                {
                    transform: "translateX(0)"
                },

                {
                    transform: "translateX(-7px)"
                },

                {
                    transform: "translateX(7px)"
                },

                {
                    transform: "translateX(-5px)"
                },

                {
                    transform: "translateX(0)"
                }

            ],

            {
                duration: 350
            }

        );

    }

}


unlockButton.addEventListener(
    "click",
    unlockWebsite
);


secretCode.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            unlockWebsite();

        }

    }
);


/* =====================================================
   MUSIC
===================================================== */

musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play()
                .then(() => {

                    musicButton.classList.add(
                        "playing"
                    );

                })
                .catch(() => {});

        } else {

            music.pause();

            musicButton.classList.remove(
                "playing"
            );

        }

    }
);


/* =====================================================
   CAKE / CANDLE
===================================================== */

cake.addEventListener(
    "click",
    () => {

        cake.querySelector(
            ".cake"
        ).classList.toggle("off");

        createConfetti();

    }
);


/* =====================================================
   SCROLL BUTTONS
===================================================== */

document
    .querySelectorAll("[data-target]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById(
                        button.dataset.target
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* =====================================================
   REVEAL ON SCROLL
===================================================== */

function revealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },

            {
                threshold: .12
            }

        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


revealElements();


/* =====================================================
   FLOWERS
===================================================== */

document
    .querySelectorAll(".flower")
    .forEach(flower => {

        flower.addEventListener(
            "click",
            () => {

                const message =
                    flower.dataset.flower;

                flowerMessage.textContent =
                    message;

                flowerMessage.classList.add(
                    "show"
                );


                flower.animate(

                    [
                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(1.25)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }

                    ],

                    {
                        duration: 500
                    }

                );

            }
        );

    });


/* =====================================================
   REASONS POPUP
===================================================== */

document
    .querySelectorAll(".reason-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                reasonText.textContent =
                    card.dataset.reason;

                reasonPopup.classList.add(
                    "show"
                );

            }
        );

    });


closeReason.addEventListener(
    "click",
    () => {

        reasonPopup.classList.remove(
            "show"
        );

    }
);


/* =====================================================
   CLICK OUTSIDE POPUP
===================================================== */

document.addEventListener(
    "click",
    event => {

        if (
            reasonPopup.classList.contains("show") &&
            !reasonPopup.contains(event.target) &&
            !event.target.closest(".reason-card")
        ) {

            reasonPopup.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const amount =
        window.innerWidth < 600
            ? 20
            : 35;


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("span");

        confetti.style.position =
            "fixed";

        confetti.style.left =
            "50%";

        confetti.style.top =
            "50%";

        confetti.style.width =
            "5px";

        confetti.style.height =
            "5px";

        confetti.style.borderRadius =
            "50%";

        confetti.style.background =
            i % 2 === 0
                ? "#d7a5b4"
                : "#f5eee7";

        confetti.style.zIndex =
            "999";

        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            80 + Math.random() * 180;


        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        confetti.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(.2)`,
                    opacity: 0
                }

            ],

            {

                duration:
                    900 + Math.random() * 700,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"

            }

        ).onfinish = () => {

            confetti.remove();

        };

    }

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            reasonPopup.classList.remove(
                "show"
            );

        }

    }
);
