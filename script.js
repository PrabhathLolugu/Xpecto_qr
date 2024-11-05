document.addEventListener("DOMContentLoaded", () => {
    const stalls = {
        stall1: { name: "Bakery", upi: "7382079145@axl", items: [{ name: "Noodles", price: 50 }, { name: "Puff", price: 30 }, { name: "Cake Slice", price: 40 }, { name: "Bread", price: 20 }, { name: "Cookies", price: 35 }] },
        stall2: { name: "Fast Food", upi: "fastfood@upi", items: [{ name: "Burger", price: 60 }, { name: "Pizza", price: 80 }, { name: "Fries", price: 40 }, { name: "Hot Dog", price: 50 }, { name: "Taco", price: 70 }] },
        stall3: { name: "Beverages", upi: "beverages@upi", items: [{ name: "Lemonade", price: 20 }, { name: "Cold Drink", price: 25 }, { name: "Milkshake", price: 50 }, { name: "Coffee", price: 30 }, { name: "Smoothie", price: 60 }] },
        stall4: { name: "Indian Street Food", upi: "indianstreetfood@upi", items: [{ name: "Samosa", price: 10 }, { name: "Kachori", price: 15 }, { name: "Pav Bhaji", price: 50 }, { name: "Bhel Puri", price: 30 }, { name: "Chole Bhature", price: 70 }] },
        stall5: { name: "Desserts", upi: "desserts@upi", items: [{ name: "Ice Cream", price: 20 }, { name: "Cupcake", price: 25 }, { name: "Brownie", price: 30 }, { name: "Pastry", price: 40 }, { name: "Donut", price: 35 }] },
        stall6: { name: "Merchandise", upi: "merchandise@upi", items: [{ name: "T-Shirt", price: 200 }, { name: "Hoodie", price: 500 }, { name: "Cap", price: 100 }, { name: "Mug", price: 150 }, { name: "Notebook", price: 50 }] },
        stall7: { name: "Indian Cuisine", upi: "indiancuisine@upi", items: [{ name: "Biryani", price: 80 }, { name: "Paneer Tikka", price: 70 }, { name: "Dosa", price: 40 }, { name: "Butter Naan", price: 20 }, { name: "Dal Makhani", price: 60 }] },
        stall8: { name: "Chinese Cuisine", upi: "chinesecuisine@upi", items: [{ name: "Fried Rice", price: 60 }, { name: "Manchurian", price: 50 }, { name: "Spring Roll", price: 30 }, { name: "Hakka Noodles", price: 40 }, { name: "Dim Sum", price: 70 }] }
    };

    const stallSelect = document.getElementById("stallNumber");
    const itemsSelect = document.getElementById("items");
    const amountDisplay = document.getElementById("amount");
    const payButton = document.getElementById("payButton");

    let totalAmount = 0;

    stallSelect.addEventListener("change", (e) => {
        const selectedStall = stalls[e.target.value];
        itemsSelect.innerHTML = "";

        if (selectedStall) {
            selectedStall.items.forEach(item => {
                const option = document.createElement("option");
                option.value = item.price;
                option.textContent = `${item.name} - ₹${item.price}`;
                itemsSelect.appendChild(option);
            });
        }

        totalAmount = 0;
        amountDisplay.textContent = totalAmount;
        updateItemSelectStyle();
    });

    itemsSelect.addEventListener("change", () => {
        const selectedItems = Array.from(itemsSelect.selectedOptions);
        totalAmount = selectedItems.reduce((sum, item) => sum + parseInt(item.value), 0);
        amountDisplay.textContent = totalAmount;
        updateItemSelectStyle();
    });

    payButton.addEventListener("click", () => {
        if (totalAmount > 0) {
            const selectedStall = stalls[stallSelect.value];
            const upiLink = `upi://pay?pa=${selectedStall.upi}&pn=Xpecto'25&am=${totalAmount}&cu=INR`;
            window.location.href = upiLink;
        } else {
            alert("Please select items to proceed with payment.");
        }
    });

    function updateItemSelectStyle() {
        if (totalAmount > 0) {
            itemsSelect.classList.remove('red-select');
            itemsSelect.classList.add('green-select');
        } else {
            itemsSelect.classList.remove('green-select');
            itemsSelect.classList.add('red-select');
        }
    }
});
