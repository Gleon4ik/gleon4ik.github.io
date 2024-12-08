document.getElementById("copy-discord").addEventListener("click", (event) => {
    event.preventDefault(); // Отменяем стандартное действие ссылки

    const discordTag = "nursultan.tech"; // Твой Discord-тег
    navigator.clipboard.writeText(discordTag).then(() => {
        const notification = document.getElementById("copy-notification");

        // Показать уведомление
        notification.classList.add("show");

        // Скрыть уведомление через 2 секунды
        setTimeout(() => {
            notification.classList.remove("show");
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});
