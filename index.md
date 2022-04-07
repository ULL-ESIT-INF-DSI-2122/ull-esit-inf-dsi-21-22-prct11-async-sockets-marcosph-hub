## Informe Práctica 7: Modelo de datos de un sistema de información que permite almacenar una biblioteca musical
Para el desarrollo de esta práctica se ha contado con 6 clases y un **index.ts**, que será nuestro fichero principal. Además se ha dividido nuestro código fuente en varios fichceros, en nuestro caso se ha usado el **módulos ES**.

### Explicación 
En **index.ts** se crean los objetos de las clases, es decir, es el que contiene los **import** de todas las clases.

### Clases
Cada clase está situada en el directorio **src/clases/**:

- Géneros Musicales
- Canción
- Artistas
- Grupos 
- Álbum 
- Playlist

#### Clase Géneros Musicales
La clase ```GenerosMusicales()``` recibe en primera instancia el nombre del **género musical** para posteriormente autocompletarse mediante el método ```construirGenero()```. 

Su **constructor** consta de:
- **nombreGenero** de tipo *string* que recibe el *nombre* del género en cuestión.

Después de construir el objeto, se agregarán los siguientes elementos mediente el método **construirGenero()**:
- **grupos** array de objetos de la clase ```Grupos()```.
- **artistas** array de objetos de la clase ```Artistas()```.
- **albumes** array de objetos de la clase ```Album()```.
- **canciones** array de objetos de la clase ```Cancion()```.

Por último, contiene los **getter** y **setter** de cada elemento para acceder y/o modificar a los elementos del objeto cuando se cree de esta clase. 

### Clase Canción
La clase ```Cancion()``` será nuestra **clase principal**, ya que es la que menos dependencia con respecto a las otras clases tiene. Su **constructor** consta de:
- **nombre** de tipo *string* cuyo contenido será el nombre de la canción.
- **autor** de tipo *string* que contiene el nombre del autor de la canción.
- **duración** de tipo *string* que contiene la duración de la canción en formato *minutos:segundos*.
- **género** de tipo *array de GenerosMusicales* que contienen los géneros musicales de la canción.
- **single** de tipo *boolean* que recibe un **true** en caso afirmativo y un **false** en caso contrario, es decir si la canción pertenece a un álbum o no.
- **numReproducciones** de tipo *number* que recibe el total de las reproducciones de la canción. En nuestro caso, se han recogido los datos mediante las visualizaciones de las canciones de los canales oficiales de **YouTube**.

En el **constructor**, se realiza el siguiente bucle **forEach**:

```typescript 
constructor(private nombre: string, private autor: string, private duracion: string, 
    private genero: GenerosMusicales[], private single: boolean, private numReproducciones: number){
      genero.forEach(element => {
        element.setCanciones(this);
      });
}
```
Este bucle se realiza para añadir la **canción** a los **géneros musicales**.

En cuanto a los métodos, destacar que se encuentra el ```getDuracionSecs()```, que devuelve el total de **segundos** que dura la canción, para que luego, en la clase ```Playlist()```, en el método ```getDuracion()``` pasar el total de los segundos de varias canciones a un formato de **horas minutos y segundos**.

Por último contiene los **getter** y **setter** de cada elemento para acceder y/o modificar a los elementos del objeto cuando se cree de esta clase.
En el caso de ```getGeneroMusical()```, lo realizamos de la siguiente manera:

```typescript
getGeneroMusical(){
  let generos: string[] = [];
  this.genero.forEach(element => {
      generos.push(element.getNombreGenero());
  });
  return generos;
}
```
Para este **getter**, se crea un *array* de *strings* vacío y se le añaden los nombres únicamente del género, no el objeto entero. Por otro lado, para el **setter** de ```setGeneroMusical()``` tenemos:

```typescript
setGeneroMusical(genero: GenerosMusicales[]){
  this.genero = [];
  this.genero = genero;
}
```
Primero se vacía el **array** y se le añade nuevamente los objetos del tipo **GeneroMusical**.

### Clase Artistas
Al igual que la clase ```GenerosMusicales()```, la clase ```Artistas()``` tiene un **constructor** y un método **construirArtista()**.

El **constructor** consta de:
- **nombreArtista** de tipo *string* que recibe el **nombre** del artista únicamente. Esto se hace para que se puedan crear objetos artista solo con el **nombre**, ya que hay **grupos** cuyos componentes son **artistas**, de los cuales solo se quiere conocer el **nombre**.

Después de construir el objeto, se agregarán los siguientes elementos mediente el método **construirArtista()**:
- **grupos** array de objetos de la clase ```Grupos()```.
- **generos** array de objetos de la clase ```GenerosMusicales()```.
- **albumes** array de objetos de la clase ```Album()```.
- **canciones** array de objetos de la clase ```Cancion()```.
- **oyentes** number con los *oyentes mensuales* del **artista**, que es la suma de los oyentes mensuales de los grupos en lo que ha participado y su propio trabajo individual.

El método ```construirArtista()``` se ha creado con el fin de diferenciar entre los **cantantes** de un **grupo** y los **baterías**, **guitarristas**, etc. para ello  ```construirArtista()``` es para crear a los cantantes o artistas **principales**:

```typescript 
construirArtista( canciones: Cancion[], oyentes: number){
		this.canciones = canciones;
		this.setOyentes(oyentes);
		let auxGeneroCanciones: GenerosMusicales[];

		this.canciones.forEach(element => {
			auxGeneroCanciones = element.getGenero();
			auxGeneroCanciones.forEach(elemento => {
				let contador: number = 0;
				for(let i = 0; i < this.generos.length; i++){
					if (elemento === this.generos[i]){
						contador++;
					}
				}
				if (contador === 0){
					this.generos.push(elemento);					
					contador = 0;
				}	
				contador = 0;
			});
		});
		this.generos.forEach(element => {
			element.setArtistas(this);
		});
	}
```

Finalmente añade las **canciones** y los **oyentes mensuales** del artista.

```typescript 
getGrupos(){
  let grupos_: string[] = [];
  this.grupos.forEach(element => {
    grupos_.push(element.getNombreGrupo());
  });
  return grupos_;
}
```
Para los primeros casos, se crea un *array* de *strings* vacío, que devuelve el nombre de los **grupos** o **generos** o **albumes**.

```typescript 
setGrupos(grupo: Grupos[]){
		this.grupos = []
		this.grupos = grupo;
	}
```
Como en casos anteriores, primero se borra el contenido del *array* de la **clase** y luego se le añaden los nuevos objetos.

```typescript 
setOyentes(oyentes: number){
  let oyentesgrupales: number = 0;
  for(let i: number = 0; i < this.getGrupoSize(); i++){
    oyentesgrupales = oyentesgrupales + this.grupos[i].getOyentes();
  }
  this.oyentes = oyentes + oyentesgrupales;
}
```
En este caso hace la suma de los **oyentes** mencionada anteriormente.

### Anotaciones y conclusiones

![Imagen liveshare](./assets/images/liveshare.png)
