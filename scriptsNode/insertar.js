//CREAR UN ARRAY VACIO Y METER PREGUNTAS EN EL
var preguntas = [{
        "pregunta": "¿Qué indica esta señal?",
        "a": "Obligación",
        "b": "Auxilio",
        "c": "Peligro",
        "d": "Todas son incorrectas",
        "respuesta": "c",
        "explicacion": "Es una señal de peligro",
        "imagen": 1,
        "categoria": "fol",
        "id_autor": 1,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "¿A partir de que altura es obligatoria la protección de desniveles?",
        "a": "2m",
        "b": "1,5m",
        "c": "1m",
        "d": "3m",
        "respuesta": "a",
        "explicacion": "Los desniveles cuya altura de caída sea igual o superior a 2 deben ser protegidos",
        "imagen": 2,
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "Cuál es la técnica encargada de prevenir las enfermedades profesionales?",
        "a": "La ergonomía",
        "b": "La higiene industrial",
        "c": "Seguridad en el trabajo",
        "d": "Todas son incorrectas",
        "respuesta": "b",
        "explicacion": "la Higiene Industrial es la técnica que previene la aparición de enfermedades profesionales",
        "imagen": 3,
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "De acuerdo con la Ley de PRL: ¿Cuál de las siguientes definiciones no es correcta?",
        "a": "Riesgo laboral es la posibilidad de que un trabajador o trabajadora sufra un determinado daño derivado del trabajo",
        "b": "Peligro es una fuente de posible lesión o daño para la salud",
        "c": "Los conceptos de salud y trabajo son independientes y no están relacionados",
        "d": "Todas son incorrectas",
        "respuesta": "c",
        "explicacion": "La salud laboral tiene la finalidad de mejorar las condiciones de trabajo para preservar la salud de los trabajadores",
        "imagen": 4,
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "¿Cuál de las siguientes es una obligación del trabajador?",
        "a": "Colaborar para la mejorar de la seguridad y la salud en el trabajo",
        "b": "Contribuir a cumplir las exigencias de la autoridad competente",
        "c": "Utilizar correctamente equipos y materiales",
        "d": "Todas son correctas",
        "respuesta": "d",
        "explicacion": "Las tres primeras son obligaciones del trabajador en materia de prevención de riesgos laborales",
        "imagen": 5,
        "categoria": "fol",
        "id_autor": 3,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "Los accidentes en itinere son:",
        "a": "Los que sufre un trabajador al ir al trabajo o al volver de este",
        "b": "No es accidente desde el punto de vista legal",
        "c": "Es una dolencia profesional",
        "d": "Todas son correctas",
        "respuesta": "a",
        "explicacion": "Los accidentes in itinere que son los que sufre el trabajador al ir al trabajo o al volver de este",
        "imagen": 6,
        "categoria": "fol",
        "id_autor": 1,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "¿Cuál de las siguientes no es una vía de entrada de los agentes biológicos?",
        "a": "Respiratoria",
        "b": "Dérmica",
        "c": "Digestiva",
        "d": "Auditiva",
        "respuesta": "d",
        "explicacion": "La auditiva no es una vía de entrada de los agentes biológicos",
        "imagen": 7,
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "Indica la respuesta correcta",
        "a": "Los trabajadores no necesitan recibir formación en prevención de riesgos laborales",
        "b": "La formación en materia de prevención de riesgos laborales se recibirá fuera del horario laboral y a coste del trabajador",
        "c": "El empresario deberá garantizar que cada trabajador reciba una formación teórica y práctica en materia de prevención de riesgos laborales",
        "d": "Todas son correctas",
        "respuesta": "c",
        "explicacion": "La Ley de P.R.L obliga al empresario a facilitar formación teórica y práctica en materia de prevención de riesgos laborales, dentro de la jornada laboral y de forma gratuita para el trabajador",
        "imagen": 8,
        "categoria": "fol",
        "id_autor": 3,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "¿Qué es un Plan de Emergencia?",
        "a": "Son personas especialmente entrenadas y organizadas para la actuación en situación de evacuación de un edificio",
        "b": "Son la secuencia de acciones a desarrollar para el control inicial de las emergencias",
        "c": "Es una forma de organizar la salida del trabajo al finalizar la jornada laboral",
        "d": "Todas son incorrectas",
        "respuesta": "b",
        "explicacion": "Un plan de emergencia consiste en establecer una serie de actuaciones encaminadas a eliminar o disminuir los daños a personas y bienes derivados de la activación de un riesgo",
        "imagen": 9,
        "categoria": "fol",
        "id_autor": 1,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "¿En España, quién encomienda a los poderes públicos, velar por la seguridad e higiene en el trabajo?",
        "a": "La Constitución Española",
        "b": "Seguridad e Higiene en el Trabajo",
        "c": "La Comunidad Autónoma respectiva",
        "d": "Ninguna es correcta",
        "respuesta": "a",
        "explicacion": "El artículo 40.2 de la Constitución Española encomienda a los poderes públicos, como uno de los principios rectores de la política social y económica, velar por la seguridad e higiene en el trabajo",
        "imagen": 10,
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": [{
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }]
    },
    {
        "pregunta": "The character Mario has appeared in lots of video games, but his name hasn't always been Mario. What was his original name?",
        "a": "Ossan",
        "b": "Plumber Guy",
        "c": "Martin",
        "d": "Red guy",
        "respuesta": "a",
        "explicacion": "",
        "imagen": 1,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "What was the first video game ever to be played in space?",
        "a": "Tetris",
        "b": "World of warcraft",
        "c": "Pong",
        "d": "Pac-Man",
        "respuesta": "a",
        "explicacion": "",
        "imagen": 2,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "Everyone knows that Sonic is a hedgehog, but he didn't start out that way. What animal was Sonic originally supposed to be?",
        "a": "A monkey",
        "b": "An armadillo",
        "c": "A porcupine",
        "d": "A rabbit",
        "respuesta": "d",
        "explicacion": "",
        "imagen": 3,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "What character inspired the look of the character Link in The Legend of Zelda?",
        "a": "Santa’s gnome",
        "b": "Peter pan",
        "c": "Hawkeye",
        "d": "Yoda",
        "respuesta": "b",
        "explicacion": "",
        "imagen": 4,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "There's a lot of unusual sounds in the video game Minecraft. What animal was recorded to make the sound of the ‘ghast’?",
        "a": "A peacock",
        "b": "A cat",
        "c": "A rat",
        "d": "A baboon",
        "respuesta": "b",
        "explicacion": "",
        "imagen": 5,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "From which game is this image from?",
        "a": "Ratchet & Clank",
        "b": "Uncharted",
        "c": "Bioshock",
        "d": "Dead Space",
        "respuesta": "c",
        "explicacion": "",
        "imagen": 6,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "From which game is this icon from?",
        "a": "Dragon Ball: Budokai Tenkaichi 3",
        "b": "Magic The Gathering: Arena",
        "c": "World of Warcraft",
        "d": "Monster Hunter",
        "respuesta": "d",
        "explicacion": "",
        "imagen": 7,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "What is the name of Solid Snake’s brother?",
        "a": "Solid Cobra",
        "b": "Gas Snake",
        "c": "Liquid Snake",
        "d": "Plasma Snake",
        "respuesta": "c",
        "explicacion": "",
        "imagen": 8,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "What is the name of the main character of Grand Theft Auto 4?",
        "a": "Alberto Chicote",
        "b": "Marshall Mathers",
        "c": "Trevor Philips",
        "d": "Nico Belic",
        "respuesta": "d",
        "explicacion": "",
        "imagen": 9,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "Which game of the Assassin’s Creed series takes place in ptolemaic Egypt?",
        "a": "Assassin’s Creed: Origins",
        "b": "Assassin’s Creed: II",
        "c": "Assassin’s Creed: Brotherhood",
        "d": "Assassin’s Creed: Odyssey",
        "respuesta": "a",
        "explicacion": "",
        "imagen": 10,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "What is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?",
        "a": "Yoshi",
        "b": "Peach",
        "c": "Rapunzel",
        "d": "Daisy",
        "respuesta": "b",
        "explicacion": "",
        "imagen": 11,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "Which game of 2009 allows players to choose between being heroic or MacGrath’s newly-acquired electrical powers?",
        "a": "Splatoon",
        "b": "Bioshock",
        "c": "InFamous",
        "d": "Sunset Overdrive",
        "respuesta": "c",
        "explicacion": "",
        "imagen": 12,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "‘Kingdom Of Hyrule’ is the main setting for which classic video game franchise?",
        "a": "The Legend of Zelda",
        "b": "Dragon age",
        "c": "World of Warcraft",
        "d": "Fable",
        "respuesta": "a",
        "explicacion": "",
        "imagen": 13,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "What language do The Sims Characters speak?",
        "a": "English",
        "b": "Simic",
        "c": "Monklesh",
        "d": "Simlish",
        "respuesta": "d",
        "explicacion": "imagenes/ingles/14.png",
        "imagen": 14,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "What does “GG” mean?",
        "a": "General Gathering",
        "b": "Good Game",
        "c": "Give Grenades",
        "d": "Going Ghost",
        "respuesta": "b",
        "explicacion": "",
        "imagen": 15,
        "categoria": "ingles",
        "id_autor": 4,
        "modificaciones": []
    }
];

var autores = [{
        "_id": 1,
        "user": "jonpu",
        "pwd": "Almi123",
        "nombre": "Jon",
        "apellidos": "Puriarte"
    },
    {
        "_id": 2,
        "user": "david",
        "pwd": "Almi123",
        "nombre": "David",
        "apellidos": "Mardaras"
    },
    {
        "_id": 3,
        "user": "lorenzo",
        "pwd": "Almi123",
        "nombre": "Mikel",
        "apellidos": "Looreenzo"
    },
    {
        "_id": 4,
        "user": "jaime",
        "pwd": "Almi123",
        "nombre": "Jaime",
        "apellidos": "a"
    },
    {
        "_id": 5,
        "user": "a",
        "pwd": "a",
        "nombre": "mongoa",
        "apellidos": "a(mongo)a"
    }
];

//CONECTARSE A LA BASE DE DATOS
db = connect("localhost:27017/admin");
//CONECTARSE AL USUARIO DE MONGODB
db.auth('almi', 'Almi123');
//CONECTARSE A LA BASE DE DATOS JUEGALMI
db = db.getSiblingDB('t4irudi');
//BORRAR TABLAS PREVIAS ANTES DE INSERTAR
db.preguntas.remove({});
db.autores.remove({});
//INSERTAR LOS JUEGOS DEL ARRAY QUE HEMOS HECHO ARRIBA
db.preguntas.insert(preguntas);
db.autores.insert(autores);
//MUESTRA LOS DATOS
db.preguntas.find().pretty();
db.autores.find().pretty();

/*

{
    "pregunta": "Que indica esta señal:",
    "a": "Obligación",
    "b": "Auxilio",
    "c": "Peligro",
    "d": "Todas son incorrectas",
    "respuesta": "c",
    "explicacion": "Es una señal de peligro",
    "imagen": "imagenes\fol\i1.png",
    "categoria": "fol",
    "id_autor": 1,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "A partir de que altura es obligatoria la protección de desniveles?",
    "a": "2m",
    "b": "1,5m",
    "c": "1m",
    "d": "3m",
    "respuesta": "a",
    "explicacion": "Los desniveles cuya altura de caída sea igual o superior a 2 deben ser protegidos",
    "imagen": "imagenes\fol\i2.png",
    "categoria": "fol",
    "id_autor": 2,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "Cuál es la técnica encargada de prevenir las enfermedades profesionales?",
    "a": "La ergonomía",
    "b": "La higiene industrial",
    "c": "Seguridad en el trabajo",
    "d": "Todas son incorrectas",
    "respuesta": "b",
    "explicacion": "la Higiene Industrial es la técnica que previene la aparición de enfermedades profesionales",
    "imagen": "imagenes\fol\i3.png",
    "categoria": "fol",
    "id_autor": 2,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "De acuerdo con la Ley de PRL: ¿Cuál de las siguientes definiciones no es correcta?",
    "a": "Riesgo laboral es la posibilidad de que un trabajador o trabajadora sufra un determinado daño derivado del trabajo",
    "b": "Peligro es la fuente de posible lesión o daño para la salud",
    "c": "Los conceptos de salud y trabajo son independientes y no están relacionados",
    "d": "Todas son incorrectas",
    "respuesta": "c",
    "explicacion": "La salud laboral tiene la finalidad de mejorar las condiciones de trabajo para preservar la salud de los trabajadores o trabajadoras",
    "imagen": "imagenes\fol\i4.png",
    "categoria": "fol",
    "id_autor": 2,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "Cuál de las siguientes es una obligación del trabajador?",
    "a": "Colaborar para la mejora de la seguridad y la salud en el trabajo",
    "b": "Contribuir a cumplir las exigencias de la autoridad competente",
    "c": "Utilizar correctamente equipos y materiales",
    "d": "Todas son correctas",
    "respuesta": "d",
    "explicacion": "Las tres primeras son obligaciones del trabajador en materia de prevención de riesgos laborales",
    "imagen": "imagenes\fol\i5.png",
    "categoria": "fol",
    "id_autor": 3,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "Los accidentes en itinere son:",
    "a": "Los que sufre un trabajador al ir al trabajo o al volver de este",
    "b": "No es accidente desde el punto de vista legal",
    "c": "Es una dolencia profesional",
    "d": "Todas son correctas",
    "respuesta": "a",
    "explicacion": "los accidentes in itinere que son los que sufre el trabajador al ir al trabajo o al volver de este",
    "imagen": "imagenes\fol\i6.png",
    "categoria": "fol",
    "id_autor": 1,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "Cuál de las siguientes no es una vía de entrada de los agentes biológicos?",
    "a": "Respiratoria",
    "b": "Dérmica",
    "c": "Digestiva",
    "d": "Auditiva",
    "respuesta": "a",
    "explicacion": "La auditiva no es una vía de entrada de los agentes biológicos",
    "imagen": "imagenes\fol\i7.png",
    "categoria": "fol",
    "id_autor": 2,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "Indica la respuesta correcta",
    "a": "Los trabajadores no necesitan recibir formación en prevención de riesgos laborales",
    "b": "La formación en materia de prevención de riesgos laborales se recibirá fuera del horario laboral y a coste del trabajador",
    "c": "El empresario deberá garantizar que cada trabajador reciba una formación teórica y práctica en materia de prevención de riesgos laborales",
    "d": "Todas son correctas",
    "respuesta": "c",
    "explicacion": "La Ley de P.R.L obliga al empresario a facilitar formación teórica y práctica en materia de prevención de riesgos laborales, dentro de la jornada laboral y de forma gratuita para el trabajador",
    "imagen": "imagenes\fol\i8.png",
    "categoria": "fol",
    "id_autor": 3,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "¿Qué es un Plan de Emergencia?",
    "a": "Son personas especialmente entrenadas y organizadas para la actuación en situación de evacuación de un edificio",
    "b": "Son la secuencia de acciones a desarrollar para el control inicial de las emergencias",
    "c": "Es una forma de organizar la salida del trabajo al finalizar la jornada laboral",
    "d": "Todas son incorrectas",
    "respuesta": "b",
    "explicacion": "Un plan de emergencia consiste en establecer una serie de actuaciones encaminadas a eliminar o disminuir los daños a personas y bienes derivados de la activación de un riesgo",
    "imagen": "imagenes\fol\i9.png",
    "categoria": "fol",
    "id_autor": 1,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
},
{
    "pregunta": "¿En España, quién encomienda a los poderes Públicos, velar por la seguridad e higiene en el trabajo?",
    "a": "La Constitución Española",
    "b": "Seguridad e Higiene en el Trabajo",
    "c": "La Comunidad Autónoma respectiva",
    "d": "Ninguna es correcta",
    "respuesta": "a",
    "explicacion": "El artículo 40.2 de la Constitución Española encomienda a los poderes públicos, como uno de los principios rectores de la política social y económica, velar por la seguridad e higiene en el trabajo",
    "imagen": "imagenes\fol\i10.png",
    "categoria": "fol",
    "id_autor": 2,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
}







{
        "pregunta": "Los accidentes en itinere son...",
        "a": "Los que sufre un trabajador al ir o volver del trabajo",
        "b": "No es accidente desde el punto de vista legal",
        "c": "Es una dolencia profesional",
        "d": "Todas son correctas",
        "respuesta": "a",
        "explicacion": "De acuerdo con la definición legal de Accidente de Trabajo considera también accidentes de trabajo los accidente in itínere que son los que sufre el trabajador al ir al trabajo o al volver de este.",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 1,
        "modificaciones": []
    },
    {
        "pregunta": "Señale cual de las siguientes afirmaciones no es correcta:",
        "a": "La Ley de Prevención no es de aplicación en el ámbito de la Policía, seguridad y resguardo aduanero.",
        "b": "El principal derecho que poseen los trabajadores en materia de prevención es una protección eficaz en materia de seguridad y salud en el trabajo.",
        "c": "Los trabajadores no tienen la obligación de velar por su propia seguridad y salud en el trabajo ni tampoco por la de sus compañeros.",
        "d": "Todas son incorrectas",
        "respuesta": "c",
        "explicacion": "La Ley de Prevención obliga a todos los trabajadores a velar por su propia seguridad y salud en el trabajo y también por la de sus compañeros, mediante el cumplimiento de las medidas de prevención adoptadas.",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": []
    },
    {
        "pregunta": "Señale la respuesta correcta:",
        "a": "El ruido es un agente químico cuya vía principal de entrada en el organismo es la inhalatoria o por respiración. ",
        "b": "Para evitar el riesgo por contacto eléctrico solo se puede utilizar equipos de protección individual.",
        "c": "La carga de trabajo son los requerimientos psicofísicos a los que se ve sometida la persona a lo largo de la jornada laboral.",
        "d": "Todas son correctas",
        "respuesta": "c",
        "explicacion": "La carga de trabajo Se define como el conjunto de requerimientos psicofísicos a los que se ve sometida la persona a lo largo de la jornada laboral. Cuando el trabajo es muscular se habla de carga física; si, por el contrario, supone un mayor esfuerzo intelectual, se habla de carga mental.",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 3,
        "modificaciones": []
    },
    {
        "pregunta": "testP",
        "a": "testA",
        "b": "testB",
        "c": "testC",
        "d": "testD",
        "respuesta": "testR",
        "explicacion": "testE",
        "imagen": "",
        "categoria": "test",
        "id_autor": 1,
        "modificaciones": []
    },
    {
        "pregunta": "¿Qué son las tetanizaciones?",
        "a": "Es el movimiento anárquico del corazón que impide el envío eficaz de sangre por todo el organismo.",
        "b": "Son los movimientos o contracturas incontroladas de algunos músculos al paso de la corriente.",
        "c": "Es el fallecimiento de una persona producido por un accidente eléctrico.",
        "d": "Es la infección por tetanos",
        "respuesta": "b",
        "explicacion": "no lo se mann",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": []
    },
    {
        "pregunta": "¿Cuáles son los principales peligros para un quemado?",
        "a": "La hipotermia.",
        "b": "La infección bacteriana.",
        "c": "Las dos primeras son correctas.",
        "d": "Todas son incorrectas.",
        "respuesta": "c",
        "explicacion": "Mis disculpas buen señor pero no ha adquirido este DLC, puede adquirirlo aqui por tan solo 30,50€",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 3,
        "modificaciones": []
    },
    {
        "pregunta": "¿Por debajo de qué temperatura se produce parada cardiorrespiratoria?",
        "a": "28 grados.",
        "b": "34 grados.",
        "c": "30 grados.",
        "d": "24 grados.",
        "respuesta": "a",
        "explicacion": "Si",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 4,
        "modificaciones": []
    },
    {
        "pregunta": "Cuando se produce necrosis por frío, estamos hablando de:",
        "a": "Congelaciones de primer grado.",
        "b": "Congelaciones de segundo grado.",
        "c": "Congelaciones de tercer grado.",
        "d": "Congelaciones de cuarto grado.",
        "respuesta": "c",
        "explicacion": "no la tengo",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 1,
        "modificaciones": []
    },
    {
        "pregunta": "Ante un cuerpo extraño en el oído con sangrado interno debemos:",
        "a": "Taponar la salida de sangre o líquido.",
        "b": "No taponar la salida de sangre o líquido.",
        "c": "Echar líquido en el oído.",
        "d": "Soplar en el oído.",
        "respuesta": "b",
        "explicacion": "alakuapark",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 2,
        "modificaciones": []
    },
    {
        "pregunta": "¿Qué posición es adecuada para pacientes hipotensos?",
        "a": "Semisentado.",
        "b": "Posición de Trendelemburg.",
        "c": "Completamente erguido.",
        "d": "Posición anti-Trendelemburg.",
        "respuesta": "b",
        "explicacion": "kk",
        "imagen": "",
        "categoria": "fol",
        "id_autor": 3,
        "modificaciones": []
    },



{
    
    "_id": ,
    "user": "",
    "pwd": "",
    "nombre": "",
    "apellidos": ""
}

"Distintas categorias":
"fol",
"ingles"
*/
