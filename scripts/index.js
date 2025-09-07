// Footer Copy Right Year Handler
const getDate = new Date();
const fullYear = getDate.getFullYear();
document.getElementById("footer-year").innerText = fullYear;

const loadShopData = () => {
	// Load Categories
	fetch("https://openapi.programming-hero.com/api/categories")
		.then((categoriesRes) => categoriesRes.json())
		.then((categoriesData) => displayCategoris(categoriesData.categories));

	// Display Categories
	const displayCategoris = (categories) => {
		const categoryParent = document.getElementById(
			"tree-categories-parent"
		);
		categoryParent.innerHTML = "";
		for (const category of categories) {
			const categoryBtn = document.createElement("div");
			categoryBtn.innerHTML = `
                <button
                    class="category-btn text-[#1F2937] text-[16px] font-normal py-2 px-3 rounded hover:bg-[#15803D] hover:text-white w-full text-left transition-all duration-300"
                >
                    ${category.category_name}
                </button>
            `;
			categoryParent.appendChild(categoryBtn);
		}
	};

	// Handle Active
	document.getElementById("all-categories").addEventListener("click", (e) => {
		if (e.target.className.includes("category-btn")) {
			const categoryButtonsParent =
				document.getElementById("all-categories");
			const allCategoryBtns =
				categoryButtonsParent.querySelectorAll("button");
			allCategoryBtns.forEach((singleCategoryBtn) => {
				singleCategoryBtn.classList.remove("active-category");
			});
			e.target.classList.add("active-category");
		}
	});
};

loadShopData();
