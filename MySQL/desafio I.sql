SELECT * FROM esquema_fordjava.hobbies;

-- Crear 3 nuevos registros de Hobbies: Tejer, Viajar, Manualidades
-- Editar esos 3, cambiar a tus hobbies preferidos (OJO cuida de que no se repitan)
-- Consulta regresara todos hobbies que terminan en R y ordenados Z-A

INSERT INTO hobbies(actividad) VALUES ('tejer');
INSERT INTO hobbies (actividad) VALUES ('viajar');
INSERT INTO hobbies (actividad) VALUES ('manualidades');

UPDATE hobbies SET actividad = 'dormir' WHERE id=16;
UPDATE hobbies SET actividad = 'soñar' WHERE id=17;
UPDATE hobbies SET actividad = 'amanecer' WHERE id=18;

SELECT * FROM hobbies WHERE actividad LIKE "%R" ORDER BY actividad desc;
