const API_URL = "http://localhost:8080/api/personas";

const formulario = document.getElementById("personaForm");
const tablaPersonas = document.getElementById("tablaPersonas");
const mensaje = document.getElementById("mensaje");

const inputNombre=document.getElementById("nombre");
const inputCorreo=document.getElementById("correo");
const inputDocumento=document.getElementById("documento")

let personas = [];

let personaEnEdicion=null;

obtenerPersonas();

function sanitizar(texto) {
    const div = document.createElement("div");
    div.textContent= texto;
    return div.innerHTML;
}

function mostrarMensaje(texto, tipo) {
    mensaje.textContent=texto;
    mensaje.className=tipo; //mostrar si es exitoso o error
    mensaje.style.display="block";
    
    //OCULTAR DESPUÉS DE 3 SEGUNDOS
    setTimeout(() =>{
        mensaje.style.display="none";
        mensaje.className="";
    },3000);
}

formulario.addEventListener("submit", async function(event) {
    event.preventDefault();

    const nombre=inputNombre.value.trim();
    const correo=inputCorreo.value.trim();
    const documento=inputDocumento.value.trim();

    //VALIDACIÓN
    if (!nombre || !correo || !documento) {
        mostrarMensaje("Por favor completar todos los campos.", "error");
        return;
    }
    //VALIDACIÓN DOCUMENTO
    if (!/^\d{6,12}$/.test(documento)) {
        mostrarMensaje("El documento debe tener entre 6 y 12 digitos numéricos.", "error");
        return;
    }

    //VALIDAR CORREO 
    const correoExiste = personas.some(p => p.correo === correo && p.id !==personaEnEdicion);
    if (correoExiste) {
        mostrarMensaje("Ya existe una persona registrada con ese correo.", "error");
        return;
    }

    if (personaEnEdicion !==null) {
        try {
            await axios.put(`${API_URL}/${personaEnEdicion}`, {nombre, correo, documento});
            await obtenerPersonas();

            personaEnEdicion = null;
            formulario.querySelector("button").textContent = "Guardar Persona";

            formulario.reset();
            mostrarMensaje("Persona actualizada correctamente.", "exito");
            inputNombre.focus();
        }catch (error) {
            console.error(error);
            mostrarMensaje("Error al actualizar la persona.", "error");
        }
        return;
    }




    //CREAR OBJETO DE PERSONA
    const nuevaPersona = {
        nombre: nombre,
        correo: correo,
        documento: documento,
    };


try {
    await axios.post(API_URL, nuevaPersona)
    await obtenerPersonas();

    //LIMPIAR FORMULARIO
    formulario.reset();

    //ENFOCAR PRIMER CAMPO
    inputNombre.focus();
    
  mostrarMensaje("Persona registrada correctamente.", "exito");  
} catch (error) {
    console.error(error);
    mostrarMensaje("Error al guardar en el servidor.","error");
    return;
}
});

async function obtenerPersonas() {
    try {
        const respuesta = await axios.get(API_URL)
        personas = respuesta.data;
        mostrarPersonas();
    } catch (error) {
        console.error(error);
        mostrarMensaje("Error al cargar personas.", "error");
    }
}



// =============================
// MOSTRAR PERSONAS EN LA TABLA
// =============================
function mostrarPersonas() {
 let filas = "";

    personas.forEach(function(persona) {
        filas += `
        <tr>
            <td>${sanitizar(String(persona.id))}</td>
            <td>${sanitizar(persona.nombre)}</td>
            <td>${sanitizar(persona.correo)}</td>
            <td>${sanitizar(persona.documento)}</td>
            <td>
                <button class="btn-editar" onClick="editarpersona(${persona.id})">    
            Editar</button>
                <button class="btn-eliminar" onclick="eliminarpersona(${persona.id})">
            Eliminar</button>
            </td>
            </tr>

        `;
    });
    
    tablaPersonas.innerHTML = filas;
}


// =================
// ELIMINAR PERSONA
// =================

async function eliminarpersona(id) {
    const confirmar = confirm("¿Desea eliminar esta persona?");
    if (!confirmar) return;

    try{
        await axios.delete(`${  API_URL}/${id}`);
        await obtenerPersonas();
        mostrarMensaje("Persona eliminada correctamente.", "exito");
    } catch (error) {
        console.error(error);
        mostrarMensaje("Error al eliminar la persona.","error")
    }
}


// ==============
// EDITAR PERSONA
// ==============

function editarpersona(id) {
    const persona = personas.find(p => p.id === id);
    if (!persona) {
        mostrarMensaje("No se encontró la persona a editar", "error");
        return;
    }

    //CARGAR DATOS
    inputNombre.value = persona.nombre;
    inputCorreo.value = persona.correo;
    inputDocumento.value = persona.documento;

    personaEnEdicion = id;

    formulario.querySelector("button").textContent = "Actualizar Persona";

    formulario.scrollIntoView({behavior: "smooth"})

    mostrarMensaje("Edita los datos y vuelve a guardar.", "exito");
}