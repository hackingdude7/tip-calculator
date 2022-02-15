const bill_input=document.querySelector(".bill-input")
const number=document.querySelector(".number")
const custom=document.querySelector(".btn input")
const button=document.querySelectorAll(".btn button")
const tip_amt=document.querySelector(".tip-amt")
const total_amt=document.querySelector(".total-amt")
const reset=document.querySelector(".reset")
let bill=0;
let tip=0;
let people=1
console.log(button.value)
bill_input.addEventListener("input",(e)=>{
    bill=Number(bill_input.value)
    calc()
})
button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        button.forEach(b=>{
            b.style.background= "hsl(183, 100%, 15%)"
            b.style.color="white"
        })
        custom.addEventListener("click",()=>{
            button.forEach(b=>{
                b.style.background= "hsl(183, 100%, 15%)"
                b.style.color="white"
            })
        })
        btn.style.background= "hsl(172, 67%, 45%)"
        btn.style.color="hsl(183, 100%, 15%)"
       tip=btn.value
        calc()
    })
})
custom.addEventListener("input",(e)=>{
    tip=custom.value
    calc()
})
number.addEventListener("input",(e)=>{
    people=number.value
    calc()
    if(parseInt(people)===0){
        number.previousElementSibling.previousElementSibling.classList.add("error")
        number.style.outline="3px solid rgb(231, 118, 53)"
    }
    else{
        number.previousElementSibling.previousElementSibling.classList.remove("error")
        number.style.outline=""
    }
   
})
reset.addEventListener("click",rst)
console.log(bill_input.value)
function rst(){
    bill_input.value=""
    number.value="1"
    custom.value=""
    tip_amt.innerHTML="$0.00"
    total_amt.innerHTML="$0.00"
    button.forEach(b=>{
        b.style.background= "hsl(183, 100%, 15%)"
        b.style.color="white"
    })
}
function calc(){
    if(bill>=0 && people>=1){
        let tip_amount=((bill*tip)/100)/people
        let total=(tip_amount+bill)/people
        tip_amt.innerHTML="$"+tip_amount.toFixed(2)
        total_amt.innerHTML="$"+total.toFixed(2)
    }

}
