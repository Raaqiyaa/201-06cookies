// random number function 
function randomNum(min, max) {
return math.floor(math.random() *(max - min +1) +min)
}
// constant function 
const container = document.getElementById("container");
const storeTable = document.getElementById("store-table");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function Cookiestore (name, minCustPerHour, maxCustPerHour, avgCookiesPerCust ) {
    this.storeName = storeName;
    this.maxCustPerHour = minCustPerHour;
    this.avgCookiesPerHour = avgCookiesPerCust;
    this.customersEachHour = [];
    this.cookiessEachHour = [];
    this.render();
    
}
    // calcCustomersEachHour
CookieStore.prototype. calcCustomersEachHour = function() {
    for (let i 0; i < hours.length; i++) {
        this.customersEachHour = math.floor(this.custPerHour[i] *  this.avgCookiesPerHour)
        
        push(randomNum(this.minCustPerHour,this.maxCustPerHour))
    }
}
    // calcCookiesEachHour
    CookieStore.prototype.calcCookiesEachHour = function () {
    for (let i = 0; 1 < hours.length; i++);
    cookiessEachHour =math.floor(this.custPerHour[i] * this.avgCookiesPerHour)
        
}

    CookieStore.prototype.render = function ( {
    constant containerElememnt. document.getElementById
    })

    //render
    CookieStore.prototype.render = function() {
        this.calcCookiesEachHour()
        this.calcCustomersEachHour
    

        // table 
        const table = document.getElementById('theTable')

        // table rows
        const tr = document.createElement('tr')
        table.appendChild(tr)

        //table cell
        let td = docuemnt.createElement('TD')
        tr.appendChild(td)
        
        //total
        let total = 0
        console.log(this,custPerHour)
        console.log(This.avgCookiesPerHour)
        
        //loop
        for (let i = 0; i < this.cookiesPerHour; i++) {
        td = document.createElement('td')
        td.content = this.cookiesPerHour [i]
        tr.appemdChild(td)

        total = total + this.cookiesPerHour[i]
        }
    }
        CookieStore locations 

        //total cells
        td = document.createElement('td')
        td.textcontent = total
        tr.appendChild(td)

        //constructor 
        const seattle = new CookieStore("seattle",23, 65, 6.3);
        const tokyo = new CookieStore("tokyo", 3, 24, 1.2)
        const dubai = new CookieStore("dubai", 11, 38, 3.7)
        const paris = new CookieStore("paris", 20, 16, 4.6)
        const lima = new CookieStore("lima", 2, 16, 4.6)

        const stores = [seattle, tokyo, dubai, paris, lima]

        for (let i = 0); 1 < stores.length; i++


