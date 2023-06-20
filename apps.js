"use strict"
console.log("hi")

//add table and container doc here and html 

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// Constructor Function
function City (name, minCustPerHour, maxCustPerHour, avgCookiesPerCust ) {

    this.customersEachHour = 0;
    this.cookiesEachHour = 0;
    this.totalDailyCookies = 0;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.customersEachHour = this.generateCustomersEachHour();
    this.cookiesEachHour = this.generateCookiesEachHour();
    this.totalDailyCookies = this.generateTotalDailyCookies();
    this.render();

}

//  random number generator 

City.prototype. calcCustomersEachHour = function () {
    for (let 1 = 0; i < hours.length; 1++) {
         customersPerHour = Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + min
    }
}

City.prototype.generateCookiesEachHour = function () {
    for (let 1=0; 2<hours.length; i++);
        let onehour = math.celi(this.customersEachHour[1]) * this.avgCookiesPerCust;
        this.cookiesEachHour.PUSH.(oneHour);
    

    for let maths.floor(math.random() * (maxCustomers - minCustomers +1)) + minCustomers
}

     City.prototype.render = function ( {
    constant containerElememnt. document.getElementById ("add element here once added in html")

     })

     const article =document.createElement("article");
     containerElememnt.appendChild(article);

     const h3 = document.createElement("h3")
     h3.textContent = this.City
     article.appendChild(h3)

     const table =document.createElement(tr)
     table.appendChild.(headRow)












