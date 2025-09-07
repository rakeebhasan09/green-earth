// Footer Copy Right Year Handler
const getDate = new Date();
const fullYear = getDate.getFullYear();
document.getElementById("footer-year").innerText = fullYear;

const myCart = document.getElementById("cart-items");

// Load Categories
fetch("https://openapi.programming-hero.com/api/categories")
	.then((categoriesRes) => categoriesRes.json())
	.then((categoriesData) => displayCategoris(categoriesData.categories));

// Display Categories
const displayCategoris = (categories) => {
	const firstElement = {
		id: 0,
		category_name: "All Trees",
	};
	categories.unshift(firstElement);
	const categoryParent = document.getElementById("tree-categories-parent");
	categoryParent.innerHTML = "";
	// for (const category of categories) {
	// 	const categoryBtn = document.createElement("div");
	// 	categoryBtn.innerHTML = `
	// <button
	//     class="category-btn text-[#1F2937] text-[16px] font-normal py-2 px-3 rounded hover:bg-[#15803D] hover:text-white w-full text-left transition-all duration-300"
	// >
	//     ${category.category_name}
	// </button>
	//     `;
	// 	categoryParent.appendChild(categoryBtn);
	// }
	categories.forEach((category, index) => {
		const categoryBtn = document.createElement("div");
		const activeClass = index === 0 ? "bg-[#15803D] text-white" : "";
		categoryBtn.innerHTML = `
			<button
					id='category${category.id}'
					onclick='loadPlantByCategory(${category.id})'
		            class="category-btn text-[#1F2937] text-[16px] font-normal py-2 px-3 rounded hover:bg-[#15803D] hover:text-white w-full text-left transition-all duration-300 ${activeClass}"
		        >
		            ${category.category_name}
		        </button>
			`;
		categoryParent.appendChild(categoryBtn);
	});
};

// Handle Active
document.getElementById("all-categories").addEventListener("click", (e) => {
	if (e.target.className.includes("category-btn")) {
		const categoryButtonsParent = document.getElementById("all-categories");
		const allCategoryBtns =
			categoryButtonsParent.querySelectorAll("button");
		allCategoryBtns.forEach((singleCategoryBtn) => {
			singleCategoryBtn.classList.remove("bg-[#15803D]", "text-white");
		});
		e.target.classList.add("bg-[#15803D]", "text-white");
	}
});

// Load Plant By Category
const loadPlantByCategory = (id) => {
	if (id === 0) {
		fetch(`https://openapi.programming-hero.com/api/plants`)
			.then((plantsRes) => plantsRes.json())
			.then((plantsData) => {
				const totalPlants = plantsData.plants;
				const limitedPlants = totalPlants.slice(0, 6);
				displayPlantsByCategory(limitedPlants);
			});
		return;
	}
	fetch(`https://openapi.programming-hero.com/api/category/${id}`)
		.then((plantsRes) => plantsRes.json())
		.then((plantsData) => displayPlantsByCategory(plantsData.plants));
};

// Display Plants By Category
const displayPlantsByCategory = (plants) => {
	const allPlantsParent = document.getElementById("all-plants-parent");
	allPlantsParent.innerHTML = "";
	for (const plant of plants) {
		const plantCard = document.createElement("div");
		plantCard.innerHTML = `
			<!-- Single Card -->
			<div
				id="plant${plant.id}"
				class="product-cart p-4 bg-white rounded-lg flex flex-col gap-y-3 h-full"
			>
				<!-- Image -->
				<div class="h-[190px]">
					<img
						class="object-cover max-h-full w-full rounded-lg"
						src="${plant.image}"
						alt=""
					/>
				</div>
				<!-- Content -->
				<div class="flex-grow">
					<h4
						class="text-[#1F2937] text-[18px] font-semibold"
					>
						${plant.name}
					</h4>
					<p
						class="py-2 text-[#1F2937] text-[12px] font-normal"
					>
						${plant.description}
					</p>
					
				</div>
				<!-- Button -->
				<div>
					<p
						class="flex items-center justify-between"
					>
						<span
							class="text-[#15803D] text-[14px] font-medium geist py-1 px-3 bg-[#DCFCE7] inline-block rounded-full"
						>
							${plant.category}
						</span>
						<span
							class="text-[#1F2937] text-[14px] font-semibold"
						>
							৳ <span>${plant.price}</span>
						</span>
					</p>
					<button
						class="add-to-cart w-full mt-3 py-3 px-5 text-white text-[16px] font-medium bg-[#15803D] rounded-full"
					>
						Add to Cart
					</button>
				</div>
			</div>
		`;
		allPlantsParent.appendChild(plantCard);
	}
};

// Add To Cart Handler
let cartProducts = [];
document.getElementById("all-plants-parent").addEventListener("click", (e) => {
	if (e.target.innerText === "Add to Cart") {
		handleAddToCart(e);
	}
});

const handleAddToCart = (e) => {
	const card = e.target.closest(".product-cart");
	const cardTitle = card.querySelector("h4").innerText;
	const plantID = e.target.parentNode.parentNode.id;
	const price = Number(
		e.target.parentNode.children[0].children[1].children[0].innerText
	);
	cartProducts.push({
		id: plantID,
		title: cardTitle,
		price: price,
	});
	showCartItems(cartProducts);
};

// Show Cart Items
const showCartItems = (cartProducts) => {
	let total = 0;
	myCart.innerHTML = "";
	cartProducts.forEach((cartProduct) => {
		myCart.innerHTML += `
			<div
				class="py-2 px-3 bg-[#F0FDF4] rounded-lg flex items-center justify-between"
			>
				<div>
					<h5
						class="text-[#1F2937] text-[14px] font-semibold"
					>
						${cartProduct.title}
					</h5>
					<p
						class="text-[#1F2937] text-[16px] font-normal"
					>
						৳ <span>${cartProduct.price}</span>
					</p>
				</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 16 16"
						fill="#f00"
						class="cursor-pointer"
						onclick="handleDeleteFromCart('${cartProduct.id}')"
					>
						<path
							d="M12.6667 4.27337L11.7267 3.33337L8.00004 7.06004L4.27337 3.33337L3.33337 4.27337L7.06004 8.00004L3.33337 11.7267L4.27337 12.6667L8.00004 8.94004L11.7267 12.6667L12.6667 11.7267L8.94004 8.00004L12.6667 4.27337Z"
							fill="#f00"
						/>
					</svg>
				</div>
			</div>
		`;
		total += cartProduct.price;
	});
	document.getElementById("cart-total").innerText = total;
};

// Handle Delete From Cart
const handleDeleteFromCart = (productId) => {
	const cartAfterDelete = cartProducts.filter(
		(cartProduct) => cartProduct.id !== productId
	);
	cartProducts = cartAfterDelete;
	showCartItems(cartProducts);
};

loadPlantByCategory(0);
