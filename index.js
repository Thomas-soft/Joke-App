function getJoke()
{
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((res) => res.json())
        .then((data) =>
        {
            const { content } = data.data;
            title_card.textContent = content.text_head;
            description_card.textContent = content.text_hidden ? content.text_hidden : content.text;
        })

        .catch((err) => console.log(err))
}

card.addEventListener("click", () =>
{
    getJoke();
});

getJoke();