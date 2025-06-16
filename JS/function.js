function moneyConverter(cash) {
    let taka = parseFloat(cash)
    return (taka)
}

let accountMoney = document.getElementById("account_money").innerText
const returnAccountMoney = moneyConverter(accountMoney);

const aidQuota = moneyConverter(document.getElementById("aid_quota").innerText);


document.getElementById("quota_donate_btn").addEventListener('click', function () {
    const donated = document.getElementById("donate_amount").value
    if ( donated < 0 || donated === "") {
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