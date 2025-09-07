// Footer Copy Right Year Handler
const getDate = new Date();
const fullYear = getDate.getFullYear();
document.getElementById("footer-year").innerText = fullYear;

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
			.then((plantsData) => displayPlantsByCategory(plantsData.plants));

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
				class="p-4 bg-white rounded-lg flex flex-col gap-y-3 h-full"
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
							৳${plant.price}
						</span>
					</p>
					<button
						class="w-full mt-3 py-3 px-5 text-white text-[16px] font-medium bg-[#15803D] rounded-full"
					>
						Add to Cart
					</button>
				</div>
			</div>
		`;
		allPlantsParent.appendChild(plantCard);
	}
};

loadPlantByCategory(0);
