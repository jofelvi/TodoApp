# Creador de ToDo App

Esta aplicación web permite crear, editar y administrar tareas de manera sencilla y organizada.

## Arquitectura del Proyecto

La aplicación "Creador de ToDo App" está construida utilizando una Arquitectura Modular, la cual divide la aplicación en módulos independientes y bien definidos, cada uno responsable de una funcionalidad específica. Esta arquitectura ofrece las siguientes ventajas:

- **Separación de Concierne**: Cada módulo se enfoca en una tarea específica, lo que facilita la comprensión, el mantenimiento y la reutilización del código.
- **Desarrollo Independiente**: Los desarrolladores pueden trabajar en diferentes módulos de forma simultánea sin interferir entre sí, agilizando el proceso de desarrollo.
- **Escalabilidad**: La arquitectura modular permite que la aplicación crezca y se adapte fácilmente a nuevas funcionalidades sin comprometer la estabilidad del código existente.
- **Testabilidad**: Cada módulo puede ser probado de forma aislada, simplificando la escritura y ejecución de pruebas unitarias.

## Estructura de Módulos

La estructura de módulos de la aplicación se refleja en la organización de los directorios del proyecto:

- `src/components`: Contiene componentes reutilizables para la interfaz de usuario.
- `src/features`: Cada directorio dentro de features representa un módulo, encapsulando la lógica y componentes de una funcionalidad específica.
- `src/store`: Maneja el estado global de la aplicación utilizando la librería Zustand.
- `src/utils`: Contiene funciones de utilidad compartidas entre diferentes módulos.

## Comunicación entre Módulos

Los módulos se comunican entre sí a través de interfaces bien definidas, como APIs o eventos, minimizando el acoplamiento entre ellos y promoviendo una arquitectura flexible y robusta.

En resumen, la Arquitectura Modular implementada en "Creador de ToDo App" facilita la colaboración entre desarrolladores, mejora la mantenibilidad del código y permite el crecimiento escalable de la aplicación, haciéndola una base sólida para el desarrollo de aplicaciones web complejas y eficientes.

## Características

- **Crear tareas**: Ingresa el nombre, categoría, detalles y estado de la tarea.
- **Editar tareas**: Modifica cualquier aspecto de una tarea existente.
- **Eliminar tareas**: Elimina tareas que ya no requieras.
- **Marcar como completadas**: Cambia el estado de una tarea a completada.
- **Filtro por categoría**: Visualiza tareas específicas según su categoría.
- **Almacenamiento local**: Las tareas se guardan automáticamente en tu navegador.

## Tecnologías utilizadas

- **React**: Biblioteca JavaScript para crear interfaces de usuario.
- **Zustand**: Librería de gestión de estado ligera y eficiente.
- **Ant Design**: Conjunto de componentes UI con estilo para React.
- **TypeScript**: Lenguaje de programación superconjunto de JavaScript con tipado estático.

## Instrucciones de uso

1. **Clona el repositorio**:
    ```bash
    git clone [https://github.com/jofelvi/Creador-de-ToDo-App.git](https://github.com/jofelvi/TodoApp.git)
    ```

2. **Instalar dependencias**:
    ```bash
    npm install
    ```

3. **Iniciar la aplicación**:
    ```bash
    npm start
    ```

4. **Acceder a la aplicación**:
    Abre tu navegador web y dirígete a [http://localhost:3000](http://localhost:3000).

responsive: 

![image](https://github.com/jofelvi/TodoApp/assets/31249002/42dc8aa5-d9ad-4a97-a8be-03b121c59958)

mobile: pending

web:
![image](https://github.com/jofelvi/TodoApp/assets/31249002/ee5b8888-51ff-41a1-9eaa-7990936931cb)



## Contribuyendo

¡Disfruta de la aplicación!
