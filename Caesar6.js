const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

let BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
};

guests.BRUTUS = BRUTUS;

guests.CICERO.pastGifts.push("Golden Lyre")

console.log(guests.ANTONY.region);

delete guests.CICERO

const generalProfile = guests.ANTONY

generalProfile.region = "Egypt"

//After executing Step 5, what will be the region of ANTONY in the original guests object?
// The region will be Egypt, due to it being a reference and not a copy.


console.log(guests)
console.log(generalProfile)