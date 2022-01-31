const countriesElem=document.querySelector(".countries")
 const dropdown =document.querySelector(".dropdown")
 const dropElem=document.querySelector(".drop")
 const region=document.querySelectorAll(".region")
 const search=document.querySelector(".search")
 
async function getCountry(){
    const url=await fetch("https://restcountries.com/v2/all")
    const res=await url.json();
    console.log(res)
   
    res.forEach(element => {
        showCountry(element)
    });
    
}
getCountry();
function showCountry(data){
    const country=document.createElement("div")
    country.classList.add("country")
    country.innerHTML=`<div class="country-img">
    <img src="${data.flag}" alt="">
</div>
<div class="country-info">
    <h5 class="countryName">${data.name}</h5>
    <p><strong>Population:</strong>${data.population}</p>
    <p class="regionName"><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
</div>`

countriesElem.appendChild(country) 
}
dropdown.addEventListener("click",()=>{
   dropElem.classList.toggle("showDropDown")
})
const regionName=document.getElementsByClassName("regionName")
const countryName=document.getElementsByClassName("countryName")
 region.forEach(element =>{
     element.addEventListener("click",() =>{
         console.log(element);
         Array.from(regionName).forEach(elem =>{
             console.log(elem.innerText);
             if(elem.innerText.includes(element.innerText))  {
                 elem.parentElement.parentElement.style.display="grid"
             }else{
                elem.parentElement.parentElement.style.display="none"
             }
         })
    
     })
 })
 search.addEventListener("input", ()=>{
     console.log(search.value.toLowerCase());
     Array.from(countryName).forEach(elem =>{
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase()))  {
            elem.parentElement.parentElement.style.display="grid"
        }else{
           elem.parentElement.parentElement.style.display="none"
        }
    })
 })
 
   
 