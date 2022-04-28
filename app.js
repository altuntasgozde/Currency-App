entryInput = document.getElementById("entryInput");
button = document.getElementById("change");
usdInput = document.getElementById("usd");
eurInput = document.getElementById("eur");
gbpInput = document.getElementById("gbp");

button.addEventListener("click", change);

function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.currencyapi.com/v3/latest?apikey=6eb298f0-5465-11ec-89a1-f78998a370de&currencies=EUR%2CUSD%2CGBP&base_currency=TRY");

    xhr.onload = function() {
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response)
            // USD
            const usdRate = response.data.USD.value;
            const amountUsd = Number(entryInput.value);
            usdInput.value = usdRate*amountUsd;
            // EUR
            const eurRate = response.data.EUR.value;
            const amountEur = Number(entryInput.value);
            eurInput.value = eurRate*amountEur;
            // GBP 
           const gbpRate = response.data.GBP.value;
            const amountGbp = Number(entryInput.value);
            gbpInput.value = gbpRate*amountGbp;
        }
    }
    xhr.send();
}