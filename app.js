let personas = [];
function agregarPersona(nombre, edad) {
    personas.push({ nombre, edad });
    actualizarTabla();

function mostrarPersonas() {
        const tablaContainer = document.querySelector('#tablaPersonas');
        tablaContainer.innerHTML = '';    

        personas.forEach((persona, index) => {
            const fila = document.createElement('div');
            fila.className = 'persona-item';

            const columnaNombre = document.createElement('div');
            columnaNombre.textContent = persona.nombre;
            columnaNombre.className = 'persona-nombre';
            fila.appendChild(columnaNombre);
        
            const columnaEdad = document.createElement('div');
            columnaEdad.textContent = persona.edad;
            columnaEdad.className = 'persona-nombre';
            fila.appendChild(columnaEdad);
        
            const columnaAcciones = document.createElement('div');
            columnaAcciones.className = 'persona-acciones';
        
            const botonActualizar = document.createElement('button');
            botonActualizar.textContent = 'Actualizar';
            botonActualizar.addEventListener('click', () => {
              const nuevoNombre = prompt('Ingrese el nuevo nombre:');
              const nuevaEdad = parseInt(prompt('Ingrese la nueva edad:'));
              actualizarPersona(index, nuevoNombre, nuevaEdad);
            });
            columnaAcciones.appendChild(botonActualizar);
        
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => {
              eliminarPersona(index);
            });
            columnaAcciones.appendChild(botonEliminar);
        
            fila.appendChild(columnaAcciones);
        
            tablaContainer.appendChild(fila);
          });
        }    