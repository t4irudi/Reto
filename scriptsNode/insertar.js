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
        "id_autor": 1
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
        "id_autor": 2
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
        "id_autor": 2
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
        "id_autor": 2
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
        "id_autor": 3
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
        "id_autor": 1
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
        "id_autor": 2
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
        "id_autor": 3
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
        "id_autor": 1
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
        "id_autor": 2
    },
    {
        "pregunta": "La definición legal de accidente es:",
        "a": "Toda lesión corporal que el trabajador sufra con ocasión o a consecuencia del trabajo que ejecute por cuenta ajena.",
        "b": "Como todo suceso anormal no querido, no deseado y no programado, que se presenta de forma inesperada, que interrumpe la continuidad del trabajo y que puede causar lesiones a los trabajadores y trabajadoras.",
        "c": "Los accidentes de trabajo no se contemplan en prevención de riesgos laborales.",
        "d": "Todas son incorrectas.",
        "respuesta": "a",
        "explicacion": "De acuerdo con Texto Refundido de la Ley General de Seguridad Social lo define como «toda lesión corporal que el trabajador sufra con ocasión o a consecuencia del trabajo que ejecute por cuenta ajena».",
        "imagen": 11,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "¿Que pretende la Ley de Prevención de Riesgos Laborales?:",
        "a": "Prevenir, curar y reaccionar adecuadamente frente a los riesgos laborales.",
        "b": "Pretenden evitar tener que realizar los reconocimientos médicos a los trabajadores. ",
        "c": "Facilitar el despido de los trabajadores.",
        "d": "Todas son correctas.",
        "respuesta": "a",
        "explicacion": "Lo que se persigue con esta ley es la prevención y sobre todo crear una cultura preventiva, además de establecer las obligaciones y responsabilidades de todas partes implicadas.",
        "imagen": 12,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "Indique cuál de las siguientes afirmaciones no es correcta:",
        "a": "Solo existen los extintores para la extinción de incendios.",
        "b": "Las herramientas manuales hay que revisarlas periódicamente y repararlas o sustituirlas cuando sea preciso.",
        "c": "Antes de utilizar cualquier equipo eléctrico debe revisarse su estado y también el de las conexiones.",
        "d": "Todas son incorrectas.",
        "respuesta": "a",
        "explicacion": "Para la extinción de incendios se disponen de sistemas semifijos como las BIEs y sistemas fijos: como los rociadores situados en el techo.",
        "imagen": 13,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "Según la Ley de Prevención de Riesgos laborales, es obligación del trabajador?",
        "a": "Cooperar con el empresario para que éste pueda garantizar unas condiciones de trabajo que sean seguras.",
        "b": "Exigir al empresario que siempre garantice las condiciones de trabajo sean o no seguras",
        "c": "El trabajador no tiene que cooperar con el empresario",
        "d": "Ninguna es correcta.",
        "respuesta": "a",
        "explicacion": "El trabajador debe cooperar con el empresario para garantizar que las condiciones sean seguras.",
        "imagen": 14,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "¿Cuál de las siguientes afirmaciones es un principio de la acción preventiva?",
        "a": "Utilizar siempre los equipos de protección individual como primera medida preventiva.",
        "b": "Los riesgos deben combatirse en el origen y sólo evaluar aquellos que no haya podido evitarse.",
        "c": "Evaluar los riesgos sólo cuando se haya producido un accidente laboral. ",
        "d": "Todas son correctas.",
        "respuesta": "b",
        "explicacion": "La Ley de PRL obliga a evitar los riesgos, evaluar los riesgos que no se puedan evitar, combatir los riesgos en su origen.",
        "imagen": 15,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "Los primeros auxilios son técnicas básicas y simples que, aplicadas a en losprimeros momentos de un accidente o enfermedad...",
        "a": "Pueden minimizar las lesiones e incluso salvar la vida de las personas.",
        "b": "Pueden maximizar las lesiones e incluso salvar la vida de las personas.",
        "c": "Pueden evitar las lesiones e incluso salvar la vida de las personas.",
        "d": "Puedes ser denunciado por la policía.",
        "respuesta": "a",
        "explicacion": "Por ello es tan importante conocer las técnicas de primeros auxilios.",
        "imagen": 16,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "El término 'primer respondiente' se aplica a:",
        "a": "La primera persona que socorre al accidentado o enfermo.",
        "b": "La primera persona que pone en conocimiento de los servicios de emergencia la necesidad de que intervengan y comience el socorro.",
        "c": "La persona que necesita servicios de socorro por accidente, lesión o enfermedad.",
        "d": "La primera persona que ve un accidente.",
        "respuesta": "b",
        "explicacion": "Esa es la definición de primer respondiente.",
        "imagen": 17,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "La conducta 'PAS' se forma con las iniciales:",
        "a": "Proteger, Avisar y Socorrer.",
        "b": "Prevenir, Alertar y Socorrer.",
        "c": "Pasar, Agacharse y Salir corriendo.",
        "d": "Proteger, Alertar y Salvar.",
        "respuesta": "a",
        "explicacion": "Ese es el orden que debemos seguir ante un accidente.",
        "imagen": 18,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "Para evitar el shock (choque):",
        "a": "Se coloca al accidentado en cúbito supino, con las piernas a 90o y aflojando la ropa.",
        "b": "Se coloca al accidentado en cúbito supino, con las piernas a 30o y apretando la ropa.",
        "c": "Se coloca al accidentado en cúbito supino, con las piernas a 30o y aflojando la ropa.",
        "d": "Se coloca al accidentado en cúbito supino, con las piernas a 30o y lo desnudas.",
        "respuesta": "c",
        "explicacion": "Esta seria la disposición de la posición de seguridad lateral.",
        "imagen": 19,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "https://www.twitch.tv/ibai",
        "a": "El accidentado reacciona con el entorno en su forma habitual.",
        "b": "Hay una tendencia exagerada al sueño.",
        "c": "No hay ninguna respuesta por parte del accidentado a ningún tipo de estímulos.",
        "d": "El accidentado está en un estado de excitación.",
        "respuesta": "b",
        "explicacion": "Las demás opciones no se dan en estado de somnolencia.",
        "imagen": 20,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "Ante los síntomas de shock y mareos, entre otras medidas debemos:",
        "a": "Colocar al accidentado boca abajo, con las piernas elevadas 30o",
        "b": "Lateralizar la cabeza si vomita.",
        "c": "Las dos primeras son ciertas.",
        "d": "Todas son incorrectas.",
        "respuesta": "b",
        "explicacion": "Así evitaremos que se atragante con el vómito.",
        "imagen": 21,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "El tipo de contusión que afecta a capas más internas de la piel, produciendo un chichón o hematoma es:",
        "a": "Contusión de primer grado.",
        "b": "Contusión de segundo grado.",
        "c": "Contusión de tercer grado.",
        "d": "Contusión de cuarto grado.",
        "respuesta": "b",
        "explicacion": "A partir del segundo grado es la que afecta a capas internas de la piel.",
        "imagen": 22,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "¿Qué es una hemorragia?",
        "a": "La salida anormal de sangre del sistema circulatorio.",
        "b": "Una rotura de la piel.",
        "c": "Un traumatismo que cursa sin rotura de la piel.",
        "d": "Una tribu urbana.",
        "respuesta": "a",
        "explicacion": "Es la definición de hemorragia.",
        "imagen": 23,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "Síntomas de un esguince:",
        "a": "Sensación de hormigueo en la zona.",
        "b": "Inflamación de toda o parte de la articulación con aparición de hematoma.",
        "c": "Enrojecimiento.",
        "d": "Pérdida de visión.",
        "respuesta": "b",
        "explicacion": "La inflamación es el síntoma más común en los esguinces.",
        "imagen": 24,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "¿Qué es una fractura?",
        "a": "Es la rotura total o parcial de una estructura ósea.",
        "b": "Es la separación traumática de los huesos dentro de una articulación.",
        "c": "Es un desplazamiento temporal de los huesos de una articulación o elongación excesiva de las estructuras que lo sujetan.",
        "d": "Es la inflamación de los músculos.",
        "respuesta": "a",
        "explicacion": "Esa es la definición de fractura",
        "imagen": 25,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "¿En qué posición se colocará la cabeza del accidentado en caso de traslado por medios no asistenciales?",
        "a": "Al contrario del sentido de la marcha.",
        "b": "En el sentido de la marcha.",
        "c": "Mirando al techo.",
        "d": "Ninguna es correcta.",
        "respuesta": "b",
        "explicacion": "En un medio no asistencial es lo mejor para la persona afectada.",
        "imagen": 26,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "¿Qué posición es adecuada para pacientes hipotensos?",
        "a": "Semisentado.",
        "b": "Posición de Trendelemburg.",
        "c": "Completamente erguido.",
        "d": "Posición anti-Trendelemburg.",
        "respuesta": "b",
        "explicacion": "Esta posición facilitar la recuperación en caso de hipotensión.",
        "imagen": 27,
        "categoria": "fol",
        "id_autor": 4
    },
    {
        "pregunta": "¿Qué debemos hacer si un atragantado pierde la consciencia?",
        "a": "Depositarlo decúbito supino y comenzar las maniobras de RCP.",
        "b": "Realizar la maniobra de Heimlich.",
        "c": "Dejar que recupere el solo la consciencia.",
        "d": "Intentar sacar el objeto con unas pinzas.",
        "respuesta": "a",
        "explicacion": "Es lo más recomendado frente a esta situación.",
        "imagen": 28,
        "categoria": "fol",
        "id_autor": 4
    },
{
    "pregunta": "Ante un cuerpo extraño en el oído con sangrado interno debemos:",
    "a": "Taponar la salida de sangre o líquido.",
    "b": "No taponar la salida de sangre o líquido.",
    "c": "Echar líquido en el oído.",
    "d": "Soplar en el oído.",
    "respuesta": "b",
    "explicacion": "Debemos dejar la salida de sangre libre.",
    "imagen": 29,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "Cuándo la temperatura ambiental es baja, ¿qué le ocurre al cuerpo humano?",
    "a": "Se produce vasoconstricción.",
    "b": "Se produce vasodilatación.",
    "c": "Ocurre un aumento gradual de la sudoración.",
    "d": "Se agrandan los ojos.",
    "respuesta": "a",
    "explicacion": "Las demás opciones no ocurren cuando la temperatura ambiental es baja.",
    "imagen": 30,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "¿Cuáles son los principales peligros para un quemado?",
    "a": "La hipotermia.",
    "b": "La infección bacteriana.",
    "c": "Las dos primeras son correctas.",
    "d": "Todas son incorrectas.",
    "respuesta": "c",
    "explicacion": "Tanto una como otra son peligros muy comunes en los quemados.",
    "imagen": 31,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "¿Por debajo de qué temperatura se produce parada cardiorrespiratoria?",
    "a": "28º",
    "b": "34º",
    "c": "30º",
    "d": "24º",
    "respuesta": "a",
    "explicacion": "28º suele ser el umbral a partir del que se produce la parada.",
    "imagen": 32,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "Cuando se produce necrosis por frío, estamos hablando de:",
    "a": "Congelaciones de primer grado.",
    "b": "Congelaciones de segundo grado.",
    "c": "Congelaciones de tercer grado.",
    "d": "Congelaciones de cuarto grado.",
    "respuesta": "c",
    "explicacion": "La necrosis siempre es considerada como congelación de tercer grado.",
    "imagen": 33,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "¿Qué son las tetanizaciones?",
    "a": "Es el movimiento anárquico del corazón que impide el envío eficaz de sangre por todo el organismo.",
    "b": "Son los movimientos o contracturas incontroladas de algunos músculos al paso de la corriente.",
    "c": "Es el fallecimiento de una persona producido por un accidente eléctrico.",
    "d": "Es la infección por tétanos.",
    "respuesta": "b",
    "explicacion": "Es un término no muy conocido pero que todos sabemos lo que es.",
    "imagen": 34,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "Ante un accidente eléctrico, lo primero que debemos hacer es:",
    "a": "Tocar al electrocutado para apartarlo.",
    "b": "Cortar el suministro de energía.",
    "c": "Tratar las quemaduras u otras lesiones.",
    "d": "Todas son incorrectas.",
    "respuesta": "b",
    "explicacion": "Es lo primero que se debe hacer para evitar más accidentes.",
    "imagen": 35,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "Ante una intoxicación por productos cáusticos, nunca debemos:",
    "a": "Colocar al paciente en posición lateral de seguridad (PLS).",
    "b": "Solicitar ayuda.",
    "c": "Provocar el vómito.",
    "d": "Todas son incorrectas.",
    "respuesta": "c",
    "explicacion": "Provocar el vomito puede generar aún más daños",
    "imagen": 36,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "El tipo de intoxicación que tiene como vía de entrada la vía respiratoria es:",
    "a": "Intoxicaciones por gases.",
    "b": "Intoxicaciones por disolventes y derivados del petróleo.",
    "c": "Intoxicaciones medicamentosas.",
    "d": "Intoxicaciones por comida.",
    "respuesta": "a",
    "explicacion": "Los gases solo pueden entrar por vía respiratoria.",
    "imagen": 37,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "En caso de encontrarnos ante un ahogado, la actuación básica será:",
    "a": "Realizar el salvamento aunque no conozcamos la técnica.",
    "b": "Pedir ayuda.",
    "c": "Ambas son correctas.",
    "d": "No proporcionar ayuda.",
    "respuesta": "b",
    "explicacion": "Lo mas seguro es pedir ayuda.",
    "imagen": 38,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "Si se está produciendo un ahogamiento por una obstrucción de la vía aérea y la persona se encuentra consciente, ¿qué debemos hacer?",
    "a": "Evitar que la persona tosa.",
    "b": "Comenzar la RCP cuando aún sigue consciente.",
    "c": "Animar a toser.",
    "d": "Todas son incorrectas.",
    "respuesta": "c",
    "explicacion": "Tosiendo la persona puede expulsar lo que obstruya la vía aérea.",
    "imagen": 39,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "Ante la mordedura de víboras o culebras debemos:",
    "a": "Hacer un corte en la herida.",
    "b": "Chupar el veneno.",
    "c": "No hacer corte sobre la herida ni chupar el veneno.",
    "d": "Aplicar frío en la herida.",
    "respuesta": "c",
    "explicacion": "Las otras opciones pueden acarrear graves consecuencias.",
    "imagen": 40,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "En una picadura de insecto:",
    "a": "Debemos aplicar calor en la zona afectada.",
    "b": "Lavar con agua la zona.",
    "c": "En caso de aguijones clavados, no quitarlos.",
    "d": "Buscar al insecto e interrogarlo",
    "respuesta": "b",
    "explicacion": "Únicamente debemos lavar con agua la zona afectada.",
    "imagen": 41,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "¿Cuál de estos no es un periodo del parto?",
    "a": "Fase de dilatación.",
    "b": "Fase de postparto.",
    "c": "Fase de alumbramiento.",
    "d": "Fase de expulsión.",
    "respuesta": "b",
    "explicacion": "La fase de postparto no existe como tal.",
    "imagen": 42,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "¿En qué fase no se puede mover a la mujer?",
    "a": "En la fase de dilatación.",
    "b": "En la fase de expulsión.",
    "c": "En la fase de alumbramiento.",
    "d": "En la fase de reconocimiento.",
    "respuesta": "b",
    "explicacion": "En las otras fases aunque con dificultad, la mujer puede moverse.",
    "imagen": 43,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "Las maniobras de RCP se detendrán si:",
    "a": "Confirmamos la muerte de la persona.",
    "b": "Confirmamos la restauración de la respiración y circulación espontáneas de lapersona.",
    "c": "Si se rompe una costilla.",
    "d": "Estamos cansados.",
    "respuesta": "b",
    "explicacion": "No estamos cualificados para confirmar la muerte, y si rompemos una costilla o estamos cansados debemos continuar.",
    "imagen": 44,
    "categoria": "fol",
    "id_autor": 4
},
{
    "pregunta": "¿Cuál es la posición correcta para realizar la RCP?",
    "a": "En posición Trendelemburg, sobre una superficie blanda como una cama.",
    "b": "Tendido sobre su espalda, en una superficie dura, horizontal y plana.",
    "c": "En posición semisentada",
    "d": "Tumbado boca abajo.",
    "respuesta": "b",
    "explicacion": "Debemos procurar en la medida de lo posible seguir esas directrices.",
    "imagen": 45,
    "categoria": "fol",
    "id_autor": 4
},

    
    //INGLÉS
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
        "id_autor": 4
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
    "pregunta": "",
    "a": "",
    "b": "",
    "c": "",
    "d": "",
    "respuesta": "",
    "explicacion": "",
    "imagen": ,
    "categoria": "fol",
    "id_autor": 4
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
