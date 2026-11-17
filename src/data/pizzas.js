export const pizzas = [
  {
    id: 1,
    title: "Пепперони",
    description: "Пикантная пепперони, моцарелла и томатный соус",
    category: "Мясные",
    imageUrl: "/images/peperoni.jpeg",

    sizes: [
      { label: "26 см", value: 26, price: 499 },
      { label: "30 см", value: 30, price: 599 },
      { label: "40 см", value: 40, price: 749 },
    ],
  },
  {
    id: 2,
    title: "Маргарита",
    description: "Моцарелла, томаты и фирменный томатный соус",
    category: "Вегетарианские",
    imageUrl: "/images/margherita.jpeg",

    sizes: [
      { label: "26 см", value: 26, price: 399 },
      { label: "30 см", value: 30, price: 479 },
      { label: "40 см", value: 40, price: 599 },
    ],
  },
  {
    id: 3,
    title: "Четыре сыра",
    description: "Моцарелла, чеддер, пармезан и дорблю",
    category: "Сырные",
    imageUrl: "/images/four_cheeses.jpeg",
    popular: true,

    sizes: [
      { label: "26 см", value: 26, price: 549 },
      { label: "30 см", value: 30, price: 659 },
      { label: "40 см", value: 40, price: 824 },
    ],
  },
  {
    id: 4,
    title: "Гавайская",
    description: "Курица, ананасы, моцарелла и соус",
    category: "Мясные",
    imageUrl: "/images/hawaiian.jpeg",

    sizes: [
      { label: "26 см", value: 26, price: 479 },
      { label: "30 см", value: 30, price: 575 },
      { label: "40 см", value: 40, price: 719 },
    ],
  },
  {
    id: 5,
    title: "Барбекю",
    description: "Курица, бекон, красный лук и BBQ соус",
    category: "Мясные",
    imageUrl: "/images/barbecue.jpeg",
    popular: true,

    sizes: [
      { label: "26 см", value: 26, price: 599 },
      { label: "30 см", value: 30, price: 719 },
      { label: "40 см", value: 40, price: 899 },
    ],
  },
  {
    id: 6,
    title: "Овощная",
    description: "Свежие овощи, томаты и моцарелла",
    category: "Вегетарианские",
    imageUrl: "/images/vegetable.jpeg",

    sizes: [
      { label: "26 см", value: 26, price: 429 },
      { label: "30 см", value: 30, price: 515 },
      { label: "40 см", value: 40, price: 644 },
    ],
  },
];
