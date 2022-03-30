class Currency{
    constructor(firstCureency, secondCureency){
        this.firstCureency = firstCureency;
        this.secondCureency = secondCureency;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amount = null;
    }

    exchange(){

        return new Promise((resolve, reject) => {
        fetch(this.url + this.firstCureency)
        .then(response => response.json())
        .then(data => {
            const parity = data.rates[this.secondCureency];
            const amount2 = Number(this.amount);
            let total = parity * amount2;
            resolve(total);
        })
        .then(data => {
            const dating = data.date[this.dateCurrency];
            resolve(dating);
        })

        .catch(err => reject(err));
    });

    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCureency(newFirstCureency){
        this.firstCureency = newFirstCureency;
    }
    changeSecondCureency(newSecondCureency){
        this.secondCureency = newSecondCureency;
    }
    
}