let data = [
  {
    name: "Veggie Delight",
    imageSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const cardContainer = document.querySelector(
  "#menu-section>#recipe-container>#card-container"
);

const searchBtn = document.getElementById("search-btn");

let filterRecipes = [];
searchBtn.addEventListener("click", () => {
  card(filterRecipes);
});

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e) => {
  let searchQuery = e.target.value;
  filterRecipes = data.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });

  if (searchQuery.length === 0) {
    card(data)
  }
});

function card(foodData) {
  cardContainer.innerHTML = "";
  foodData.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    const image = document.createElement("img");
    image.src = item.imageSrc;
    (image.alt = "card image"), (image.className = "image");

    const paragrph = document.createElement("p");
    paragrph.innerText = item.type;
    paragrph.className = "paragraph";

    const divnamerating = document.createElement("div");
    divnamerating.className = "name-rating";
    const foodnamepara = document.createElement("p");
    foodnamepara.innerText = item.name;
    foodnamepara.className = "title";
    const rating = document.createElement("span");
    rating.innerText = item.rating;
    rating.className = "rating";
    divnamerating.append(foodnamepara, rating);

    const timedivlikemessage = document.createElement("div");
    timedivlikemessage.className = "like-message-time";
    const timepara = document.createElement("p");
    timepara.textContent = item.time;
    timepara.className = "time";
    const messagelikediv = document.createElement("div");
    messagelikediv.className = "like-message";
    const messageSpan = document.createElement("span");
    messageSpan.className = "material-icons message";
    messageSpan.innerText = "sms";
    // messageSpan.className = "message";
    const likeSpan = document.createElement("span");
    likeSpan.className = "material-icons like";
    likeSpan.innerText = "favorite";
    // likeSpan.className = "like"
    messagelikediv.append(messageSpan, likeSpan);
    timedivlikemessage.append(timepara, messagelikediv);

    cardDiv.append(image, paragrph, divnamerating, timedivlikemessage);
    cardContainer.appendChild(cardDiv);
  });
}
card(data);
