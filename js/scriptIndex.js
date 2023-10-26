//0- Creamos un array de marcas y modelos. Utilizamos dicha informacion en los Select del Form.
//--------------------------------------------------------------------------------------------------------------------------
const Marcas = [

    {
        nombre: "Alfa Romeo", 
        modelos: ["Giulia", "Stelvio"]
    },

    {
        nombre: "Audi", 
        modelos: ["A1", "A2", "A3", "Q1", "Q2", "Q3"]
    },

    {
        nombre: "BMW", 
        modelos: ["118", "135", "220", "X1", "X2", "X3"]
    },

    {
        nombre: "Chevrolet", 
        modelos: ["Camaro", "Equinox", "Cruze", "Montana", "Onix", "Spin", "Tracker"]
    },

    {
        nombre: "Citroen", 
        modelos: ["Berlingo", "C3", "C4"]
    },

    {
        nombre: "Fiat", 
        modelos: ["Fiorino", "Palio", "Siena", "Uno", "Punto", "Duna"]
    },

    {
        nombre: "Ford", 
        modelos: ["Ecosport", "Kuga", "Bronco", "Ranger", "Mustang"]
    },

    {
        nombre: "Honda", 
        modelos: ["CRV", "Pilot"]
    },

    {
        nombre: "Jeep", 
        modelos: ["Renegade", "Ram", "Compass"]
    },

    {
        nombre: "Mercedes Benz", 
        modelos: ["A200", "A250", "GLC"]
    },

    {
        nombre: "Peugeot", 
        modelos: ["2008", "208", "3008", "Partner"]
    },

    {
        nombre: "Renault", 
        modelos: ["Alaskan", "Sandero", "Koleos", "Kangoo"]
    },

    {
        nombre: "Toyota", 
        modelos: ["Etios", "Corolla", "Hilux", "Yaris"]
    },

    {
        nombre: "Volkswagen", 
        modelos: ["Amarok", "Golf", "Tiguan", "T-cross"]
    },
]
//--------------------------------------------------------------------------------------------------------------------------

//1- Funcion para que el fondo de la pagina se ponga "Blur" cuando desplegamos el details
//--------------------------------------------------------------------------------------------------------------------------
const main = document.querySelector ("#main");
const details = document.querySelector ("#details");

details.addEventListener ("toggle", function (e) {

    if (details.open) {

        main.style.filter = "blur(5px)";
    
    } else {

        main.style.filter = "";
    }
})
//--------------------------------------------------------------------------------------------------------------------------

//2- Aquí creamos una función para poder lograr el siguiente comportamiento: La idea es poder seleccionar una marca, 
//y una vez seleccionada, poder elegir los modelos de ESA y solamente de ESA marca.
//--------------------------------------------------------------------------------------------------------------------------

//Obtenemos los select de Modelo y Marca.
const selectModelo = document.querySelector ("#selectorModelo");
const selectMarca = document.querySelector ("#selectorMarca");

//Funcion que va a agregar, segun la marca elegida, los modelos al select de Modelo.
selectMarca.addEventListener ("change", function (e) {

    if (selectModelo.length > 1) {

        for (let k = 0; k < selectModelo.length; k ++) {

            $(selectModelo).empty();
        }

        $(selectModelo).append('<option value="" disabled selected hidden>Selecciona el Modelo</option>');
    }

    for (let i = 0; i < Marcas.length; i ++) {

        if (selectMarca[selectMarca.selectedIndex].textContent == Marcas[i].nombre) {

            for (let j = 0; j < Marcas[i].modelos.length; j ++) {

                let opcion = document.createElement ('option');

                opcion.innerText = Marcas[i].modelos [j]; 
                
                selectModelo.appendChild(opcion);
            }
        }
    }
})
//--------------------------------------------------------------------------------------------------------------------------

//3- Funcionalidad para los botones de Si y No del FORM
//--------------------------------------------------------------------------------------------------------------------------

//Seleccionamos los checkBox
const checkBoxSiGNC = document.querySelector ("#inputSiGNC");
const checkBoxNoGNC = document.querySelector ("#inputNoGNC");
const checkBoxSiInfo = document.querySelector ("#inputSiInfo");
const checkBoxNoInfo = document.querySelector ("#inputNoInfo");
const checkBoxNoDolares = document.querySelector ("#inputNoDolares");
const checkBoxSiDolares = document.querySelector ("#inputSiDolares");

//En esta funcion retornamos, segun lo seleccionado, el resultado en formato String para poder plasmarlo en la información.
const establecerResultadoGnc = () => {

    if (checkBoxSiGNC.checked == false && checkBoxNoGNC.checked == false) {

        return "";
    
    } else {
        
        if (checkBoxSiGNC.checked == true) {
            
            return "Si";
        
        } else {
            
            return "No";
        }
    }
}

const establecerResultadoMembresia = () => {

    if (checkBoxSiInfo.checked == false && checkBoxNoInfo.checked == false) {

        return "";
    
    } else {
        
        if (checkBoxSiInfo.checked == true) {
            
            return "Si";
        
        } else {
            
            return "No";
        }
    }
}

const establecerResultadoDolares = () => {

    if (checkBoxSiDolares.checked == false && checkBoxNoDolares.checked == false) {

        return "";
    
    } else {
        
        if (checkBoxSiDolares.checked == true) {
            
            return "Si";
        
        } else {
            
            return "No";
        }
    }
}

//Mediante estas 2 funciones logramos que se pueda seleccionar solo una de las opciones y no las 2 a la vez.
checkBoxSiGNC.addEventListener ('click', function (e) {

    if (checkBoxNoGNC.checked == true) {
        
        checkBoxNoGNC.checked = false;
    }
    
    checkBoxNoGNC.removeAttribute ('required');
})

checkBoxNoGNC.addEventListener ('click', function (e) {

    if (checkBoxSiGNC.checked == true) {

        checkBoxSiGNC.checked = false;
    }

    checkBoxSiGNC.removeAttribute ('required');
})

checkBoxSiInfo.addEventListener ('click', function (e) {

    if (checkBoxNoInfo.checked == true) {
        
        checkBoxNoInfo.checked = false;
    }
    
    checkBoxNoInfo.removeAttribute ('required');
})

checkBoxNoInfo.addEventListener ('click', function (e) {

    if (checkBoxSiInfo.checked == true) {

        checkBoxSiInfo.checked = false;
    }

    checkBoxSiInfo.removeAttribute ('required');
})

checkBoxSiDolares.addEventListener ('click', function (e) {

    if (checkBoxNoDolares.checked == true) {
        
        checkBoxNoDolares.checked = false;
    }
    
    checkBoxNoDolares.removeAttribute ('required');
})

checkBoxNoDolares.addEventListener ('click', function (e) {

    if (checkBoxSiDolares.checked == true) {

        checkBoxSiDolares.checked = false;
    }

    checkBoxSiDolares.removeAttribute ('required');
})
//--------------------------------------------------------------------------------------------------------------------------

//4- Aqui creamos una funcion para poder, consultando una API, agregar todas las provincias de la misma a nuestro
//Select de provincias
//--------------------------------------------------------------------------------------------------------------------------
const selectProvincia = document.querySelector ("#selectorProvincia");

const agregarProvincias = () => {

    fetch ('https://apis.datos.gob.ar/georef/api/provincias')
        .then (response => response.json ())
        .then (data => {

            for (let i = 0; i < data.provincias.length; i ++) {
    
                let opcion = document.createElement ('option');
    
                opcion.innerText = data.provincias[i].nombre;
                    
                selectProvincia.appendChild(opcion);
            }
        })
        
        .catch (error => {
            alert ("Error en consumo de api", error);
        })
}

//Instanciamos la funcion, agregamos las provincias al Select.
agregarProvincias ();
//--------------------------------------------------------------------------------------------------------------------------

//Seleccionamos los precios que vamos a utilizar a continuación. 
const precioTercerosComp = document.querySelector ("#precioPlanBas");
const precioTercerosGranizo = document.querySelector ("#precioPlanMed");
const precioTercerosFranquicia = document.querySelector ("#precioPlanAlto");
const precioTotalTerceros = document.querySelector ("#precioTotalTerceros");
const precioTotalTercerosGranizo = document.querySelector ("#precioTotalTercerosGranizo");
const precioTodoRiesgo = document.querySelector ("#precioTotalTodoRiesgo");

//5- Funciones asociadas con la card del plan de Terceros Completo con Granizo. Con estas funciones buscamos darle un poco
//mas de complejidad y realismo al cotizador.
//--------------------------------------------------------------------------------------------------------------------------

//Seleccionamos ambas checkBox
const checkBoxConLimite = document.querySelector ("#conLimite");
const checkBoxSinLimite = document.querySelector ("#sinLimite");

//Funcion que retorna el resultado de lo elegido en el plan, en formato String, para poder utilizarlo en otra funcion 
//mas adelante.
const retornarCoberturaGranizo = () => {

    if (checkBoxConLimite.checked == false && checkBoxSinLimite.checked == false) {

        return "";
    
    } else {
        
        if (checkBoxConLimite.checked == true) {
            
            return "$400.000";
        
        } else {
            
            return "Sin Limite";
        }
    }
}

//Eventos que basicamente escuchan los clicks en los checkbox y dependiendo de que checkbox se trate, 
//modifican el precio del plan. Esto lo hice para darle un poco mas de funcionalidad y realismo. Tambien
//evitan de que se puedan seleccionar ambos checkbox de forma paralela y simultanea.
checkBoxSinLimite.addEventListener ('click', function (e) {

    if (checkBoxSinLimite.checked == true) {
        
        checkBoxConLimite.checked = false;

        if (precioTercerosGranizo.textContent == "$100.000" || precioTercerosGranizo.textContent == "$80.000") {

            precioTotalTercerosGranizo.textContent = "$120000";
        
        } else if (precioTercerosGranizo.textContent == "$250.000" || precioTercerosGranizo.textContent == "$230.000") {
            
            precioTotalTercerosGranizo.textContent = "$270000";
        }
    
    } else {

        checkBoxSinLimite.setAttribute = ('required', 'true');
    }
    
    checkBoxConLimite.removeAttribute ('required');
})

checkBoxConLimite.addEventListener ('click', function (e) {

    if (checkBoxConLimite.checked == true) {

        checkBoxSinLimite.checked = false;

        if (precioTercerosGranizo.textContent == "$100.000" || precioTercerosGranizo.textContent == "$120.000") {

            precioTotalTercerosGranizo.textContent = "$80000";
        
        } else if (precioTercerosGranizo.textContent == "$250.000" || precioTercerosGranizo.textContent == "$270.000") {

            precioTotalTercerosGranizo.textContent = "$230000";
        }
    
    } else {

        checkBoxConLimite.setAttribute = ('required', 'true');
    }

    checkBoxSinLimite.removeAttribute ('required');
})
//--------------------------------------------------------------------------------------------------------------------------

//6- Al igual que con las funciones anteriores, estas funciones relacionadas con el plan Todo Riesgo con Franquicia 
//buscan darle mas de complejidad y realismo al cotizador.
//--------------------------------------------------------------------------------------------------------------------------

//Seleccionamos los checkbox y precios
const checkBoxIzq = document.querySelector ("#checkboxIzq");
const checkBoxCentro = document.querySelector ("#checkboxCentro");
const checkBoxDer = document.querySelector ("#checkboxDer");

//Funcion que retorna un String segun lo elegido en los checkbox
const retornarResultadoFranquicia = () => {

    if (checkBoxIzq.checked == false && checkBoxCentro.checked == false && checkBoxDer.checked == false) {

        return "";
    
    } else {
        
        if (checkBoxIzq.checked == true) {
            
            return "$30.000";
        
        } else if (checkBoxCentro.checked == true) {
            
            return "$40.000";
        
        } else if (checkBoxDer.checked == true){

            return "50.000";
        }
    }
}

//Eventos que basicamente escuchan los clicks en los checkbox y dependiendo de que checkbox se trate, modifican 
//el precio del plan. Esto lo hice para darle un poco mas de funcionalidad y realismo. Tambien evitan de que se 
//puedan seleccionar ambos checkbox de forma paralela y simultanea. Funcionan igual que las funciones anteriores,
//las del otro plan.
checkBoxIzq.addEventListener ('click', function (e) {

    if (checkBoxIzq.checked == true) {
        
        checkBoxCentro.checked = false;
        
        checkBoxDer.checked = false;

        if (precioTercerosFranquicia.textContent == "$150.000" || precioTercerosFranquicia.textContent == "$110.000" || 
            precioTercerosFranquicia.textContent == "$100.000") {

            precioTodoRiesgo.textContent = "$120000";
        
        } else if (precioTercerosFranquicia.textContent == "$300.000" || precioTercerosFranquicia.textContent == "$260.000" || 
            precioTercerosFranquicia.textContent == "$200.000") {

            precioTodoRiesgo.textContent = "$270000";    
        }
    }
    
    checkBoxCentro.removeAttribute ('required');
    checkBoxDer.removeAttribute ('required');
})

checkBoxCentro.addEventListener ('click', function (e) {

    if (checkBoxCentro.checked == true) {
        
        checkBoxIzq.checked = false;
        
        checkBoxDer.checked = false;

        if (precioTercerosFranquicia.textContent == "$150.000" || precioTercerosFranquicia.textContent == "$100.000" || 
            precioTercerosFranquicia.textContent == "$120.000") {

            precioTodoRiesgo.textContent = "$110000";
        
        } else if (precioTercerosFranquicia.textContent == "$300.000" || precioTercerosFranquicia.textContent == "$270.000" || 
            precioTercerosFranquicia.textContent == "$250.000") {

            precioTodoRiesgo.textContent = "$260000";    
        }
    }
    
    checkBoxIzq.removeAttribute ('required');
    checkBoxDer.removeAttribute ('required');
})

checkBoxDer.addEventListener ('click', function (e) {

    if (checkBoxDer.checked == true) {
        
        checkBoxIzq.checked = false;
        
        checkBoxCentro.checked = false;

        if (precioTercerosFranquicia.textContent == "$150.000" || precioTercerosFranquicia.textContent == "$110.000" || 
            precioTercerosFranquicia.textContent == "$120.000") {

            precioTodoRiesgo.textContent = "$100000";
        
        } else if (precioTercerosFranquicia.textContent == "$300.000" || precioTercerosFranquicia.textContent == "$270.000" || 
        precioTercerosFranquicia.textContent == "$260.000") {

        precioTodoRiesgo.textContent = "$250000";    
    }
    }
    
    checkBoxCentro.removeAttribute ('required');
    checkBoxIzq.removeAttribute ('required');
})
//--------------------------------------------------------------------------------------------------------------------------

//7- Aqui buscamos darle a nuestras Cards o Planes la sensacion de que estamos seleccionando alguno de ellos.
//--------------------------------------------------------------------------------------------------------------------------

//Seleccionamos los checkbox y cada una de las cards.
const checkBoxPlanIzquierdo = document.querySelector ("#checkbox-card-izq");
const checkBoxPlanCentro = document.querySelector ("#checkbox-card-centro");
const checkBoxPlanDerecho = document.querySelector ("#checkbox-card-der");
const cardIzquierda = document.querySelector ("#card-container-izq");
const cardCentro = document.querySelector ("#card-container-centro");
const cardDerecha = document.querySelector ("#card-container-der");

//Funcionalidad a la card izquierda (Plan "Terceros Completo").
checkBoxPlanIzquierdo.addEventListener ('change', function (e) {  
    cardDerecha.style.border = "solid grey";
    checkBoxPlanDerecho.checked = false;
    checkBoxPlanDerecho.removeAttribute ('required');
    
    cardCentro.style.border = "solid grey";
    checkBoxPlanCentro.checked = false;
    checkBoxPlanCentro.removeAttribute ('required');

    checkBoxConLimite.removeAttribute ('required');
    checkBoxSinLimite.removeAttribute ('required');
    checkBoxIzq.removeAttribute ('required');
    checkBoxCentro.removeAttribute ('required');
    checkBoxDer.removeAttribute ('required');
    
    if (checkBoxPlanIzquierdo.checked == true) {

        cardIzquierda.style.border = "solid green 5px";

    } else {

        cardIzquierda.style.border = "solid grey";
        checkBoxPlanIzquierdo.setAttribute ('required', 'true');
    }
})

//Funcionalidad a la card central (Plan "Terceros Completo con Granizo").
checkBoxPlanCentro.addEventListener ('change', function (e) {  
    
    cardDerecha.style.border = "solid grey";
    checkBoxPlanDerecho.checked = false;
    checkBoxPlanDerecho.removeAttribute ('required');
    
    cardIzquierda.style.border = "solid grey";
    checkBoxPlanIzquierdo.checked = false;
    checkBoxPlanIzquierdo.removeAttribute ('required');


    checkBoxIzq.removeAttribute ('required');
    checkBoxCentro.removeAttribute ('required');
    checkBoxDer.removeAttribute ('required');
    
    if (checkBoxPlanCentro.checked == true) {

        cardCentro.style.border = "solid green 5px";

    } else {

        cardCentro.style.border = "solid grey";
        checkBoxPlanCentro.setAttribute ('required', 'true');
    }
})

//Funcionalidad a la card derecha (Plan "Todo Riesgo con Franquicia").
checkBoxPlanDerecho.addEventListener ('change', function (e) {  
    cardIzquierda.style.border = "solid grey";
    checkBoxPlanIzquierdo.checked = false;
    checkBoxPlanIzquierdo.removeAttribute ('required');
    
    cardCentro.style.border = "solid grey";
    checkBoxPlanCentro.checked = false;
    checkBoxPlanCentro.removeAttribute ('required');

    checkBoxConLimite.removeAttribute ('required');
    checkBoxSinLimite.removeAttribute ('required');
    checkBoxIzq.setAttribute ('required', 'true');
    checkBoxCentro.setAttribute ('required', 'true');
    checkBoxDer.setAttribute ('required', 'true');
    
    if (checkBoxPlanDerecho.checked == true) {

        cardDerecha.style.border = "solid green 5px";

    } else {

        cardDerecha.style.border = "solid grey";
        checkBoxPlanDerecho.setAttribute ('required', 'true');
        
    }
})

//Funcion que retorna, segun que card hayamos elegido, el nombre del plan para poder plasmarlo en la informacion.
const planSeleccionado = () => {

    if (checkBoxPlanIzquierdo.checked == true) {
        return "Terceros Completo";
    
    } else if (checkBoxPlanCentro.checked == true) {

        return "Terceros Completo con Granizo";
    
    } else if (checkBoxPlanDerecho.checked == true) {

        return "Todo Riesgo con Franquicia";
    
    } else {

        return "";
    }
}
//--------------------------------------------------------------------------------------------------------------------------

//8- Aca esta la funcion principal, la funcion que basicamente detecta cuando ocurre un cambio en el formulario y actualiza
//la informacion
//--------------------------------------------------------------------------------------------------------------------------}

//Seleccionamos todos los elementos que no hayan sido seleccionados antes
const selectAño = document.querySelector ("#selectAño");
const inputLocalidad = document.querySelector ("#inputLocalidad");
const inputMunicipio = document.querySelector ("#inputMunicipio");
const inputCodigoPostal = document.querySelector ("#inputCP");
const inputEmail = document.querySelector ("#inputEmail");
const inputCodigo = document.querySelector ("#inputCodigo");
const inputNumero = document.querySelector ("#inputTel");
const inputFecha = document.querySelector ("#inputFecha");
const detailsInfo = document.querySelector ("#details-info");
const formDatos = document.querySelector ("#formDatos");
const divCoberturasTercerosGranizo = document.querySelector ("#coberturasTercerosGranizo");
const divCoberturasTodoRiesgo = document.querySelector ("#divCoberturasTodoRiesgo");
const gamaAuto = document.querySelectorAll ("#gama");

//Funcion para que nos muestre en el details que todavia no hubo ningun dato ingresado al entrar a la pagina.
const verificarDetails = () => {
    
    if (detailsInfo.childElementCount < 1) {

        detailsInfo.innerHTML = `<p>No hay datos ingresados hasta el momento.</p>`
    }
}

//La instanciamos
verificarDetails ();

//Evento "change" del formulario. Basicamente va a identificar cuando ocurra un cambio en el formulario y va a realizar toda
//la funcionalidad desarrollada dentro.
formDatos.addEventListener ("change", function (e) {
    
    //Actualizamos la información en tiempo real.
    detailsInfo.innerHTML = `

        <h4>- Año del Vehiculo: <p>${selectAño.value}</p></h4>
        
        <h4>- Marca del Vehiculo: <p>${selectMarca.value}</p></h4>
        
        <h4>- Modelo del Vehiculo: <p>${selectModelo.value}</p></h4>
        
        <h4>- GNC: <p>${establecerResultadoGnc ()}</p></h4>

        <h4>- Provincia: <p>${selectProvincia.value}</p></h4>

        <h4>- Localidad: <p>${inputLocalidad.value}</p></h4>
        
        <h4>- Municipio: <p>${inputMunicipio.value}</p></h4>

        <h4>- CP: <p>${inputCodigoPostal.value}</p></h4>
    
        <h4>- Email: <p>${inputEmail.value}</p></h4>

        <h4>- Codigo Area: <p>${inputCodigo.value}</p></h4> 

        <h4>- Telefono: <p>${inputNumero.value}</p></h4> 

        <h4>- Fecha inicio del seguro: <p>${inputFecha.value}</p></h4> 
        
        <h4>- Plan Elegido: <p>${planSeleccionado ()}</p></h4>

        <h4>- Socio de TuSeguro: <p>${establecerResultadoMembresia ()}</p></h4>

        <h4>- Cotizacion en Dolares: <p>${establecerResultadoDolares ()}</p></h4>
        `

        //Establecemos el precio base de los planes segun la marca seleccionada.
        if ((selectMarca.value == "BMW" || selectMarca.value == "Audi" || selectMarca.value == "Alfa Romeo" || 
        selectMarca.value == "Mercedes Benz" || selectMarca.value == "Jeep") && checkBoxConLimite.checked
        == false && checkBoxSinLimite.checked == false && checkBoxIzq.checked == false
        && checkBoxCentro.checked == false && checkBoxDer.checked == false) {
            
            precioTercerosComp.textContent = "$200.000";
            precioTotalTerceros.textContent = "$200000";
            
            precioTercerosGranizo.textContent = "$250.000";
            precioTotalTercerosGranizo.textContent = "$250000";

            precioTercerosFranquicia.textContent = "$300.000";
            precioTodoRiesgo.textContent = "$300000";
                
            for (let i = 0; i < gamaAuto.length; i ++) {
                
                gamaAuto [i].textContent = "Precio base por gama del auto (Alta)";
            }
            
        
        } else if (selectMarca.value != "" && checkBoxConLimite.checked
        == false && checkBoxSinLimite.checked == false && checkBoxIzq.checked == false
        && checkBoxCentro.checked == false && checkBoxDer.checked == false) {
            
            precioTercerosComp.textContent = "$50.000";
            precioTotalTerceros.textContent = "$50000";

            precioTercerosGranizo.textContent = "$100.000";
            precioTotalTercerosGranizo.textContent = "$100000";

            precioTercerosFranquicia.textContent = "$150.000";
            precioTodoRiesgo.textContent = "$150000";

            
            for (let i = 0; i < gamaAuto.length; i ++) {
                
                gamaAuto [i].textContent = "Precio base por gama del auto (Media)";
            }
        }
        
        //Agregamos una cobertura mas a los planes de "Terceros Completo con Granizo" y "Todo Riesgo con Franquicia" segun
        //lo seleccionado en los checkbox. Utilizamos funciones creadas mas arriba.
        if (retornarCoberturaGranizo () != "") {

            divCoberturasTercerosGranizo.lastElementChild.innerHTML = `<img src="./imagenes/tilde.png" alt="">
            Daños por granizo hasta ${retornarCoberturaGranizo ()}`
        }

        if (retornarResultadoFranquicia () != "") {

            divCoberturasTodoRiesgo.lastElementChild.innerHTML = `<img src="./imagenes/tilde.png" alt="">Daños parciales por accidente con franquicia de ${retornarResultadoFranquicia ()}`
        }
})
//--------------------------------------------------------------------------------------------------------------------------

//9- Creamos 2 clases donde vamos a guardar toda la informacion ingresada en el formulario
//--------------------------------------------------------------------------------------------------------------------------
class DatosForm {

    constructor (año, marca, modelo, gnc, provincia, localidad, municipio, cp, email, numero, fecha, socio, cotizacionDolares) {

        this.año = año;
        this.marca = marca;
        this.modelo = modelo;
        this.gnc = gnc;
        this.provincia = provincia;
        this.localidad = localidad;
        this.municipio = municipio;
        this.cp = cp;
        this.email = email;
        this.numero = numero;
        this.fecha = fecha;
        this.socio = socio;
        this.cotizacionDolares = cotizacionDolares;
    }
}

class Plan {

    constructor (nombre, precio, coberturas, descuento, precioFinal) {

        this.nombre = nombre;
        this.precio = precio;
        this.coberturas = coberturas;
        this.descuento = descuento;
        this.precioFinal = precioFinal;
    }
}
//--------------------------------------------------------------------------------------------------------------------------

//10- Funcionalidad relacionada al modal que se muestra cuando hacesmos "Submit" en el form
//-----------------------------------------------------------------------------------------------------------------------
const infoTercerosComp = document.querySelector ("#infoTercerosCompleto");
const infoTercerosCompGranizo = document.querySelector ("#infoTercerosCompGranizo");
const infoTodoRiesgo = document.querySelector ("#infoTodoRiesgo");

formDatos.addEventListener ("submit", function (e) {

    let plan = new Plan (); //Inicializamos las clases

    let infoForm = new DatosForm (); //Inicializamos las clases

    e.preventDefault();

    //Creamos las clases con lo ingresado en el form
    infoForm = new DatosForm (selectAño.value, selectMarca.value, selectModelo.value, establecerResultadoGnc (), 
    selectProvincia.value, inputLocalidad.value, inputMunicipio.value, inputCodigoPostal.value, inputEmail.value,
    (inputCodigo.value + inputNumero.value), inputFecha.value, establecerResultadoMembresia (), establecerResultadoDolares ());


    if (planSeleccionado () == "Terceros Completo") {

        plan = new Plan (planSeleccionado (), precioTotalTerceros.textContent, infoTercerosComp.textContent, 0, 0);
    
    } else if (planSeleccionado () == "Terceros Completo con Granizo") {

        plan = new Plan (planSeleccionado (), precioTotalTercerosGranizo.textContent, infoTercerosCompGranizo.textContent, 0, 0);
    
    } else if (planSeleccionado () == "Todo Riesgo con Franquicia") {

        plan = new Plan (planSeleccionado (), precioTodoRiesgo.textContent, infoTodoRiesgo.textContent, 0, 0);
    }

    //Seteamos valores segun lo ingresado
    let precioSplit = plan.precio.split ('$');
    
    let precio = parseInt(precioSplit [1]);

    let descuentoSocio = 0;

    let descuentoDolar = 0;

    let tipoMoneda = "ARS";

    if (establecerResultadoMembresia () == "Si") {

        plan.descuento = precio * 0.15;

        descuentoSocio = plan.descuento;

        plan.precioFinal = precio - plan.descuento;
    }

    if (establecerResultadoDolares () == "Si") {

        fetch ('https://dolarapi.com/v1/dolares/blue')
        .then (response => response.json ())
        .then (data => {

            plan.descuento = plan.precioFinal * 0.30;

            console.log (plan.descuento);

            descuentoDolar = plan.descuento;

            plan.precioFinal = plan.precioFinal - plan.descuento;

            plan.precioFinal = Math.ceil(plan.precioFinal / data.venta);

            tipoMoneda = "USD";
        })
    }

    if (establecerResultadoDolares() == "No" && establecerResultadoMembresia () == "No") {

        plan.precioFinal = precio;
    }

    setTimeout(() => {

        modalTitle.innerHTML = `<img src="./imagenes/Spinner-2.gif" alt="">`;

        modalInfo.innerHTML = ` `;

        modalInfo.style.visibility = "hidden";

        mostrarModal();

    }, 500);
    
    let div = document.createElement ('div');

    div.setAttribute ("class", "divBoton");

    let boton = document.createElement ('button');

    boton.setAttribute ('value', "Confirmar Cotización");

    boton.innerHTML = "Confirmar Cotización";

    setTimeout (()=> {

        modalTitle.innerHTML = `
            <h1>Cotización Final:</h1>
        `
        modalInfo.style.visibility = "visible";

        modalInfo.innerHTML = `    
            <div class = "datos-form">
                <h2>- Plan Elegido:</h2>
                <p>${plan.nombre}</p>
                <h2>- Fecha de inicio del seguro:</h2>
                <p>${infoForm.fecha}</p>
                <h2>- Marca y modelo del Auto:</h2>
                <p>${infoForm.marca + " " + infoForm.modelo}</p>
                <h2>- Precio Base:</h2>
                <p>${plan.precio} (${gamaAuto[0].textContent})</p> 
                <h2>- Descuento por ser socio?:</h2>
                 <p>${establecerResultadoMembresia ()}. ($${descuentoSocio})</p>
                <h2>- Descuento por cotizacion en dolares?:</h2>
                 <p>${establecerResultadoDolares ()}. ($${descuentoDolar})</p>
                <h2>- Cotizacion Final:</h2>
                <p>$${plan.precioFinal + " " + tipoMoneda}</p>
            </div>
        `
        div.appendChild (boton);

        modalInfo.appendChild (div);

        mostrarModal ()

    }, 3000)

    boton.addEventListener ('click', function (e) {

        modal.style.display = "none";
        document.querySelector ("#header").style.zIndex = 1;
        main.style.position = "relative";
        formDatos.reset ();
        cardDerecha.style.border = "solid grey";
        cardIzquierda.style.border = "solid grey";
        cardCentro.style.border = "solid grey";
        
    })
})  
//-----------------------------------------------------------------------------------------------------------------------

//11- Funcionalidad relacionada con el modal que mostramos cuando cliqueamos el boton de mostrar cotizacion dolar
//-----------------------------------------------------------------------------------------------------------------------
const botonCotizacionDolar = document.querySelector ("#boton-cotizacion-dolar");
const modalInfo = document.querySelector ("#modal-info");
const modalTitle = document.querySelector ("#modal-title");
const botonCierre = document.querySelector ("#close-modal");
const modal = document.querySelector ("#modal-generico");

botonCotizacionDolar.addEventListener ('click', function (e) {  

    setTimeout(() => {

        modalTitle.innerHTML = `<img src="./imagenes/Spinner-2.gif" alt="">`;

        modalInfo.innerHTML = ` `;

        modalInfo.style.visibility = "hidden";

        mostrarModal();

    }, 500);
    
    
    setTimeout (() =>{

        modalTitle.innerHTML = ` <h1>COTIZACIÓN DEL DOLAR BLUE<img src="./imagenes/dolar.gif" alt=""></h1>`;

        fetch ('https://dolarapi.com/v1/dolares/blue')
        .then (response => response.json ())
        .then (data => {

            let fechaCorta = data.fechaActualizacion.split ("T");

            modalInfo.style.visibility = "visible";

            modalInfo.innerHTML = `
                <h2>Compra: $${data.compra}</h2>
                <h2>Venta: $${data.venta}</h2>
                <h2>Fecha actualizacion: ${fechaCorta [0]}</h2>`
        })
        
        .catch (error => {
            alert ("Error en consumo de api", error);
        })

        mostrarModal ();

    }, 3000) 
    
})
//-----------------------------------------------------------------------------------------------------------------------

//12- Funcion generica de mostrar modal
//-----------------------------------------------------------------------------------------------------------------------
const mostrarModal = () => {

    document.querySelector ("#header").style.zIndex = 0;

    main.style.position = "absolute";

    modal.style.display = "block";

    botonCierre.addEventListener("click", function(){

        modal.style.display = "none";
        document.querySelector ("#header").style.zIndex = 1;
        main.style.position = "relative";
    });

    window.addEventListener("click", (e) =>{

        if (e.target === modal){
            modal.style.display = "none";
            document.querySelector ("#header").style.zIndex = 1;
            main.style.position = "relative";
        }

    })
}
//-----------------------------------------------------------------------------------------------------------------------
