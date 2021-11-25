
function bmi(){

    let mass = +massInput.value;  
    let height = +heightInput.value; 
    if (height > 3){
        height = height/100;
    }
   
      let bmi = mass /(height **2);
          bmi = Math.round(parseFloat(bmi) * 100) / 100;
  
    resultPlace.innerHTML = bmi;   

    console.log(`Индекс массы тела: ${bmi}`);


 if (bmi <= 16 ){
    
   diagnosis.innerHTML = `Выраженный дефицит массы тела.`
   
} else if((bmi > 16) && (bmi <= 18.5)){

   diagnosis.innerHTML = `Небольшой дефицит масса тела.`;
   
}else if((bmi > 18.5) && (bmi <= 25)){

   diagnosis.innerHTML = `Норма.`;

}else if((bmi > 25) && (bmi <= 30)){

   diagnosis.innerHTML =`Избыточная масса тела (предожирение).`;

}else if((bmi > 30) && (bmi <= 35)){

   diagnosis.innerHTML = `Ожирение 1 степени`;

}else if((bmi > 35) && (bmi <= 40)){

   diagnosis.innerHTML = `Ожирение 2 степени.`;

}else if(bmi >= 40){

   diagnosis.innerHTML =`Ожирение 3 степени.`;
   diagnosis.style.color = "red";
}
}  


