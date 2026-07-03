document.getElementById("copy-discord").addEventListener("click", (event) => {
    event.preventDefault(); 

    const discordTag = "nursultan.tech"; 
    navigator.clipboard.writeText(discordTag).then(() => {
        const notification = document.getElementById("copy-notification");

        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.remove("show");
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});
