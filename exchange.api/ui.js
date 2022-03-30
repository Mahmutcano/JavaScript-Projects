class UI{
    constructor(oneSelect, twoSelect){
        this.oneSelect = oneSelect;
        this.twoSelect = twoSelect;
        this.oneTitle = document.getElementById("oneTitle");
        this.twoTitle = document.getElementById("twoTitle");
        this.twoİnput = document.getElementById("twoİnput");
    }

    changeFirst(){
        this.oneTitle.textContent = this.oneSelect.options[this.oneSelect.selectedIndex].textContent;
    }

    changeSecond(){
        this.twoTitle.textContent = this.twoSelect.options[this.twoSelect.selectedIndex].textContent;
    }
    displayResult(result){
        this.twoİnput.value = result;
    }

}