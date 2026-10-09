const images = import.meta.glob(
  "../assets/products/**/*.{jpg,jpeg,png}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const image = (path) => images[`../assets/products/${path}`];

export const Products = [
  // CUPCAKES
  {
    id: 1,
    name: "Chocolate Cake",
    image: image("cupcakes/chocolate.jpg"),
    description: "Rich chocolate cake with creamy chocolate frosting.",
    category: "cupcake",
    price: 150,
    featured: true,
  },
  {
    id: 2,
    name: "Strawberry Cupcake",
    image: image("cupcakes/strawberry.jpg"),
    description: "Soft cupcake topped with sweet strawberry frosting.",
    category: "cupcake",
    price: 150,
    featured: true,
    promo: true,
  },
  {
    id: 3,
    name: "Ube Cake",
    image: image("cupcakes/ube.jpg"),
    description: "Soft ube cake layered with creamy ube frosting.",
    category: "cupcake",
    price: 180,
    featured: true,
  },
  {
    id: 4,
    name: "Mocha Cake",
    image: image("cupcakes/mocha.jpg"),
    description: "Rich mocha cake with smooth coffee-flavored frosting.",
    category: "cupcake",
    price: 150,
    featured: true,
    promo: true,
  },

  // MEALS & DISHES
  {
    id: 5,
    name: "Beef Tapa",
    image: image("meals&dishes/beefTapa.jpg"),
    description: "Tender marinated beef tapa served with garlic rice and egg.",
    category: "meals&dishes",
    price: 150,
    promo: true,
  },
  {
    id: 6,
    name: "Batutay Rice",
    image: image("meals&dishes/batutayRice.jpg"),
    description: "Savory batutay served with flavorful garlic rice and egg.",
    category: "meals&dishes",
    price: 140,
  },
  {
    id: 7,
    name: "Chicken Mami",
    image: image("meals&dishes/chicenMami.jpg"),
    description: "Warm chicken noodle soup topped with tender chicken.",
    category: "meals&dishes",
    price: 120,
  },
  {
    id: 8,
    name: "Beef Bulalo",
    image: image("meals&dishes/beefBulalo.jpg"),
    description: "Hearty beef soup with tender beef, bone marrow, and vegetables.",
    category: "meals&dishes",
    price: 180,
    promo: true,
  },

  // CAKES
  {
    id: 9,
    name: "Choco Berry",
    image: image("cakes/chocoBerry.jpg"),
    description:
      "Rich chocolate cake layered with sweet berry filling and creamy frosting.",
    category: "cakes",
    price: 350,
    featured: true,
  },
  {
    id: 10,
    name: "Mother's Day Mocha Caramel",
    image: image("cakes/motherdayMochaCaramel.jpg"),
    description:
      "Delicious mocha cake with smooth caramel frosting, perfect for Mother's Day.",
    category: "cakes",
    price: 400,
    featured: true,
    promo: true,
  },
  {
    id: 11,
    name: "Mother's Day Ube Caramel",
    image: image("cakes/motherdayUbeCaramel.jpg"),
    description:
      "Soft ube cake with creamy caramel frosting, perfect for Mother's Day.",
    category: "cakes",
    price: 400,
    featured: true,
    promo: true,
  },
  {
    id: 12,
    name: "Mother's Day Caramel Cake",
    image: image("cakes/motherdayCakeCaramel.jpg"),
    description:
      "Moist cake covered with smooth caramel frosting and a special Mother's Day design.",
    category: "cakes",
    price: 400,
    featured: true,
    promo: true,
  },
  {
    id: 13,
    name: "Graduation Cake 1",
    image: image("cakes/gradCake1.jpg"),
    description:
      "A special graduation cake designed to celebrate a memorable achievement.",
    category: "cakes",
    price: 450,
  },
  {
    id: 14,
    name: "Graduation Cake 2",
    image: image("cakes/gradCake2.jpg"),
    description:
      "A celebratory graduation cake perfect for honoring academic achievements.",
    category: "cakes",
    price: 450,
  },
  {
    id: 15,
    name: "Dad Cake",
    image: image("cakes/dadCake.jpg"),
    description:
      "A special cake made to celebrate Dad and every special occasion.",
    category: "cakes",
    price: 400,
  },
  {
    id: 16,
    name: "Beer Cake",
    image: image("cakes/beerCake.jpg"),
    description:
      "A fun and unique cake design perfect for celebrations and special occasions.",
    category: "cakes",
    price: 450,
  },
  {
    id: 17,
    name: "Mr. Cake",
    image: image("cakes/mrCake.jpg"),
    description:
      "A fun themed cake designed for a memorable celebration.",
    category: "cakes",
    price: 400,
  },

  // PASTRIES
  {
    id: 18,
    name: "Ube Loaf Overload",
    image: image("pastries/ubeLoafOverload.jpg"),
    description:
      "Soft and flavorful ube loaf generously topped with creamy ube goodness.",
    category: "pastries",
    price: 180,
    featured: true,
  },
  {
    id: 19,
    name: "Ube Roll",
    image: image("pastries/ubeRoll.jpg"),
    description:
      "Soft rolled pastry filled with smooth and creamy ube filling.",
    category: "pastries",
    price: 150,
    featured: true,
  },
  {
    id: 20,
    name: "Classic Sanrival",
    image: image("pastries/classicSanrival.jpg"),
    description:
      "Classic layered pastry with a rich and creamy filling and crunchy texture.",
    category: "pastries",
    price: 180,
  },
  {
    id: 21,
    name: "Cheese Loaf",
    image: image("pastries/cheeLoaf.jpg"),
    description:
      "Soft and freshly baked loaf filled with rich and savory cheese.",
    category: "pastries",
    price: 160,
    promo: true,
  },
  {
    id: 22,
    name: "Ube Loaf",
    image: image("pastries/ubeLoaf.jpg"),
    description:
      "Soft freshly baked loaf with a deliciously sweet ube flavor.",
    category: "pastries",
    price: 160,
  },
  {
    id: 23,
    name: "Raisin Loaf",
    image: image("pastries/raisinLoaf.jpg"),
    description:
      "Soft and lightly sweet loaf packed with flavorful raisins.",
    category: "pastries",
    price: 160,
  },
];