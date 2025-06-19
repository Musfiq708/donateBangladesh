document.getElementById("history-btn").addEventListener('click' , function(){
   const historyBtn = document.getElementById("history-btn");
   historyBtn.classList.add( "text-black" , "bg-[#B4F461]" , "hover:bg-green-200" , "border-none");
   historyBtn.classList.remove("bg-white","hover:bg-gray-100" , "border-[#1111114D]")
   
   document.getElementById("main_content").classList.add("hidden")
   const donationBtnPart = document.getElementById("donation_btn_part");
   donationBtnPart.classList.remove("bg-[#B4F461]","hover:bg-green-300")
   donationBtnPart.classList.add("bg-white","hover:bg-gray-200")
  const historyPart = document.getElementById("history_content");
  historyPart.classList.remove("hidden")
  
})

document.getElementById("donation_btn_part").addEventListener('click' , function(){
   const historyBtn = document.getElementById("history-btn");
   historyBtn.classList.remove( "text-black" , "bg-[#B4F461]" , "hover:bg-green-200" , "border-none");
   historyBtn.classList.add("bg-white","hover:bg-gray-100" , "border-[#1111114D]","text-black")
   
   document.getElementById("main_content").classList.remove("hidden")
   const donationBtnPart = document.getElementById("donation_btn_part");
   donationBtnPart.classList.add("bg-[#B4F461]","hover:bg-green-300")
   donationBtnPart.classList.remove("bg-white","hover:bg-gray-200")
  const historyPart = document.getElementById("history_content");
  historyPart.classList.add("hidden")
  
})