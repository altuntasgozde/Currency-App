entryInput = document.getElementById("entryInput");
button = document.getElementById("change");
usdInput = document.getElementById("usd");
eurInput = document.getElementById("eur");
gbpInput = document.getElementById("gbp");

button.addEventListener("click", change);

function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://v6.exchangerate-api.com/v6/d82e33377c0590c246b3675a/latest/TRY");

    xhr.onload = function() {
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response)
            // USD
            const usdRate = response.conversion_rates.USD;
            const amountUsd = Number(entryInput.value);
            usdInput.value = usdRate*amountUsd;
            // EUR
            const eurRate = response.conversion_rates.EUR;
            const amountEur = Number(entryInput.value);
            eurInput.value = eurRate*amountEur;
            // GBP 
            const gbpRate = response.conversion_rates.GBP;
            const amountGbp = Number(entryInput.value);
            gbpInput.value = gbpRate*amountGbp;
        }
    }
    xhr.send();
}