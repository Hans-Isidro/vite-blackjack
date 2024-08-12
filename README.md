# BlackJack Vite

pasos para ejecutar un proyecto

1. Clonar repositorio
2. Ejecutar ```npm install``` Para reconstruir o instalar los modulos
3. Correr el devServer ```npm run dev```
4. Abrir el proyecto presionando Ctrl + click en el ```localhost:```

## Produccion

1. Ejecutar ```npm run build``` Pra crear el 'dist' 
2. Tomar la carpeta ```dist``` y desplegarla

### Otros pasos: para crearun usuario en Git

1. Ejecutar ```git config --global user.name " "```
2. Ejecutar ```git config --global user.email "[email address]"```
3. Ejecutar ```git config --global color.ui auto```

#### tomar una captura
1. Ejecutar ```git init```
2. Ejecutar ```git add .```
3. Ejecutar ```git commit -m "primer commit"``` permite tomar una captura
4. Ejecutar ```git commit -am ""``` esto simplifica el add . y el commit
4. Ejecutar si es necesario ```git checkout -- .``` permite recuperar archivos o codigos borrados

##### Desplegar a GitHub
1. Ejecutar ```git remote add origin https://github.com/......git``` esto varia dependiendo del proyecto
2. Ejecutar ```git branch -M main```
3. Ejecutar ```git push -u origin main``` para subir el proyecto

###### Crear una rama
1. Ejecutar ```git checkout -b nombre-de-la-rama``` esto crea la rama
2. Ejecutar ```git checkout [nombre de la rama principal o subrama]``` esto direcciona a la rama principal o la subrama
3. Ejecutar ```git merge [nombre de la subrama]``` esto es para unir la rama hija ala rama principal
4. Ejecutar ```git branch -d [nombre de la subrama]``` esto es para eliminar una subrama