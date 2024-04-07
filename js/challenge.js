document.addEventListener("DOMContentLoaded", () => {
    // Counter functionality
    const counterDisplay = document.getElementById("counter");
    let count = 0;
    let intervalId = setInterval(incrementCounter, 1000);

    function incrementCounter() {
        count++;
        counterDisplay.textContent = count;
    }

    // Plus and minus button functionality
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");

    plusButton.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });

    minusButton.addEventListener("click", () => {
        count--;
        counterDisplay.textContent = count;
    });

    // Like functionality
    const likeButton = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
    const likesMap = new Map();

    likeButton.addEventListener("click", () => {
        if (likesMap.has(count)) {
            const likeItem = likesMap.get(count);
            likeItem.count++;
            likeItem.element.textContent = `${likeItem.count} Likes`;
        } else {
            const likeItem = document.createElement("li");
            likeItem.textContent = `${count} has 1 Like`;
            likesList.appendChild(likeItem);
            likesMap.set(count, { count: 1, element: likeItem });
        }
    });

    // Pause and Resume functionality
    const pauseButton = document.getElementById("pause");
    const buttonsToDisable = [plusButton, minusButton, likeButton];

    pauseButton.addEventListener("click", () => {
        if (pauseButton.textContent === "pause") {
            clearInterval(intervalId);
            buttonsToDisable.forEach(button => {
                button.disabled = true;
            });
            pauseButton.textContent = "resume";
        } else {
            intervalId = setInterval(incrementCounter, 1000);
            buttonsToDisable.forEach(button => {
                button.disabled = false;
            });
            pauseButton.textContent = "pause";
        }
    });

    // Comment functionality
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("list");

    commentForm.addEventListener("submit", event => {
        event.preventDefault();
        const commentInput = document.getElementById("comment-input");
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const commentItem = document.createElement("li");
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = "";
        }
    });
});
