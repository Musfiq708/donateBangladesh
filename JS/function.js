function moneyConverter(cash) {
    let taka = parseFloat(cash)
    return (taka)
}

let accountMoney = document.getElementById("account_money").innerText
const returnAccountMoney = moneyConverter(accountMoney);

const aidQuota = moneyConverter(document.getElementById("aid_quota").innerText);
const floodNoakhali = moneyConverter(document.getElementById("flood_noakhali").innerText);
const feniFund = moneyConverter(document.getElementById("feni-fund").innerText);



document.getElementById("quota_donate_btn").addEventListener('click', function () {
    const donated = document.getElementById("donate_amount").value
    if (donated < 0 || donated === "") {
        alert("Please Enter Valid Amount of Donation")
        document.getElementById("donate_amount").value = " ";

    }
    else {
        const donateAmount = parseFloat(donated)
        accountMoney = accountMoney - donateAmount
        const totalQuotaDonated = aidQuota + donateAmount

        document.getElementById("account_money").innerText = accountMoney
        document.getElementById("donate_amount").value = " ";
        document.getElementById("aid_quota").innerText = totalQuotaDonated
        const location = document.getElementById("quota").innerText

        const update = `<div class="p-8 rounded-md border-4 
            border-gray-400 mb-4">
                <div >
                    <h3 class="font-bold text-xl mb-4">${donateAmount} Taka is Donated for ${location}, Bangladesh</h3>
                    <p class="text-base font-light text-[#111111B2]">
                      Date : ${new Date().toString()}   
                    </p>
                </div>
            </div>`

        const historyContent = document.getElementById("history_content");
        historyContent.innerHTML = update + historyContent.innerHTML;
    }

})

// noakhali vivag Chai

document.getElementById("noakhali_btn").addEventListener('click', function () {
    const donated_noakhali = document.getElementById("noakhali_account").value
    if (donated_noakhali < 0 || donated_noakhali === "") {
        alert("Please Enter Valid Amount of Donation")
        document.getElementById("noakhali_account").value = " ";
    }
    else {
        const donateAmount = parseFloat(donated_noakhali)
        accountMoney = accountMoney - donateAmount

        const totalQuotaDonated = floodNoakhali + donateAmount

        document.getElementById("account_money").innerText = accountMoney
        document.getElementById("noakhali_account").value = " ";
        document.getElementById("flood_noakhali").innerText = totalQuotaDonated
        const location = document.getElementById("noakhali_location").innerText
        
        const update = `<div class="p-8 rounded-md border-4 
            border-gray-400 mb-4">
                <div >
                    <h3 class="font-bold text-xl mb-4">${donated_noakhali} Taka is Donated for ${location}, Bangladesh</h3>
                    <p class="text-base font-light text-[#111111B2]">
                      Date : ${new Date().toString()}   
                    </p>
                </div>
            </div>`

        const historyContent = document.getElementById("history_content");
        historyContent.innerHTML = update + historyContent.innerHTML;
    }
})

// Feni Fund Collection

document.getElementById("feni-btn").addEventListener('click',function(){
    const feniDonated = document.getElementById("feni-donated").value
    
    if (feniDonated < 0 || feniDonated === "") {
        alert("Please Enter Valid Amount of Donation")
        document.getElementById("feni-donated").value = " ";
    }
    else
    {
 const donateAmount = parseFloat(feniDonated)
        accountMoney = accountMoney - donateAmount
        

        const totalQuotaDonated = feniFund + donateAmount

        document.getElementById("account_money").innerText = accountMoney
        document.getElementById("feni-donated").value = " ";
        document.getElementById("feni-fund").innerText = totalQuotaDonated
        const location = document.getElementById("feni-location").innerText
        
        const update = `<div class="p-8 rounded-md border-4 
            border-gray-400 mb-4">
                <div >
                    <h3 class="font-bold text-xl mb-4">${feniDonated} Taka is Donated for ${location}, Bangladesh</h3>
                    <p class="text-base font-light text-[#111111B2]">
                      Date : ${new Date().toString()}   
                    </p>
                </div>
            </div>`

        const historyContent = document.getElementById("history_content");
        historyContent.innerHTML = update + historyContent.innerHTML;
    }
})

