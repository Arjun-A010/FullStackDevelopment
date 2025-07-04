// script.js (Public file)

// Example Initial Data
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly Facebook).",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them.",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal.",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Fact categories and their colors
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const factsList = document.querySelector(".facts-list");
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

// Function to create fact list items
function createFactList(dataArray) {
  factsList.innerHTML = "";

  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
          <p>
              ${fact.text}
              <a class="source" href="${
                fact.source
              }" target="_blank">(Source)</a>
          </p>
          <span class="tag" style="background-color:${
            CATEGORIES.find((cat) => cat.name === fact.category)?.color ||
            "#ccc"
          }">${fact.category}</span>
      </li>`
  );

  factsList.insertAdjacentHTML("afterbegin", htmlArr.join(""));
}

// Function to load data from Supabase
async function loadFacts() {
  try {
    const res = await fetch(CONFIG.LINK, {
      headers: {
        apikey: CONFIG.API_KEY,
        authorization: CONFIG.BEARER,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data from Supabase.");
    }

    const data = await res.json();
    createFactList(data);
  } catch (error) {
    console.error("Error loading facts:", error);
  }
}

// Load facts on page load
loadFacts();

// Toggle form visibility
btn.addEventListener("click", function () {
  form.classList.toggle("hidden");
  btn.textContent = form.classList.contains("hidden")
    ? "Share a fact"
    : "Close";
});
