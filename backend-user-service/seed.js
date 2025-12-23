const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");
const Menu = require("./models/Menu");

const MONGO_URI =
  "mongodb+srv://deava_sample:deava_0701_sample@clustermain.d1ldf.mongodb.net/foodapp";

const restaurants = [
  { name: "Spicy Hub", location: "Hyderabad", cuisine: "Indian" },
  { name: "Burger Point", location: "Bangalore", cuisine: "Fast Food" },
  { name: "Pizza Palace", location: "Mumbai", cuisine: "Italian" },
  { name: "Tandoori Tales", location: "Delhi", cuisine: "North Indian" },
  { name: "Chinese Wok", location: "Chennai", cuisine: "Chinese" },
  { name: "Biryani Express", location: "Hyderabad", cuisine: "Biryani" },
  { name: "South Spice", location: "Coimbatore", cuisine: "South Indian" },
  { name: "Street Treats", location: "Pune", cuisine: "Street Food" },
  // --- New Additions ---
  { name: "The Sushi Bar", location: "Mumbai", cuisine: "Japanese" },
  { name: "Taco Bellish", location: "Bangalore", cuisine: "Mexican" },
  { name: "Pasta Primavera", location: "Goa", cuisine: "Italian" },
  { name: "Kebab Korner", location: "Lucknow", cuisine: "Mughlai" },
  { name: "Waffle World", location: "Kolkata", cuisine: "Desserts" },
  { name: "Green Leaf", location: "Ahmedabad", cuisine: "Gujarati" },
  { name: "Coastal Curry", location: "Kochi", cuisine: "Seafood" },
  { name: "The Steakhouse", location: "Gurgaon", cuisine: "American" },
  { name: "Dimsum Delight", location: "Gangtok", cuisine: "Tibetan" },
  { name: "Noodle Nest", location: "Indore", cuisine: "Asian Fusion" },
  { name: "Urban Grind", location: "Chandigarh", cuisine: "Cafe" },
  { name: "Midnight Munchies", location: "Jaipur", cuisine: "Late Night" }
];

const menuItems = [
  { itemName: "Chicken Biryani", price: 250 },
  { itemName: "Veg Biryani", price: 180 },
  { itemName: "Paneer Butter Masala", price: 220 },
  { itemName: "Butter Naan", price: 40 },
  { itemName: "Chicken Burger", price: 150 },
  { itemName: "Veg Burger", price: 120 },
  { itemName: "French Fries", price: 90 },
  { itemName: "Margherita Pizza", price: 300 },
  { itemName: "Farmhouse Pizza", price: 350 },
  { itemName: "Hakka Noodles", price: 200 },
  { itemName: "Fried Rice", price: 190 },
  { itemName: "Masala Dosa", price: 120 },
  { itemName: "Idli Sambar", price: 80 },
  // --- New Additions ---
  { itemName: "Salmon Sushi Roll", price: 450 },
  { itemName: "Chicken Quesadilla", price: 280 },
  { itemName: "Penne Alfredo", price: 320 },
  { itemName: "Mutton Seekh Kebab", price: 380 },
  { itemName: "Belgian Chocolate Waffle", price: 210 },
  { itemName: "Dhokla Platter", price: 150 },
  { itemName: "Prawn Curry", price: 420 },
  { itemName: "Grilled Ribeye Steak", price: 750 },
  { itemName: "Steamed Chicken Momos", price: 160 },
  { itemName: "Pad Thai Noodles", price: 260 },
  { itemName: "Cold Brew Coffee", price: 180 },
  { itemName: "Loaded Nachos", price: 240 },
  { itemName: "Gulab Jamun (2pcs)", price: 60 },
  { itemName: "Greek Salad", price: 230 },
  { itemName: "Garlic Breadsticks", price: 110 },
  { itemName: "Tandoori Chicken (Half)", price: 290 },
  { itemName: "Blueberry Cheesecake", price: 250 }
];

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB connected for seeding");

  await Restaurant.deleteMany();
  await Menu.deleteMany();

  for (const restaurant of restaurants) {
    const savedRestaurant = await Restaurant.create(restaurant);

    const randomMenus = menuItems
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    for (const menu of randomMenus) {
      await Menu.create({
        restaurantId: savedRestaurant._id,
        itemName: menu.itemName,
        price: menu.price
      });
    }
  }

  console.log("Restaurants & menus seeded successfully");
  process.exit();
}

seed();
