-- SELECT permite seleccionar informacion de una tabla
-- queries = consultas

SELECT*FROM usuarios;
-- Guardar nuevo registro
-- INSERT INTO tabla (xolumn1, column2, etc ...) VALUES ('valor1', 'valor2'...) RESPETAR ORDEN ej
INSERT INTO usuarios (nombre, edad ,direccion_id) VALUES ('Pedro',25,2);

-- Actualizar registro
-- UPDATE TABLA set COLUMNA =VALOR1 VALOR2, COLUMNA2 = VALOR1 WHERE ID =8;
UPDATE usuarios SET nombre = 'Juanita', edad =19 WHERE id = 8;

-- Eliminar consulta
-- ELETE FROM tabla WHERE condicional;

SELECT nombre, edad FROM usuarios; -- SELECT columna, columna 2 FROM tabla; Muestra columnas especificas

SELECT nombre, edad FROM usuarios WHERE id =2 ; -- SELECT columna 1 FROM tabla WHERE conditional;

SELECT * FROM usuarios WHERE edad>25 ; -- SELECT todas las columnas FROM tabla WHERE conditional (edad >25);

SELECT * FROM usuarios WHERE nombre LIKE "Martina"; -- SELECT todas las columnas FROM tabla WHERE conditional (nombre donde sea "Martina");

SELECT * FROM usuarios WHERE nombre LIKE "Mar%"; -- SELECT todas las columnas FROM tabla WHERE conditional (nombre donde sea "Mar%", es decir nombres que emeiecen con "Mar");

SELECT * FROM usuarios WHERE nombre LIKE "AL%"; -- SELECT todas las columnas FROM tabla WHERE conditional (nombre donde sea "AL%", es decir nombres que emeiecen con "AL%") no importa sea mayuscula o min;

SELECT * FROM usuarios WHERE nombre LIKE "%o";-- SELECT todas las columnas FROM tabla WHERE conditional (nombre donde sea "AL%", es decir nombres que emeiecen con "%O") terminan con la letra o;

-- && AND 
SELECT * FROM usuarios WHERE nombre LIKE "%o" AND edad>25; -- SELECT todas las columnas FROM tabla WHERE conditional (nombre donde sea "AL%", es decir nombres que emeiecen con "%O" y edad>25) terminan con la letra o Y sea mayor a 5; 

-- || OR Una u otra se debe cumplir
SELECT * FROM usuarios WHERE nombre LIKE "%o" OR edad>25;-- SELECT todas las columnas FROM tabla WHERE conditional (nombre donde sea "AL%", es decir nombres que emeiecen con "%O" O edad>25) terminan con la letra o  O sea mayor a 5; 

SELECT * FROM usuarios WHERE nombre LIKE "%o" ORDER BY edad DESC; -- ASC / DESC es decir ORDENA POR edad DESCENDIENTE

SELECT * FROM usuarios where edad > 25 ORDER BY nombre ASC; -- ASC / DESC es decir ORDENA POR edad mayor a 25 y su nombre ASCENDIENTE

SELECT * FROM usuarios where edad > 25 ORDER BY nombre ASC LIMIT 0, 3; -- numero de inicio, limite de devolucion

-- SELECT FROM -> WHERE AND OR-> ORDER BY ASC DESC -> LIMIT inicio final

SELECT count(nombre) FROM usuarios; -- COUNT cuenta la cantidad de (x) que hay FROM la tabla