let botones = document.getElementsByClassName("btnControlNumero");
let salida = document.getElementById("salida");
let salida2 = document.getElementById("salida2");
let signos = document.getElementsByClassName("signo");
let botonesControl = document.getElementsByClassName("btnControl");
let aux ="";
let textoSalida="";
let tipoSigno = "";
let numero1 =0;
let numero2 =0;
let siga ="";

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', ()=>{
        textoSalida+=botones[i].textContent;
        salida.textContent = textoSalida;

    });
}

for (let i = 0; i < botonesControl.length; i++) {
    botonesControl[i].addEventListener('click', ()=>{
        if(botonesControl[i].textContent == "="){
            aux+=tipoSigno+textoSalida;
            salida2.textContent = aux;
            siga="nocas";
            proceso();
        }else if(botonesControl[i].textContent == "c"){
            window.location.reload(); 
        }else if(botonesControl[i].textContent == "←"){
            textoSalida="0";
            salida.textContent = textoSalida;
            textoSalida="";
        }
    }); 
}



for (let i = 0; i < signos.length; i++) {
    signos[i].addEventListener('click', ()=>{
        if(tipoSigno==""){
            tipoSigno= signos[i].textContent;
            salida2.textContent = textoSalida+" "+tipoSigno;
            aux = textoSalida;
            textoSalida="";
        }else{
            tipoSigno= signos[i].textContent;
            proceso();
        }
       
    }); 
}



function proceso(){
    if(aux=="" && tipoSigno=="*"){
        numero1=1;
    }else if(aux=="" && tipoSigno=="/"){
        numero1=1;
    }else if (aux==""){
        numero1=0;
    }else{
        numero1 = parseFloat(aux);
    }
    
    if(textoSalida=="" && tipoSigno=="*"){
        numero2=1;
    }else if(textoSalida=="" && tipoSigno=="/"){
        numero2=1;
    }else if (textoSalida==""){
        numero2=0;
    }else{
        numero2 = parseFloat(textoSalida);
    }

  
    
    if(tipoSigno=="+"){
        numero1 = numero1+numero2;
        textoSalida = numero1.toString();
        if(siga==""){
            salida2.textContent = textoSalida+" "+tipoSigno;
        }
        siga="";
        salida.textContent = textoSalida;
        aux = textoSalida;
        textoSalida="";
    }else if(tipoSigno=="*"){
        numero1 = numero1*numero2;
        textoSalida = numero1.toString();
        if(siga==""){
            salida2.textContent = textoSalida+" "+tipoSigno;
        }
        siga="";
        salida.textContent = textoSalida;
        aux = textoSalida;
        textoSalida="";
    }else if(tipoSigno=="-"){
        numero1 = numero1-numero2;
        textoSalida = numero1.toString();
        if(siga==""){
            salida2.textContent = textoSalida+" "+tipoSigno;
        }
        siga="";
        salida.textContent = textoSalida;
        aux = textoSalida;
        textoSalida="";
    }else if(tipoSigno=="/"){
        numero1 = numero1/numero2;
        textoSalida = numero1.toString();
        if(siga==""){
            salida2.textContent = textoSalida+" "+tipoSigno;
        }
        siga="";
        salida.textContent = textoSalida;
        aux = textoSalida;
        textoSalida="";
    }
}