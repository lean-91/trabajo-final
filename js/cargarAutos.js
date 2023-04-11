/*------------
fetch("../BD/Autos.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

*/
let Autos

const CatalogoContainer=document.getElementById("CatalogoContainer");
function Filtrar(){
   const Marca=document.getElementById("marca").value
   const Color=document.getElementById("color").value
   CatalogoContainer.innerHTML=`<br>`
   for(auto of Autos){
      if(auto.Marca==Marca && auto.Color==Color || Marca=="Todas" && auto.Color==Color ||
      auto.Marca==Marca && Color=="Cualquiera" || Marca=="Todas" && Color=="Cualquiera"){
         CatalogoContainer.innerHTML+=`
         <div class="card">
            <img class="imgcard" src="${auto.URL}">
            <div class="cardescripcion">
               <h4><b>${auto.Marca} ${auto.Modelo}</b></h4>
               <p>${auto.Descripcion}</p>
            </div>
         </div>`
      }
      
   }
}

fetch("./BD/Autos.json")
.then(response => {return response.json();})
.then(data =>{
   console.log(data)
   Autos=data.Autos
   Filtrar()
})
