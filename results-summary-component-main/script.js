fetch("data.json")
.then((response) => response.json())
.then((data) => {
    let output = "";

    for (let items of data) {
        output += `
        <div class="flex-items">
            <div class="flex-item">
                <img class="icon" src="${items.icon}" alt="memory-icon">
                <p class="category">${items.category}</p>
            </div>
            <div class="scores">
                <p class="score bold-span">${items.score}</p>
                <p class="out-of" > / 100</p>
            </div> 
        </div>
        `;
    }
    document.querySelector('.summary-item').innerHTML = `<p class="summary-title">Summary</p>`+ output + `<button>Continue</button>`;
})
.catch(function(error) {
    console.log(error);
});



