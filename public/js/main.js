const btn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const span_tem=document.querySelector(".span_tem");
const temp_hide=document.querySelector(".temprature");
const getInfo= async (event)=>{
    event.preventDefault();
    const cityval=cityname.value;
    if(cityval===""){
        city_name.innerHTML=`plz fill the city name `;
      
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=23d0ae92fb5a354da43569440056e612`;
            const objdata= await fetch(url);
            const data= await objdata.json();
            const arrdata=[data];
            city_name.innerHTML=`${arrdata[0].name},${arrdata[0].sys.country}`;
            const tempval=arrdata[0].main.temp/10;
            span_tem.innerHTML=` Temp ${tempval.toFixed(0)}`;
            // temp_hide.classList.remove("hide_ele");
            
        }
        catch{
            city_name.innerHTML=`plz fill the valid  city name `;
            // temp_hide.classList.add("hide_ele");
          

        }
    }
   
   console.log(data);
    alert(cityval);  
    city_name.innerHTML=`${cityval}`;
}
btn.addEventListener('click',getInfo);