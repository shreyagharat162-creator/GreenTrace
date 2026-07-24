const recipes = {
    pizza: {
        servings: 4,
        ingredients: {
            Flour: 500,
            Cheese: 200,
            "Tomato Sauce": 150,
            Yeast: 10,
            "Olive Oil": 20
        }
    },

    cake: {
        servings: 4,
        ingredients: {
            Flour: 200,
            Sugar: 100,
            Butter: 100,
            Eggs: 2,
            "Baking Powder": 1
        }
    },

    "butter chicken": {
        servings: 4,
        ingredients: {
            Chicken: 500,
            Butter: 50,
            Onion: 2,
            Tomato: 3,
            Cream: 100
        }
    },

    pasta: {
        servings: 2,
        ingredients: {
            Pasta: 200,
            Cheese: 100,
            Garlic: 5,
            Butter: 20,
            Milk: 150
        }
    },

        "chicken salad": {
    servings: 2,
    ingredients: {
        Chicken: 250,
        Lettuce: 100,
        Cucumber: 1,
        Tomato: 2,
        Onion: 1,
        Olive_Oil: 15,
        Lemon_Juice: 10
    }

    },
    

"fried rice": {
    servings: 2,
    ingredients: {
        Rice: 300,
        Carrot: 50,
        Beans: 50,
        Capsicum: 50,
        Soy_Sauce: 20
    }
},

noodles: {
    servings: 2,
    ingredients: {
        Noodles: 200,
        Cabbage: 50,
        Carrot: 50,
        Capsicum: 50,
        Soy_Sauce: 20
    }
},

sandwich: {
    servings: 2,
    ingredients: {
        Bread: 4,
        Butter: 20,
        Cheese: 50,
        Tomato: 1,
        Cucumber: 1
    }
},

burger: {
    servings: 2,
    ingredients: {
        Burger_Buns: 2,
        Patty: 2,
        Cheese: 2,
        Lettuce: 20,
        Tomato: 1
    }
},

biryani: {
    servings: 4,
    ingredients: {
        Rice: 500,
        Chicken: 500,
        Onion: 2,
        Yogurt: 100,
        Biryani_Masala: 30
    }
},

"paneer butter masala": {
    servings: 4,
    ingredients: {
        Paneer: 300,
        Butter: 50,
        Tomato: 3,
        Cream: 100,
        Onion: 2
    }
},

"garlic bread": {
    servings: 4,
    ingredients: {
        Bread: 8,
        Butter: 60,
        Garlic: 20,
        Cheese: 80,
        Oregano: 5
    }
},

pancakes: {
    servings: 4,
    ingredients: {
        Flour: 250,
        Milk: 250,
        Eggs: 2,
        Sugar: 50,
        Butter: 30
    }
},

cookies: {
    servings: 4,
    ingredients: {
        Flour: 250,
        Butter: 150,
        Sugar: 100,
        Chocolate_Chips: 100,
        Baking_Powder: 5
    }
},

"tomato soup": {
    servings: 4,
    ingredients: {
        Tomato: 500,
        Onion: 1,
        Butter: 20,
        Garlic: 10,
        Salt: 5
    }
},

chapati: {
    servings: 4,
    ingredients: {
        Wheat_Flour: 300,
        Water: 180,
        Oil: 10,
        Salt: 5
    }
},

"french fries": {
    servings: 2,
    ingredients: {
        Potato: 300,
        Oil: 500,
        Salt: 5,
        Pepper: 3
    }
},

"mac and cheese": {
    servings: 4,
    ingredients: {
        Macaroni: 300,
        Cheese: 200,
        Milk: 250,
        Butter: 30,
        Flour: 20
    }
},

"veg salad": {
    servings: 2,
    ingredients: {
        Cucumber: 1,
        Tomato: 2,
        Onion: 1,
        Lettuce: 100,
        Olive_Oil: 15
    }
}
};
const loadRecipeBtn = document.getElementById("loadRecipe");

if (loadRecipeBtn) {

loadRecipeBtn.addEventListener("click", function () {

    let recipeName = document.getElementById("recipeName").value.toLowerCase();

    let recipe = recipes[recipeName];

    if (!recipe) {
        document.getElementById("recipeIngredients").innerHTML =
            "<p>Recipe not found!</p>";
        return;
    }

    let output = `
<h3>Original Recipe</h3>
<p><strong>Original Servings:</strong> ${recipe.servings}</p>
<h3>Ingredients</h3>
`;

    for (let ingredient in recipe.ingredients) {
        output += `<p>${ingredient}: ${recipe.ingredients[ingredient]} g</p>`;
    }

    document.getElementById("recipeIngredients").innerHTML = output;

});
}
const convertRecipeBtn = document.getElementById("convertRecipe");

if (convertRecipeBtn) {

convertRecipeBtn.addEventListener("click", function () {
    let recipeName = document.getElementById("recipeName").value.toLowerCase();
    let recipe = recipes[recipeName];

    if (!recipe) {
        return;
    }

    let requiredServings = Number(document.getElementById("newServing").value);

    if (requiredServings <= 0) {
        alert("Please enter required servings.");
        return;
    }

    let factor = requiredServings / recipe.servings;

   let output = `
<p style="color:green; font-weight:bold;">
✅ Recipe Converted Successfully!
</p>

<h3>Converted Recipe</h3>
`;
    for (let ingredient in recipe.ingredients) {

        let newQuantity = (recipe.ingredients[ingredient] * factor);
newQuantity = Number(newQuantity.toFixed(2));
        output += `<p>${ingredient}: ${newQuantity} g</p>`;
    }

    document.getElementById("result").innerHTML = output;

});
}
// ===============================
// Healthy Alternatives
// ===============================

const alternatives = {

"sugar":"Honey, Jaggery, Stevia",

"butter":"Olive Oil, Avocado",

"white rice":"Brown Rice, Quinoa",

"rice":"Brown Rice, Quinoa",

"maida":"Whole Wheat Flour, Oat Flour",

"chips":"Roasted Nuts, Air-Popped Popcorn",

"soft drink":"Coconut Water, Lemon Water",

"mayonnaise":"Greek Yogurt",

"chocolate":"Dark Chocolate (70%+)",

"salt":"Herbs and Spices",

"cream":"Greek Yogurt",

"ghee":"Olive Oil",

"paneer":"Tofu",

"milk":"Almond Milk, Oat Milk",

"curd":"Greek Yogurt",

"cheese":"Low-Fat Cheese, Cottage Cheese",

"white bread":"Whole Wheat Bread",

"bread":"Multigrain Bread",

"noodles":"Whole Wheat Noodles",

"pasta":"Whole Wheat Pasta",

"burger":"Veg Burger with Whole Wheat Bun",

"pizza":"Whole Wheat Veg Pizza",

"cake":"Whole Wheat Banana Cake",

"ice cream":"Frozen Yogurt",

"biscuits":"Oats Cookies",

"french fries":"Baked Sweet Potato Fries",

"oil":"Olive Oil, Avocado Oil",

"coffee":"Green Tea",

"tea":"Herbal Tea",

"juice":"Fresh Fruit Juice",

"jam":"Peanut Butter",

"ketchup":"Fresh Tomato Salsa",

"maggi":"Whole Wheat Noodles",

"candy":"Fresh Fruits",

"cookies":"Oatmeal Cookies"

};

const healthTips = {

"sugar":"Use natural sweeteners in moderation to reduce added sugar intake.",

"butter":"Olive oil contains healthier unsaturated fats than butter.",

"rice":"Brown rice provides more fibre than white rice.",

"white rice":"Brown rice is richer in fibre and nutrients.",

"maida":"Whole wheat flour contains more fibre than refined flour.",

"chips":"Roasted snacks are generally lower in unhealthy fats than fried chips.",

"soft drink":"Choose water or coconut water instead of sugary drinks.",

"mayonnaise":"Greek yogurt is a lighter alternative with protein.",

"chocolate":"Dark chocolate (70%+) contains more cocoa and less sugar.",

"salt":"Use herbs and spices to add flavour while reducing salt.",

"cream":"Greek yogurt can provide a creamy texture with more protein.",

"ghee":"Use healthy oils in moderation.",

"paneer":"Tofu is a good plant-based protein option.",

"milk":"Plant-based milk can be a good alternative for some people.",

"curd":"Greek yogurt contains more protein than regular curd.",

"cheese":"Choose low-fat cheese when possible.",

"bread":"Whole grain bread provides more fibre.",

"white bread":"Whole wheat bread is more nutritious.",

"noodles":"Whole wheat noodles contain more fibre.",

"pasta":"Whole wheat pasta keeps you fuller for longer.",

"burger":"Add more vegetables and choose a whole wheat bun.",

"pizza":"Increase vegetable toppings and reduce extra cheese.",

"cake":"Enjoy cake occasionally and in small portions.",

"ice cream":"Frozen yogurt can be a lighter choice.",

"biscuits":"Oat cookies often contain more fibre.",

"french fries":"Baked sweet potato fries are a healthier option.",

"oil":"Use healthy oils in moderate amounts.",

"coffee":"Avoid too much added sugar in coffee.",

"tea":"Herbal tea is a refreshing alternative.",

"juice":"Whole fruits are generally a better choice than juice.",

"jam":"Choose spreads with less added sugar.",

"ketchup":"Fresh tomato salsa is a fresher option.",

"maggi":"Whole wheat noodles are a healthier substitute.",

"candy":"Fresh fruits can satisfy sweet cravings.",

"cookies":"Oatmeal cookies are a better choice than regular cookies."

};

const findAlternativeBtn = document.getElementById("findAlternative");
const foodInput = document.getElementById("foodInput");
const result = document.getElementById("alternativeResult");

function showAlternativeResult(message) {
    if (!result) return;

    result.style.display = "block";
    result.innerHTML = message;
}

function findHealthyAlternative() {
    if (!foodInput || !result) return;

    const input = foodInput.value.trim().toLowerCase().replace(/[^a-z\s]/g, "");

    if (input === "") {
        showAlternativeResult("<p>Please enter a food item.</p>");
        return;
    }

    const matchedKey = Object.keys(alternatives).find((key) => input === key || input.includes(key));

    if (matchedKey) {
    showAlternativeResult(`
        <h3>🥗 Healthy Alternative</h3>

        <p><strong>${matchedKey.toUpperCase()}</strong> → ${alternatives[matchedKey]}</p>

        <hr style="margin:15px 0;">

        <h3>💡 Health Tip</h3>

        <p>${healthTips[matchedKey]}</p>
    `);
}
    else {
       showAlternativeResult(`
    <h3>❌ Ingredient Not Found</h3>

    <p>
        We don't have a healthy alternative for
        <strong>${input}</strong> yet.
    </p>

    <br>

    <p><strong>Try searching for:</strong></p>

    <p>
        Sugar • Butter • Rice • Milk • Bread • Cheese • Paneer • Pizza • Burger • Pasta • Oil • Tea • Coffee • Cookies • Chips • Cream • Chocolate • Ghee • Curd • Juice • Mayonnaise
    </p>
`);
    }
}

if (findAlternativeBtn) {
    findAlternativeBtn.addEventListener("click", findHealthyAlternative);
}

if (foodInput) {
    foodInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            findHealthyAlternative();
        }
    });
}

console.log("JavaScript Loaded");

if (findAlternativeBtn) {
    console.log("Alternative button found");
}

// Expiry Checker

const checkExpiryBtn = document.getElementById("checkExpiry");
const foodName = document.getElementById("foodName");
const purchaseDate = document.getElementById("purchaseDate");
const expiryResult = document.getElementById("expiryResult");
const expiryData = {

    "milk": {
        days: 3,
        tip: "Keep refrigerated below 4°C."
    },

    "bread": {
        days: 5,
        tip: "Store in a cool, dry place."
    },

    "eggs": {
        days: 21,
        tip: "Keep refrigerated."
    },

    "banana": {
        days: 5,
        tip: "Store at room temperature."
    },

    "apple": {
        days: 30,
        tip: "Store in the refrigerator."
    },

    "tomato": {
        days: 7,
        tip: "Keep at room temperature."
    },

    "potato": {
        days: 30,
        tip: "Store in a cool, dark place."
    },

    "onion": {
        days: 30,
        tip: "Keep in a dry, ventilated place."
    },

    "cheese": {
        days: 14,
        tip: "Wrap tightly and refrigerate."
    },

    "yogurt": {
        days: 7,
        tip: "Keep refrigerated."
    },
    "curd": {
    days: 7,
    tip: "Keep refrigerated below 4°C."
},

"paneer": {
    days: 5,
    tip: "Store in the refrigerator."
},

"butter": {
    days: 30,
    tip: "Keep refrigerated."
},

"cream": {
    days: 7,
    tip: "Refrigerate after opening."
},

"ghee": {
    days: 180,
    tip: "Store in a cool, dry place."
},

"brown bread": {
    days: 5,
    tip: "Keep in an airtight container."
},

"buns": {
    days: 3,
    tip: "Store in an airtight container."
},

"cake": {
    days: 4,
    tip: "Refrigerate cream cakes."
},

"cookies": {
    days: 60,
    tip: "Store in an airtight jar."
},

"biscuits": {
    days: 90,
    tip: "Keep away from moisture."
},

"rice": {
    days: 365,
    tip: "Store in an airtight container."
},

"cooked rice": {
    days: 2,
    tip: "Refrigerate within 2 hours."
},

"wheat flour": {
    days: 180,
    tip: "Store in an airtight container."
},

"maida": {
    days: 180,
    tip: "Keep in a cool, dry place."
},

"oats": {
    days: 180,
    tip: "Seal properly after opening."
},

"pasta": {
    days: 365,
    tip: "Store in a dry place."
},

"noodles": {
    days: 365,
    tip: "Keep away from moisture."
},

"carrot": {
    days: 21,
    tip: "Keep refrigerated."
},

"cabbage": {
    days: 14,
    tip: "Keep refrigerated."
},

"cauliflower": {
    days: 7,
    tip: "Store in the refrigerator."
},

"broccoli": {
    days: 5,
    tip: "Keep refrigerated."
},

"spinach": {
    days: 5,
    tip: "Wrap in paper towel before refrigerating."
},

"lettuce": {
    days: 7,
    tip: "Store in the refrigerator."
},

"cucumber": {
    days: 7,
    tip: "Keep refrigerated."
},

"capsicum": {
    days: 10,
    tip: "Store in the refrigerator."
},

"garlic": {
    days: 60,
    tip: "Keep in a cool, dry place."
},

"ginger": {
    days: 21,
    tip: "Keep refrigerated."
},

"mango": {
    days: 7,
    tip: "Store at room temperature until ripe."
},

"orange": {
    days: 21,
    tip: "Store in the refrigerator."
},

"grapes": {
    days: 7,
    tip: "Keep refrigerated."
},

"watermelon": {
    days: 7,
    tip: "Refrigerate after cutting."
},

"papaya": {
    days: 7,
    tip: "Store at room temperature until ripe."
},

"pineapple": {
    days: 5,
    tip: "Refrigerate after cutting."
},

"strawberry": {
    days: 5,
    tip: "Keep refrigerated."
},

"lemon": {
    days: 21,
    tip: "Store in the refrigerator."
},

"chicken": {
    days: 2,
    tip: "Refrigerate immediately after purchase."
},

"fish": {
    days: 2,
    tip: "Store on ice or refrigerate."
},

"mutton": {
    days: 3,
    tip: "Keep refrigerated."
},

"tofu": {
    days: 5,
    tip: "Store in water and refrigerate."
},

"ketchup": {
    days: 180,
    tip: "Refrigerate after opening."
},

"jam": {
    days: 180,
    tip: "Keep refrigerated after opening."
},

"honey": {
    days: 730,
    tip: "Store in a cool, dry place."
},

"peanut butter": {
    days: 180,
    tip: "Keep tightly closed."
},

"pickle": {
    days: 365,
    tip: "Always use a dry spoon."
},

"cooking oil": {
    days: 365,
    tip: "Store away from sunlight."
},

"almonds": {
    days: 180,
    tip: "Store in an airtight container."
},

"cashews": {
    days: 180,
    tip: "Keep in a cool, dry place."
},

"peanuts": {
    days: 180,
    tip: "Store in an airtight container."
},

"walnuts": {
    days: 180,
    tip: "Keep refrigerated."
},

"raisins": {
    days: 180,
    tip: "Keep sealed and dry."
},

"fruit juice": {
    days: 7,
    tip: "Refrigerate after opening."
},

"coconut water": {
    days: 2,
    tip: "Keep refrigerated after opening."
}
    // Dairy
// Dairy

};

if (checkExpiryBtn) {

    checkExpiryBtn.addEventListener("click", function () {

        const food = foodName.value.toLowerCase().trim();
        const date = purchaseDate.value;

        if (food === "" || date === "") {
            expiryResult.style.display = "block";
            expiryResult.innerHTML = "⚠️ Please enter a food item and select a purchase date.";
            return;
        }

        if (expiryData[food]) {

            const shelfLife = expiryData[food].days;
            const tip = expiryData[food].tip;

            const purchase = new Date(date);
            const expiry = new Date(purchase);

            expiry.setDate(expiry.getDate() + shelfLife);

            expiryResult.style.display = "block";

            expiryResult.innerHTML = `
                <h3>📦 Expiry Details</h3>

                <p><strong>Food Item:</strong> ${food.charAt(0).toUpperCase() + food.slice(1)}</p>

                <p><strong>Purchase Date:</strong> ${purchase.toDateString()}</p>

                <p><strong>Shelf Life:</strong> ${shelfLife} days</p>

                <p><strong>Expected Expiry Date:</strong> ${expiry.toDateString()}</p>

                <p><strong>💡 Storage Tip:</strong> ${tip}</p>
            `;

        } else {

            expiryResult.style.display = "block";

            expiryResult.innerHTML = `
                <h3>❌ Food Not Found</h3>

                <p>Try searching:</p>

                <p>Milk, Bread, Eggs, Banana, Apple, Tomato, Potato, Onion, Cheese, Yogurt</p>
            `;
        }

    });

}

// Contact Page

const sendMessageBtn = document.getElementById("sendMessage");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactSubject = document.getElementById("contactSubject");
const contactMessage = document.getElementById("contactMessage");
const contactResult = document.getElementById("contactResult");

if (sendMessageBtn) {

    sendMessageBtn.addEventListener("click", function () {

        if (
            contactName.value.trim() === "" ||
            contactEmail.value.trim() === "" ||
            contactSubject.value.trim() === "" ||
            contactMessage.value.trim() === ""
        ) {

            contactResult.style.display = "block";
            contactResult.innerHTML = "⚠️ Please fill in all the fields.";
            return;
        }

        contactResult.style.display = "block";
        contactResult.innerHTML = `
            <h3>✅ Message Sent Successfully!</h3>
            <p>Thank you for contacting GreenTrace.</p>
            <p>We will get back to you soon.</p>
        `;
        setTimeout(() => {
    contactResult.style.display = "none";
}, 3000);

        contactName.value = "";
        contactEmail.value = "";
        contactSubject.value = "";
        contactMessage.value = "";
    });

}