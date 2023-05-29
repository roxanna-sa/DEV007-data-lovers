# Data Lovers

## Índice

* [1. Introducción](#1-introducción)
* [2. Usuarios](#2-usuarios)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Prototipos](#4-prototipos)
* [5. Interfaz](#5-interfaz)


***

# 1. Introducción

El proyecto es una visualización sencilla de un conjunto de datos, en este caso, de los personajes de la 
serie Game of Thrones transmitida por HBO y basada en los libros de George RR Martin.
Permite ordenar, filtrar, buscar y contar. 
Está pensado y diseñado para ser el apartado de personajes de un sitio web que incopore mayor información sobre el universo de GoT.

# 2. Usuarios

Los principales usuarios del proyecto son personas aficionadas a la serie pero que tienen problemas recordando
los nombres, casas o títulos de los personajes, ya que indican que al no ser comunes, se tienden a olvidar más rápido.
Además de entregar los datos mencionados anteriormente, el proyecto permite saber la fecha de nacimiento y
muerte de cada personaje. También se muestra la cantidad de miembros que pertenecen a casa del total que alberga
la data.

# 3. Historias de usuario

## Historia de usuario 1 (visualizar la data):

La usuaria gusta de ver la serie cada cierto tiempo. Ya ha terminado sus ocho temporadas en más de una ocasión,
sin embargo, considera que los nombres, apellidos y casas son muy complicados de memorizar, por lo que siempre
se encuentra preguntandole a alguien como se llama algún personaje o a qué casa pertecene algún determinado miembro.
Consultada por la idea de crear un sitio web con la data de la serie, ella se muestra muy interesada en algo
que le permita visualizar a los personajes y sus datos principales. Idealmente que pueda verla desde su dispositivo
móvil.

Para eso, decidimos crear un sitio que nos mostrara la foto de cada personaje junto con su data principal.

<img src="./img/HU1.jpg">

## Historia de usuario 2.1 (Filtrar la data):

Para las usuarias, es importante poder buscar dentro del sitio el personaje que desean revisar, sin necesidad
de tener que leer todas las tarjetas. 
Para eso, se crea una barra de búsqueda, donde mediante un input de búsqueda, el sitio devuelve las coincidencias con el texto
que se ha ingresado.

<img src="./img/HU2.1.jpg">

## Historia de usuario 2.2 (Filtrar la data):

Las usuarias también han manifestado la importancia de poder filtrar los personajes según un atributo muy 
importante en la serie: sus casas o familias. 
Para ello, se crean botones asignados a cada familia que permiten acceder únicamente a sus miembros.

<img src="./img/HU2.2.jpg">

## Historia de usuario 3 (Ordenar A-Z/Z-A):

Se ha llegado también a la conclusión de que una vez seleccionada una casa o la vista general de todos los 
personajes, es importante para las usuarias poder ordenarlos de manera alfabética, tanto ascendente como
descendente. Para este propósito, se creó un selector de orden que permite traer los personajes en el orden
elegido.

<img src="./img/HU3.jpg">

## Historia de usuario 4 (Conteo):

La usuaria quiere saber la cantidad de integrantes que tiene cada una de las casas al hacer click en su
respectivo botón. Para ello, se ha dispuesto de un contador de miembros en la parte superior del despliegue
de los mismos.

<img src="./img/HU4.jpg">


# 4. Prototipos
Basado en nuestras historias de usuario se inició el diseño de prototipos de baja fidelidad para desktop y móvil. 
Quisimos diseñar una interfaz adaptada al feedback de nuestras usuarias, como se puede ver en la siguiente imagen.
Inicialmente, se había trabajado en un prototipo que tenía una lista desplegable de las familias de la Serie GOT, y que una vez que el usuario hiciera click
en la familia que deseara ver se le desplegara otra lista en donde podría ver todos los integrantes de esa familia y a su vez poder seleccionar
de que personaje quisiera ver los detalles. 


<img src="./img/PrototipodeBajaEscritorio.jpg">

Y diseñamos nuestro protipo de baja fidelidad para móvil, en la siguiente imagen se puede apreciar como se vería la trajeta del personaje de GOT en 
dispositivo movil:

<img src="./img/PrototipoBajaMovil.jpg">

Una vez recibimos feedback de nuestros usuarios respecto a los prototipos de baja fidelidad, realizamos los de alta fidelidad en Figma y este fue el resultado:


#### Prototipo de alta fidelidad desktop
Se eliminó el select que mostraba a las familias, el diseño era imposible de realizar utilizando ese método. En cambio, se decidió transformar las opciones en botones
y asignar un scroll interno que permitiera desplazarse por las opciones.

<img src="./img/PrototipodeAlta.png">

#### Prototipo de alta fidelidad móvil
En nuestra interfaz móvil decidimos no hacer la vista inicio de página ya que el feedback recibido por parte de nuestros usuarios fue que seria mucho más
cómodo ahorrarles tanto clicks para poder interactuar con nuestro sitio. 
<img src="./img/prototipomovilfigma.png">


# 5. Interfaz

¿Estás interesado en conocer nuestro proyecto? Puedes hacer click en el siguiente enlace: [Proyecto GoT](https://roxanna-sa.github.io/DEV007-data-lovers/)






