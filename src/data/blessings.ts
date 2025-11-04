export const blessings: string[] = [
  "It is only delusional until it works",
  "Your dreams are closer than they appear",
  "Magic happens when you believe",
  "The universe is conspiring in your favor",
  "Your best chapter is yet to be written",
  "Trust the timing of your life",
  "You are exactly where you need to be",
  "Something wonderful is about to happen",
  "Your light shines brighter than you know",
  "Miracles are heading your way",
  "You are worthy of all good things",
  "The best is yet to come",
  "Your journey is unfolding perfectly",
  "Abundance flows to you naturally",
  "You are loved beyond measure",
  "Great things take time, and you're almost there",
  "Your potential is limitless",
  "Every ending is a new beginning",
  "You are stronger than any challenge",
  "Joy is coming to find you",
];

export const getRandomBlessing = (): string => {
  return blessings[Math.floor(Math.random() * blessings.length)];
};
