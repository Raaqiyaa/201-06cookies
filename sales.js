
console.log("salmon cookies");

const container = document.getElementById("container");

const hours = ["6am", "7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

console.log = (hours.length)

const seattle = {
    storeName: "seattle",
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerCust: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++ ); {
        this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
}
}

function calcCookiesEachHour() {
    for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
};
function render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

const article = document.createElement("article");
container.appendChild(article);

const h3 = document.createElement("h3");
h3.textContent = this.storeName;
article.appendChild(h3);

const ul = document.createElement("ul");
article.appendChild(ul);

for (let i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    ul.appendChild(li);
    }
}

seattle.render();

console.log(seattle.customersEachHour.length);
console.log(seattle.cookiesEachHour.length);

function randomNum(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
};



const tokyo = {
    storeName: "tokyo",
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerHour: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
    }
      // console.log(this.customersEachHour);
    },
    calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
    },
    render: function () {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    
    const article = document.createElement("article");
    container.appendChild(article);
    
    const h3 = document.createElement("h3");
    h3.textContent = this.storeName;
    article.appendChild(h3);
    
    const ul = document.createElement("ul");
    article.appendChild(ul);
    
    for (let i = 0; i < hours.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
        ul.appendChild(li);
    }
    const li = document.createElement("li");
    li.textContent = `Total Cookies: ${this.totalDailyCookies}`;
    ul.appendChild(li);
    },
    };

    const Dubai = {
        storeName: "Dubai",
        minCustPerHour: 11,
        maxCustPerHour: 38,
        avgCookiesPerHour: 13.7,
        customersEachHour: [],
        cookiesEachHour: [],
        totalDailyCookies: 0,
        calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
        }
          // console.log(this.customersEachHour);
        },
        calcCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
        },
        render: function () {
        his.calcCustomersEachHour();
        this.calcCookiesEachHour();
        
        const article = document.createElement("article");
        container.appendChild(article);
        
        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);
        
        const ul = document.createElement("ul");
        article.appendChild(ul);
        
        for (let i = 0; i < hours.length; i++) {
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            ul.appendChild(li);
        }
        const li = document.createElement("li");
        li.textContent = `Total Cookies: ${this.totalDailyCookies}`;
        ul.appendChild(li);
        },
        };


