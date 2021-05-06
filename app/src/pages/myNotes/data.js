let date = new Date(Date.UTC(2021, 4, 21, 3, 0)).toLocaleTimeString();
date = date.split(" ")[0];

const data = [
  {
    id: 1,
    title: "Breakfast",
    description:
      "In the morning I usually have porridge. I often start my breakfast with a cereal which is not cooked, it is something dry, ready to be eaten or muesli – some grain or porridge which is not cooked with dried fruit, nuts and so on.",
    date: `${date}`,
  },
  {
    id: 2,
    title: "Morning Yoga",
    description:
      "Yoga appears to have benefits for increasing physical flexibility and reducing internal feelings of stress. Yoga may be recommended as an alternative or complementary health-promoting practice.",
    date: `${date}`,
  },
  {
    id: 3,
    title: "Call meeting",
    description:
      "A meeting is an event in which a group of people come together to discuss things or make decisions",
    date: `${date}`,
  },
  {
    id: 4,
    title: "Lunch",
    description:
      "Lunch, an abbreviation for luncheon, is a meal eaten around midday. During the 20th century, the meaning gradually narrowed to a meal eaten midday. Lunch is commonly the second meal of the day, after breakfast. The meal varies in size depending on the culture, and significant variations exist in different areas of the world",
    date: `${date}`,
  },
  {
    id: 5,
    title: "Work time",
    description:
      "Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.",
    date: `${date}`,
  },
  {
    id: 6,
    title: "Dinner with family",
    description:
      "Nowadays, everyone prefers to eat out in order to save themselves from hassle. My family also loves to have a meal in a restaurant onece in a while.",
    date: `${date}`,
  },
  {
    id: 7,
    title: "Relaxing",
    description:
      "When we relax, the flow of blood increases around our body giving us more energy. It helps us to have a calmer and clearer mind which aids positive thinking, concentration, memory and decision making. Relaxation slows our heart rate, reduces our blood pressure and relieves tension.",
    date: `${date}`,
  },
];

export default data;
