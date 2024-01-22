const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const steps = document.querySelectorAll(".step");
let symbol = document.querySelectorAll(".symbol");
let formStepNum = 0;

next.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formStepNum += 1;
    updateForm();
    updateSymbol();
  });
});

prev.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formStepNum -= 1;
    updateForm();
    updateSymbol();
  });
});

function updateForm() {
  steps.forEach((step, index) => {
    if (index === formStepNum) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

function updateSymbol() {
  symbol.forEach((s, index) => {
    if (index === formStepNum) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });
}

// functions for third step
function addsPricesMonth() {
  const addsMonthly = [
    {
      price: "+$1/mo",
    },
    {
      price: "+$2/mo",
    },
    {
      price: "+$2/mo",
    },
  ];

  let addsPrices = document.querySelectorAll(".check-cost");

  for (let i = 0; i < addsPrices.length; i++) {
    addsPrices[i].innerHTML = addsMonthly[i].price;
  }
}

function addsPricesYear() {
  const addsYearly = [
    {
      price: "+$10/yr",
    },
    {
      price: "+$20/yr",
    },
    {
      price: "+$20/yr",
    },
  ];

  let addsPrices = document.querySelectorAll(".check-cost");

  for (let i = 0; i < addsPrices.length; i++) {
    addsPrices[i].innerHTML = addsYearly[i].price;
  }
}

// finishing step 4
let arcade = document.querySelector(".arcade-package");
let finishingCost = document.querySelector(".finishing-cost");
let onlineService = document.querySelector(".online-service");
let largerStorage = document.querySelector(".larger-storage");
let total = document.querySelector(".total-price");
let changePlan = document.querySelector("#change-price");
let spanElement = document.querySelector(".arcade-package");

function finishedMonhtly() {
  const finishingMonthly = {
    packageM: "Monthly",
    arcadeMonthly: "$9/mo",
    onlineService: "$1/mo",
    largerStorage: "$2/mo",
    totalPerMonth: "+$12/mo",
  };

  spanElement.innerHTML = "Monthly";
  arcade.innerHTML = finishingMonthly.packageM;
  finishingCost.innerHTML = finishingMonthly.arcadeMonthly;
  onlineService.innerHTML = finishingMonthly.onlineService;
  largerStorage.innerHTML = finishingMonthly.largerStorage;
  total.innerHTML = finishingMonthly.totalPerMonth;
}

function finishedYearly() {
  const finishingYearly = {
    packageY: "Yearly",
    arcadeYearly: "$90/yr",
    onlineService: "$10/yr",
    largerStorage: "$20/yr",
    totalPerYear: "+$120/yr",
  };

  spanElement.innerHTML = "Yearly";
  arcade.innerHTML = finishingYearly.packageY;
  finishingCost.innerHTML = finishingYearly.arcadeYearly;
  onlineService.innerHTML = finishingYearly.onlineService;
  largerStorage.innerHTML = finishingYearly.largerStorage;
  total.innerHTML = finishingYearly.totalPerYear;
}

// function for change button
function changePackage() {
  let steps = document.querySelectorAll(".step");
  let changeBtn = document.getElementById("change-price");

  changeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    steps[1].classList.add("active");
    steps[3].classList.remove("active");
  });
}

changePackage();

// function for toggle between prices
function togglePrices() {
  let toggle = document.querySelector(".toggle");
  let monthly = document.querySelector(".m-text");
  let yearly = document.querySelector(".y-text");

  let additionalText = document.querySelectorAll(".additional-text");
  let cost = document.querySelectorAll(".cost");

  const costChange = [
    {
      yearlyPrice: "$90/yr",
      freeMonths: "2 free months",
    },
    {
      yearlyPrice: "$120/yr",
      freeMonths: "2 free months",
    },
    {
      yearlyPrice: "$150/yr",
      freeMonths: "2 free months",
    },
  ];

  const costChangeTwo = [
    {
      monthlyPrice: "$9/mo",
    },
    {
      monthlyPrice: "$12/mo",
    },
    {
      monthlyPrice: "$15/mo",
    },
  ];

  // Get the toggle element
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    if (toggle.classList.contains("active")) {
      monthly.classList.remove("active");
      yearly.classList.add("active");
      for (let i = 0; i < costChange.length; i++) {
        console.log(costChange[i].yearlyPrice);
        for (let i = 0; i < cost.length; i++) {
          cost[i].innerHTML = costChange[i].yearlyPrice;
          additionalText[i].innerHTML = costChange[i].freeMonths;
        }
      }
    } else {
      yearly.classList.remove("active");
      monthly.classList.add("active");
      for (let i = 0; i < costChangeTwo.length; i++) {
        console.log(costChangeTwo[i].monthlyPrice);
        for (let i = 0; i < cost.length; i++) {
          cost[i].innerHTML = costChangeTwo[i].monthlyPrice;
          additionalText[i].innerHTML = "";
        }
      }
    }

    // call the appropriate function
    if (yearly.classList.contains("active")) {
      addsPricesYear();
      finishedYearly();
      changePackage();
    }

    if (monthly.classList.contains("active")) {
      addsPricesMonth();
      finishedMonhtly();
      changePackage();
    }
  });

  let box = document.querySelectorAll(".box");

  box.forEach((box) => {
    box.addEventListener("click", (e) => {
      e.preventDefault();
      box.style.border = "1px solid var(--marine-blue)";
      box.style.backgroundColor = "var(--magnolia)";
    });
  });
}

togglePrices();

// validate boxes
function validateSelection() {
  let selectedBox = document.querySelector(
    ".box[style*='border: 1px solid var(--marine-blue)']"
  );
  if (!selectedBox) {
    alert("Please select a package before proceeding.");
    return false;
  }
  return true;
}
