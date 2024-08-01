//variables
const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    text: "Most of modern life, all our diseases, are diseases of abundance, not diseases of scarcity.",
    author: "Naval Ravikant",
  },
  {
    text: "Write books only if you are going to say in them the things you would never dare confide to anyone",
    author: "Emil Cioran",
  },
  {
    text: "Write books only if you are going to say in them the things you would never dare confide to anyone",
    author: "Emil Cioran",
  },
  {
    text: "If you wish to make an apple pie from scratch, you must first invent the universe",
    author: "Carl Sagan",
  },
  {
    text: "As you walk down the fairway of life you must smell the roses, for you only get to play one round.",
    author: "Ben Hogan",
  },
  {
    text: "The art of life is to know how to enjoy a little and to endure very much.",
    author: "William Hazlitt",
  },
  {
    text: "Write books only if you are going to say in them the things you would never tell anyone",
    author: "Emil Cioran",
  },
  {
    text: "I'm telling you it is going to be easy. I'm telling you it is going to be worth it.",
    author: "Art Williams",
  },
  {
    text: "Don't focus on the pain, Focus on the Progress.",
    author: "Dwayne Johnson",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Everything is hard before it is easy.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Work hard in silence. Let your success be noise.",
    author: "Frank Ocean",
  },
  {
    text: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
  },
  {
    text: "Maybe it’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them.",
    author: "Anna White",
  },
  {
    text: "Be worthy of the people and things you get in your life.",
    author: "Sulabh Bashyal",
  },
  {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "A question that sometimes drives me hazy: am I or are the others crazy?",
    author: "Albert Einstein",
  },
  {
    text: "We are surrounded by story.",
    author: "Alice McDermott",
  },
  {
    text: "The past beats inside me like a second heart.",
    author: "John Banville",
  },

  {
    text: "To doubt is better, because it helps understand, aids searching. Question is everything, answer is maturity",
    author: "Laxmi Prasad Devkota",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].text;
  person.innerText = quotes[random].author;
});
