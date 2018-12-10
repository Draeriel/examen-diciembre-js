# examen-diciembre-js

Rick y Morty se mueven entre distintas dimensiones disparando una pistola de portales mientras son perseguidos por clones de s� mismos.

Jerry conoce a Dofous-Rick, que es una mezcla entre �l mismo y Rick.

Instrucciones
Crea un repositorio en GitHub.

Realiza commits peri�dicamente mientras avanzas en el desarrollo de la aplicaci�n y publica tu soluci�n en el repo creado en GitHub. Sin estos dos requisitos, el examen no se corrige.

No olvides configurar git en tu equipo para que el autor de los commits seas t�.

Env�ame tu proyecto comprimido en un ZIP a gelpiorama@gmail.com

Divide el proyecto en los m�dulos que estimes necesarios para garantizar la modularidad, la reutilizaci�n y el testing de los componentes.

Programa principal y casos test
El script principal main.js est� compuesto por los test que de cada clase /funci�n se proponen.

En cada una de las secciones del main.js escribe el c�digo necesario para pasar los casos test de dicha secci�n. Este c�digo invocar� a los m�dulos con las funciones que necesites.

Historias de usuario
Personajes
Rick
Crea al objeto Rick de la Tierra, el prototipo de todos los dem�s.
Tiene un identificador id con valor C-137
Tiene altas frecuencias cerebrales.
Cuando habla dice "Es Rick-d�culo!".
dispara la pistola de portales o portal gun.
Es el prototipo del resto de Ricks.
Aseg�rate de que es �nico.
Morty
Crea al objeto Morty.
Tiene un id con valor "earthMorty".
Emite bajas frecuencias cerebrales.
Cuando habla dice "Oohh man!".
Su partner (compa�ero) es el Rick de la Tierra.
Es el prototipo del resto de Morties.
Aseg�rate de que es �nico.
Jerry
Crea al objeto Jerry.
Tiene un id con el valor "Jerry".
Posee una colecci�n de 4 monedas de R2-D2 en las que figura la inscripci�n "R2-D2". Las monedas son string.
Encapsula el acceso a la colecci�n de monedas con una funci�n get.
Cuando habla dice "Tengo una colecci�n de monedas antiguas raras!". V�deo 1:54.
Aseg�rate de que es �nico.
Clones
Los clones de Rick no pueden tener su mismo id y entre ellos ha de ser distinto.
Cada rick-clon tiene como id un n�mero mayor que 137 que se genera autom�ticamente.
Cada clon de Morty ha de tener como partner a un Rick.
Mundos y dimensiones
El universo
Los rick-clones se mueven por los distintos mundos y dimensiones pero todos forman parte del mismo universo.

Crea un objeto JavaScript universo al que ir�s a�adiendo todas las dimensiones y mundos por las que pasar�n Rick y Morty. Lee el ep�grafe 7.11 Array-Like Objects del libro del rinoceronte para la cuesti�n de la longitud ;)

Por cada mundo o dimensi�n, crea un Array que contenga a todos los personajes que accedan a �l (cada personaje es un objeto).

Crea la primera dimensi�n, el Array mundo tierra, mete en �l a los tres objetos que has creado (Rick, Morty y Jerry) y a��delo al objeto universo.

The portal gun
Cada vez que Rick dispara la pistola de portales, se crea el acceso a una nueva dimensi�n / mundo (un Array para nosotros). Esa dimensi�n se a�ade al universo (y se actualiza su longitud). V�deo 5:41.

Cuando Rick, Morty y sus perseguidores cruzan el portal, has de eliminarlos del mundo actual y meterlos en el nuevo array mundo. Recuerda que siempre est�n en el objeto universo. V�deo 5:41.

Posee una funci�n scan que lista el historial de dimensiones por las que ha pasado su propietario de la m�s reciente a la m�s antigua. V�deo 4:45.

Cada dimensi�n es un string con su nombre.
La funci�n scan usa la funci�n get historial() para obtener el array de dimensiones.
Cruzando dimensiones
Es necesario que programes una funci�n cruzarDimension para ser reutilizada cada vez que un personaje cruza de dimensi�n.

Puedes situarla en aquel componente que estimes m�s adecuado.

Doofus Rick
Es una mezcla entre Jerry y un clon de Rick, de modo que tiene todas las propiedades de ambos.
Las propiedades que comparten se quedan con el valor de las de Jerry.
Tiene el id "J-19-Z7".