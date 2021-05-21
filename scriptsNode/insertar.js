//CREAR UN ARRAY VACIO Y METER PREGUNTAS EN EL
var preguntas = [{
        "pregunta": "Los accidentes en itinere son...",
        "a": "Los que sufre un trabajador al ir o volver del trabajo",
        "b": "No es accidente desde el punto de vista legal",
        "c": "Es una dolencia profesional",
        "d": "Todas son correctas",
        "respuesta": "a",
        "explicacion": "De acuerdo con la definición legal de Accidente de Trabajo considera también accidentes de trabajo los accidente in itínere que son los que sufre el trabajador al ir al trabajo o al volver de este.",
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
        "categoria": "fol",
        "id_autor": 3,
        "modificaciones": []
    },
    {
        "pregunta": "Why is the sky blue?",
        "a": "Because roses are red.",
        "b": "Light refraction",
        "c": "Chemtrails.",
        "d": "Our lord and saviour Gabe Newell",
        "respuesta": "b",
        "explicacion": "Light refracts in the atmosphere.",
        "categoria": "ingles",
        "id_autor": 4,
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
        "categoria": "fol",
        "id_autor": 3,
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
        "apellidos": "Almi123"
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
//db.preguntas.remove({});
db.autores.remove({});
//INSERTAR LOS JUEGOS DEL ARRAY QUE HEMOS HECHO ARRIBA
db.preguntas.insert(preguntas);
db.autores.insert(autores);
//MUESTRA LOS DATOS
db.preguntas.find().pretty();
db.autores.find().pretty();

/*

{
    "pregunta": "",
    "a": "",
    "b": "",
    "c": "",
    "d": "",
    "respuesta": "",
    "explicacion": "",
    "categoria": "",
    "id_autor": ,
    "modificaciones": [
        {
            "fecha": "",
            "id_autor": "",
            "justificacion": ""
        }
    ]
}

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