entryInput = document.getElementById("entryInput");
button = document.getElementById("change");
usdInput = document.getElementById("usd");
eurInput = document.getElementById("eur");
gbpInput = document.getElementById("gbp");

button.addEventListener("click", change);

function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest?base=TRY");

    xhr.onload = function() {
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            // USD
            const usdRate = response.rates.USD;
            const amountUsd = Number(entryInput.value);
            usdInput.value = usdRate*amountUsd;
            // EUR
            const eurRate = response.rates.EUR;
            const amountEur = Number(entryInput.value);
            eurInput.value = eurRate*amountEur;
            // GBP 
            const gbpRate = response.rates.GBP;
            const amountGbp = Number(entryInput.value);
            gbpInput.value = gbpRate*amountGbp;
        }
    }
    xhr.send();
}