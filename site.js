let tareas = [];

 
/* function agregaritem() {
    var mostrarInput = document.getElementById("agregado");
    mostrarInput.style.display = "block";
    var mostrarBoton = document.getElementById("send");
    mostrarBoton.style.display = "block";   
} */

function mandar() {
    let tareaInput = document.getElementById("agregado").value;
    if (tareaInput == "") {
        alert("No puedes enviar una tarea vacía");
    } else {
        tareas.push({ 
            tarea: tareaInput, 
            tachada: false,
            fechaCreacion: new Date(),
            fechaTachado: null
        });
       
        document.getElementById("listToDO").innerHTML = "";
        //(borrar)

        mostrarLista();
    }
}


const mostrarLista = () => {
    let html = "";
    tareas.forEach((t, index) => {
        let tachado = t.tachada ? "text-decoration: line-through;" : "";
        html += `<li>
                    <span class="tarea" onclick="tachar(${index})"style="${tachado}">${t.tarea}</span>
                    <button class="bot" onclick="eliminarTarea(${index})">Eliminar</button>
                 </li>`;
    });
    document.getElementById("listToDO").innerHTML = html;
};

function mostrarTareaMasRapida() {
    let tareasCompletadas = tareas.filter(tarea => tarea.tachada && tarea.fechaTachado); // Filtrar solo las tareas tachadas y que tienen fecha de tachado
    if (tareasCompletadas.length > 0) {
        let tareaMasRapida = tareasCompletadas.reduce((min, tarea) => {
            if (tarea.fechaTachado - tarea.fechaCreacion < min.fechaTachado - min.fechaCreacion) {
                return tarea;
            } else {
                return min;
            }
        }, tareasCompletadas[0]);

        document.getElementById("mostrar-respuesta").innerText = `La tarea más rápida fue: "${tareaMasRapida.tarea}"`;
    } else {
        document.getElementById("mostrar-respuesta").innerText = "No hay tareas completadas aún.";
    }
}



function tachar(index) {
    tareas[index].tachada = !tareas[index].tachada;
    tareas[index].fechaTachado = tareas[index].tachada ? new Date() : null;
    mostrarLista();
}
/* tareas.forEach(function(tarea) {
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(tarea));
    listaTareas.appendChild(listItem);
  }); */


  function eliminarTarea(index) {
    tareas.splice(index,1);
    mostrarLista();
  }