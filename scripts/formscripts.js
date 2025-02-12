document.addEventListener("DOMContentLoaded", function () {
    const productArray = [
        { id: "p1", name: "Smartphone X" },
        { id: "p2", name: "Laptop Pro" },
        { id: "p3", name: "Wireless Earbuds" },
        { id: "p4", name: "Smartwatch" }
    ];

    const productSelect = document.getElementById("product");

    productArray.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;