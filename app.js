const fs = require('fs');
var arraySaludos = ['hola','hello','ola','salve','مرحبا'];
console.log("Escriba un nombre");
var stdin = process.openStdin();
stdin.addListener("data",function(d){
    var nombre = d.toString().trim();

    fs.stat(`${nombre}.txt`, function(err,stat){
        if (err == null){
            console.log('El archivo existe');
        }else{
            var saludos="";
            for(let index=0; index < arraySaludos.length ; index++){
                saludos +=`${arraySaludos[index]} ${nombre} ` + "\n";       
            }
            //saludos +=`hola ${nombre} y hello ${nombre}`;
            console.log(saludos);
            fs.writeFile(
                `${nombre}.txt`,
                saludos,
                (err) =>{
                if(err)
                    throw err;
                    console.log(`archivo ${nombre}.txt creado con exito`);                    
            })
        }
    })
    
})