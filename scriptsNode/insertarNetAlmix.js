bd = connect("localhost:27017/admin");
use admin;
db.auth("Almi", "Almi123");
db = db.getSiblingDB("netAlmix");
db.contenido.remove({});
var content = [
    {
        "titulo": "El hoyo",
        "tipo": "pelicula",
        "descripcion": "El hoyo es una película española de ciencia ficción y suspenso del año 2019 dirigida por Galder Gaztelu-Urrutia1​ y protagonizada por Iván Massagué, Antonia San Juan, Zorion Eguileor, Emilio Buale y Alexandra Masangkay.2​ ",
        "valoraciones": [
            {
                "nick": "lolitogamer",
                "comentario": "Me ha gustado bastante para ser española.",
                "valoracion": 8
            },
            {
                "nick": "alvaritocasas69",
                "comentario": "Me ha gustado bastante para ser española.",
                "valoracion": 7
            },
            {
                "nick": "nikiminag",
                "comentario": "Me ha gustado bastante para ser española.",
                "valoracion": 9
            }
        ],
        "generos": [
            "Ciencia Ficción",
            "Thriller"
        ],
        "numeroRepros": 5326749,
        "premios": [
            {
                "nombre": "remio del público en la sección Midnight Madness del Festival Internacional de Cine de Toronto",
                "ano": 2019
            },
            {
                "nombre": "Mejor Película, Mejor Director Revelación, Mejores Efectos Especiales y premio del público en el Festival de Cine de Sitges",
                "ano": 2019
            },
            {
                "nombre": "Premio Película Joven en Abycine",
                "ano": 2019
            },
            {
                "nombre": "Premio Goya a Mejores Efectos Especiales",
                "ano": 2020
            }
        ],
        "duracion": 94,
        "director": "Galder Gaztelu-Urrutia"
    },
    {
        "titulo": "Berserk: The Golden Age I",
        "tipo": "pelicula",
        "descripcion": "Berserk: La Edad de Oro (japonés: ベルセルク 黄金時代篇, Hepburn: Beruseruku Ōgon Jidai-hen inglés: Berserk: The Golden Age Arc) es una serie de películas con la idea de adaptar los capítulos de Golden Age Arc del manga Berserk de Kentaro Miura.1​ Primero en septiembre de 2010 el proyecto fue anunciado como un nuevo anime que partiría desde el volumen 35 del manga.",
        "valoraciones": [
            {
                "nick": "MrDavo1000",
                "comentario": "Me la veria un millon de veces",
                "valoracion": 10
            },
            {
                "nick": "nnikko",
                "comentario": "Peliculón",
                "valoracion": 10
            },
            {
                "nick": "lakatus",
                "comentario": "Pf",
                "valoracion": 10
            }
        ],
        "generos": [
            "Ciencia Ficción",
            "Acción",
            "Fantasía"
        ],
        "numeroRepros": 69420666,
        "premios": [
            {}
        ],
        "duracion": 80,
        "director": "Toshiyuki Kubooka"
    },
    {
        "titulo": "El viaje de Chihiro",
        "tipo": "pelicula",
        "descripcion": "Perdida en el bosque, una niña (Rumi Hîragi) de 10 años conoce animales, fantasmas y criaturas extrañas.",
        "valoraciones": [
            {
                "nick": "",
                "comentario": "",
                "valoracion": -1
            }
        ],
        "generos": [
            "Infantil",
            "Fantasía"
        ],
        "numeroRepros": 45826475,
        "premios": [
            {
                "nombre": "Óscar a la mejor película de animación",
                "ano": 2003
            },
            {
                "nombre": "Oso de oro",
                "ano": 2002
            },
            {
                "nombre": "Anexo:Nippon-sho a la mejor película",
                "ano": 2003
            }
        ],
        "duracion": 125,
        "director": "Hayao Miyazaki"
    },
    {
        "titulo": "The End of Evangelion",
        "tipo": "pelicula",
        "descripcion": "NERV se enfrenta al Decimoctavo Ángel, pero al final el destino del mundo depende de las elecciones de Shinji.",
        "valoraciones": [
            {
                "nick": "",
                "comentario": "",
                "valoracion": -1
            }
        ],
        "generos": [
            "Ciencia Ficción",
            "Acción",
            "Cyberpunk"
        ],
        "numeroRepros": 45872168100,
        "premios": [],
        "duracion": 90,
        "director": "Hideaki Anno"
    },
    {
        "titulo": "Neon Genesis Evangelion",
        "tipo": "serie",
        "descripcion": "Cuando uns monstruos violentos descienden a la Tierra para destruir a la humanidad, Shinji, un joven de 14 años, se une a un pequeño escuadrón de pilotos bajo el mando de su padre, utilizando máquinas gigantes que parecen tener sus propias mentes.",
        "valoraciones": [
            {
                "nick": "nnnikkko",
                "comentario": "dsf",
                "valoracion": 10
            },
            {
                "nick": "lacatus",
                "comentario": "asd",
                "valoracion": 10
            },
            {
                "nick": "nnasdfik",
                "comentario": "aasd",
                "valoracion": 10
            }
        ],
        "generos": [
            "Acción",
            "Ciencia Ficción",
            "Cyberpunk"
        ],
        "numeroRepros": 99999999999999999999999999999999999999999999999999999999999999,
        "premios": [
            {
                "nombre": "La mejor puta serie",
                "ano": 69420
            }
        ],
        "temporadas": [
            {
                "numero": 1,
                "titulo": "asdfjlog",
                "descripcion": "adsafasdfasdfdsafasdfdsa",
                "capitulos": [
                    {
                        "titulo": "Episodio 1: El ataque del ángel",
                        "duracion": 22,
                        "descripcion": "El joven Shinji Ikari es convocado a la ciudad de Tokio-3 por su padre, Gendo, jefe de la organización NERV y a quien no ve desde hace tres años. Mientras espera a que lo recojan, es testigo del ataque de un monstruo gigante, a quien más tarde se le daría el nombre de Sachiel. Misato Katsuragi lo rescata, no sin antes llevarse un buen susto mientras escapan a toda velocidad en su coche. En la base de operaciones de NERV, se entera de los verdaderos motivos de su padre: este pretende que pilote una unidad de combate llamada EVA-01 para enfrentarse al monstruo que azota la ciudad. Shinji se niega a hacerlo al ver que su padre solo quiere utilizarlo. Ante la situación, Gendo ordena a una niña que se encuentra allí a prepararse y salir a pelear nuevamente, aun teniendo en cuenta que se encuentra gravemente herida. Este acto de crueldad hace cambiar de parecer a Shinji. "
                    },
                    {
                        "titulo": "Episodio 2: Un techo desconocido",
                        "duracion": 22,
                        "descripcion": "Shinji muestra un excelente nivel de sincronización con el EVA-01, a pesar de que no tuvo ninguna clase de experiencia previa. Sin embargo, cuando se enfrenta al Ángel, su personalidad insegura lo lleva a la derrota. Después de recuperarse de sus heridas en una sala de asistencia, Misato decide llevarlo a vivir con ella a su apartamento en lugar de vivir solo. Shinji tendrá que aprender a convivir con una joven mujer desordenada que deja su ropa interior desparramada y desayuna cerveza helada. En ese lapso, Misato tiene un comportamiento bastante insinuante con Shinji, también se revela cómo este venció a Sachiel: al quedar inconsciente, el EVA tomó vida propia y lo aniquiló en segundos. "
                    },
                    {
                        "titulo": "Episodio 3: El teléfono que nunca suena",
                        "duracion": 22,
                        "descripcion": "Shinji aún está tratando de adaptarse a su nueva vida y pronto comienza a concurrir a la escuela. Descubre que la niña piloto que conoció en NERV es su compañera de clase y que además se llama Rei Ayanami. Conoce también a dos compañeros, Kensuke Aida y Toji Suzuhara, quienes en un principio reniegan a Shinji, algo que a él no le afecta, debido a que está acostumbrado a la soledad. Aparece Shamshel, el cuarto Ángel y Shinji debe hacerse cargo de sus obligaciones y salir a pelear. Todo se complica cuando se da cuenta de que los dos chicos de su colegio no se ocultaron como el resto de la gente, y se encuentran cerca del área de combate expuestos al Ángel. Shinji los rescata y ofrece refugio en el interior del EVA, con el inicio de una amistad. "
                    }
                ]
            }
        ]
    },
    {
        "titulo": "The Office",
        "tipo": "serie",
        "descripcion": "The Office es una serie estadounidense de humor ambientada en una oficina regional de ventas radicada en la localidad de Scranton, en Pensilvania. ",
        "valoraciones": [
            {
                "nick": "asdf",
                "comentario": "fdasf",
                "valoracion": 7
            },
            {
                "nick": "asdasdfgdfsgsgf",
                "comentario": "rghjaeh",
                "valoracion": 4
            },
            {
                "nick": "dj",
                "comentario": "dfasgarsgsag",
                "valoracion": 9
            }
        ],
        "generos": [
            "Falso Documental"
        ],
        "numeroRepros": 41556213513561464615,
        "premios": [
            {
                "nombre": "serie mas graciosa lol",
                "ano": 2007
            }
        ],
        "temporadas": [
            {
                "numero": 1,
                "titulo": "asdaqsd",
                "descripcion": "sdfgadsdddddd",
                "temporadas": [
                    {
                        "numero": 1,
                        "titulo": "sadfgafdsghsd",
                        "descripcion": "akiopjhnsbndfghlnkjfd",
                        "capitulos": [
                            {
                                "titulo": "Niagara P1",
                                "duracion": 23,
                                "descripcion": "pam y jim se van a casar"
                            },
                            {
                                "titulo": "Niagara P2",
                                "duracion": 25,
                                "descripcion": "boda feik"
                            },
                            {
                                "titulo": "Navimoroco",
                                "duracion": 22,
                                "descripcion": "jaja racismo"
                            }
                        ]
                    }
                ]

            }
        ]

    },
    {
        "titulo": "Rick & Morty",
        "tipo": "serie",
        "descripcion": "Pues un viejo y un krio se van a fumar droga al espacio sideral",
        "valoraciones": [
            {
                "nick": "xDD",
                "comentario": "menudos borraxos jajaXDDDDD",
                "valoracion": 9
            },
            {
                "nick": "asfdasf",
                "comentario": "jfdj",
                "valoracion": 7
            },
            {
                "nick": "dasfdasf",
                "comentario": "afgasdg",
                "valoracion": 7
            }

        ],
        "generos": [
            "Ciencia Ficción"
        ],
        "numeroRepros": 5414654561,
        "premios": [
            {
                "nombre": "osqar al grasioso",
                "ano": 2018
            }
        ],
        "temporadas": [
            {
                "numero": 1,
                "titulo": "asdgsddgdas",
                "descripcion": "asdgasdgsdgsdagg",
                "capitulos": [
                    {
                        "titulo": "Cogollos espasiales XD",
                        "duracion": 25,
                        "descripcion": "Pos vvan a recoger flores al campo"
                    },
                    {
                        "titulo": "Ummm No se bro",
                        "duracion": 69,
                        "descripcion": "jaja 69"
                    },
                    {
                        "titulo": "triturbo intergalactico",
                        "duracion": 420,
                        "descripcion": "se van de aventura trifasica y multidimensional"
                    }
                ]
            }
        ]

    },
    {
        "titulo": "Daredevil",
        "tipo": "serie",
        "descripcion": "un siego da palisas a malotes",
        "valoraciones": [
            {
                "nick": "uwuwu",
                "comentario": "va to siego XDDDD",
                "valoracion": 8
            },
            {
                "nick": "asdgdasg56146",
                "comentario": "sagadjishdkjsgdasg1309841",
                "valoracion": 6
            },
            {
                "nick": "asdg5464",
                "comentario": "158754678456845178456715g48df5ash4adfshnjisubhjnokaijs",
                "valoracion": 7
            }
        ],
        "generos": [
            "Ciencia Ficción",
            "Acción"
        ],
        "numeroRepros": 44646146156456113,
        "premios": [],
        "temporadas": [
            {
                "numero": 1,
                "titulo": "asdfasdfsdagads",
                "descripcion": "asdgasddsgasd",
                "capitulos": [
                    {
                        "titulo": "va to siego",
                        "duracion": 56,
                        "descripcion": "adsgdasgsd"
                    },
                    {
                        "titulo": "sigue to siego",
                        "duracion": 55,
                        "descripcion": "dsfgds"
                    },
                    {
                        "titulo": "siego pero en 4k",
                        "duracion": 69,
                        "descripcion": "xDDDDD"
                    }
                ]
            }
            
        ]
    }        
];
db.contenido.insert(content);
db.contenido.find().pretty();



/*
Peliculas
    {
        "titulo": "",
        "tipo": "pelicula",
        "descripcion": "",
        "valoraciones": [
            {
                "nick": "",
                "comentario": "",
                "valoracion": -1
            }
        ],
        "generos": [
            ""
        ],
        "numeroRepros": -1,
        "premios": [
            {
                "nombre": "",
                "ano": -1
            }
        ],
        "duracion": -1,
        "director": ""
    },
Series
    {
        "titulo": "",
        "tipo": "serie",
        "descripcion": "",
        "valoraciones": [
            {
                "nick": "",
                "comentario": "",
                "valoracion": -1
            }
        ],
        "generos": [
            ""
        ],
        "numeroRepros": -1,
        "premios": [
            {
                "nombre": "",
                "ano": -1
            }
        ],
        "temporadas": [
            {
                "numero": ,
                "titulo": "",
                "descripcion": "",
                "capitulos": [
                    {
                        "titulo": "",
                        "duracion": ,
                        "descripcion": ""
                    },
                    {
                        "titulo": "",
                        "duracion": ,
                        "descripcion": ""
                    },
                    {
                        "titulo": "",
                        "duracion": ,
                        "descripcion": ""
                    }
                ]
            }
        ]
    }
*/