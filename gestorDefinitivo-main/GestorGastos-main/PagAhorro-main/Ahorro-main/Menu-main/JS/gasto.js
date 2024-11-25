// gasto.js
class Gasto {
    constructor(category,description,date,amount){
        this.category = category;
        this.description = description;
        this.date = date;
        this.amount = amount;
    }

    getCategory(){
        return this.category;
    }

    setCategory(category){
        this.category = category;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
    }

    getDate(){
        return this.date;
    }

    setDate(date){
        this.date = date;
    }

    getAmount(){
        return this.amount;
    }

    setAmount(amount){
        this.amount = amount;
    }
}

export { Gasto };
