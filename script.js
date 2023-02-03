// Variables y Constantes

let tarea;
let firstText=`Hola!
Ingrese el número de la tarea a realizar
    1 - Ver Lista  
    2 - Agregar Evento
    3 - Planear Semana
Press "ESC" to exit`;
let secondText=`1 - Ver Lista  
2 - Agregar Evento
3 - Planear Semana
Press "ESC" to exit`;
let lun= "vacío";
let mar= "vacío";
let mie= "vacío";
let jue= "vacío";
let vie= "vacío";
let sab= "vacío";
let dom= "vacío";
let dia=7;

//Funciones
function enterData(){
    evento=prompt("Ingrese un título para el evento");
    comienza=Number(prompt("Ingrese la hora en que comienza: hh:mm"));
    finaliza=Number(prompt("Ingrese la hora en que finaliza: hh:mm"));
    return dia=`${evento} desde las ${comienza} hasta las ${finaliza}`;
};
function mostrarSemana(){
    alert(`Tu semana:
    Lunes: ${lun}
    Martes: ${mar}
    Miércoles: ${mie}
    Jueves: ${jue}
    Viernes: ${vie}
    Sábado: ${sab}
    Domingo: ${dom}`);
    tarea=prompt(secondText);
}
// Codigo 

tarea=prompt(firstText);

while(tarea!=null||dia!=null){

    if(tarea==1){
        alert(`Tu semana:
        Lunes: ${lun}
        Martes: ${mar}
        Miércoles: ${mie}
        Jueves: ${jue}
        Viernes: ${vie}
        Sábado: ${sab}
        Domingo: ${dom}`);
        tarea=prompt(secondText);
    }


    if(tarea==2){
        let dia = prompt("Ingrese el día");
        dia=dia.toLowerCase().slice(0,3);
        
        switch(dia){
            case "lun":
                lun=enterData();
                mostrarSemana();
                break
            case "mar":
                mar=enterData();
                mostrarSemana();
                break;
            case "mie":
                mie=enterData();
                mostrarSemana();
                break;
            case "jue":
                jue=enterData();
                mostrarSemana();
                break;
            case "vie":
                vie=enterData();
                mostrarSemana();
                break;
            case "sab":
                sab=enterData();
                mostrarSemana();
                break;
            case "dom":
                dom=enterData();
                mostrarSemana();
                break;
            default:
                alert("Error. Debe ingresar un día válido")
                break;
        }
        if(dia==null){ break;}
    }
    if(tarea==3){
        alert("Esta sección aún no esta disponible.\nSepa disculpar las molestias")
        tarea=prompt(secondText);
    }
    else{
    }
};






