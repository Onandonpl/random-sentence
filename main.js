const btn = document.querySelector(".btn");
const sentence = document.querySelector(".sentence-content");
const author = document.querySelector(".sentence-author");




const sentences = [{
        text: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
    },
    {
        text: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
    },
    {
        text: "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
    },
    {
        text: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
    },
    {
        text: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
    },
    {
        text: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
    }
];




generateRandom = () => {
    let randomNumber = Math.floor(Math.random() * (sentences.length - 0)) + 0;
    sentence.textContent = sentences[randomNumber].text;
    author.textContent = sentences[randomNumber].author;
}

btn.addEventListener("click", generateRandom);