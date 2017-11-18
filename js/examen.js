
let numero = document.getElementById('valor')
let botoncito = document.getElementById('boton') 
botoncito.addEventListener("click", clickBoton)


function clickBoton() {
	let x = parseInt(numero.value)
        let centavos = x
            let total = 0;
            for(let c50=0; c50<=(centavos/50); c50++) {   
                let centavos25 = centavos - (c50 * 50 );
                for(let c25=0; c25<=(centavos25/25); c25++) {   
                    let centavos10 = centavos25 - (c25 * 25);
                    for(let c10=0; c10<=(centavos10/10); c10++) {    
                        let centavos5 = centavos10 - (c10 * 10);
                        for(let c5=0; c5<=(centavos5/5); c5++) {                        
                            let c1 = centavos5 - (c5 * 5);                 
                            document.write(`Monedas: 50¢ cantidad: ${c50} , 25¢ cantidad: ${c25} , 10¢ cantidad: ${c10} , 5¢ cantidad: ${c5} , 1¢ cantidad: ${c1} <br />`)
                            total++
                        }
                    }
                }
            }
            document.write("Combinaciones totales: " + total);
}

  


        
