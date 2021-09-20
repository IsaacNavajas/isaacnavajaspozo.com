

new Vue({

    el:'#app',

    data(){

        return{
            
            count:0,
            imagen:'../src/diploma.jpg',
            name: 'hola mundo, esto es Vue',
            show:false,
            diplomaturas: 
            [

                // CADA DE UCAM
                {id:5, titulo:'UCAM UNIVERSIDAD', activate: true, descripcion:'La Universidad Católica San Antonio, conocida también como Universidad Católica de Murcia (UCAM), es una universidad privada, católica, ubicada en La Ñora, pedanía del municipio de Murcia (España).', 
                imagen:'./src/UCAM.jpg',
                    diplomas:[
                        
                            ]
                },

                // CADA DE TITULACIONES
                {id:4, titulo:'TITULACIONES', activate: true, descripcion:'Titulación académica o grado académico, es una distinción dada por la institución educativa, generalmente después de la terminación exitosa del programa de estudios. ', 
                imagen:'./src/titulaciones.jpg ',
                    diplomas:[
                            {id:1, titulo:'Otros cursos', fecha:'XX', horas:'XX', href:'./src/titulos/titulos/OtrosCursos.pdf'},
                            {id:2, titulo:'CFGM Electronica', fecha:'2012', horas:'2000', },
                            {id:3, titulo:'CFGM Teleco', fecha:'2013', horas:'2000', },

                             
                            ]
                },



                

                // CADA DE CURSOS OFICIALES
                {id:6, titulo:'CONGRESOS HACKTIVISTAS', activate: true, descripcion:'Las conferencias hackers son una reunión genericamente anual de diseñadores, ingenieros y programadores a la que solo se puede acceder por invitación para discutir los últimos desarrollos e innovaciones en la industria informática. A diario, muchos piratas informáticos solo interactúan virtualmente y por lo tanto rara vez tienen contacto cara a cara. La conferencia es un momento para que los piratas informáticos se reúnan para compartir ideas y aprender de los invitados conferenciantes. Hay varias agencias que dirigen estas conferencias hackers en las que acuden los mejores a exponer bulneravilidades, ataques, nuevas tecnologias, hadware, software... ', 
                imagen:'./src/hack.jpg',
                    diplomas:[
                        {id:1, titulo:'Harvard React', fecha:'2012', horas:'XX', href:'https://learning.edx.org/course/course-v1:HarvardX+CS50+X/home'},

                            ]
                },




                // CADA DE PLATZI
                {id:2, titulo:'PLATZI', activate: true, descripcion:'Platzi gira principalmente en educación relacionada con la programación, ya que agrupa carreras y cursos que nos permitirán desde aprender a crear un servidor adecuado para nosotros hasta crear la aplicación de nuestros sueños, sus profesores son líderes en sus campos profesionales, se distinguen entre los demás integrantes de sus comunidades e industrias. Tiene su sede en San Franciso y ha sido ganador del premio a mejor empresa de formación en línea en ASU+GSV. Platzi mantiene un esquema de Carreras que agrupa una serie de cursos de diferentes áreas, al aprobar una carrera hemos adquirido conocimientos diversos que nos permitirán considerarnos un especialista en esa área, equivalentes en muchos casos a carreras universitarias. Antes de dar las clases Platzi gestiona una y otra vez esas clases desde el lado del profesorado para que en el menor tiempo posible haya el maximo contenido, sin repeticiones y siguiendo un apartado para un comprendimiento mejor.', 
                imagen:'./src/platzi.jpg',
                    diplomas:[
                            {id:1, titulo:'Asincronismo Javascript', fecha:'01/2021', horas:'7', href:'./src/titulos/platzi/diploma-asincronismo-js.pdf'},
                            {id:2, titulo:'Básico Javascript', fecha:'06/2020', horas:'19', href:'./src/titulos/platzi/diploma-basico-javascript.pdf'},
                            {id:3, titulo:'Bases de datos', fecha:'03/2020', horas:'26', href:'./src/titulos/platzi/diploma-bd.pdf'},
                            {id:4, titulo:'Bootstrap', fecha:'11/2019', horas:'8', href:'./src/titulos/platzi/diploma-bootstrap.pdf'},
                            {id:5, titulo:'PHP Laravel', fecha:'06/2020', horas:'19', href:'./src/titulos/platzi/diploma-curso-php-laravel.pdf'},
                            {id:6, titulo:'Datos en PHP', fecha:'10/2020', horas:'8', href:'./src/titulos/platzi/diploma-datos-php.pdf'},
                            {id:7, titulo:'Debbugging devTools', fecha:'01/2021', horas:'18', href:'./src/titulos/platzi/diploma-devtools'},
                            {id:8, titulo:'Ecmascript 6+', fecha:'08/2020', horas:'12', href:'./src/titulos/platzi/diploma-ecmascript-6.pdf'},
                            {id:9, titulo:'Datos Eloquent ORM', fecha:'09/2020', horas:'13', href:'./src/titulos/platzi/diploma-eloquent-laravel.pdf'},
                            {id:10, titulo:'Express', fecha:'03/2021', horas:'20', href:'./src/titulos/platzi/diploma-express-js.pdf'},
                            {id:11, titulo:'Fundamentos Js', fecha:'06/2019', horas:'23', href:'./src/titulos/platzi/diploma-fundamentos-javascript-2018.pdf'},
                            {id:12, titulo:'Node.js', fecha:'02/2021', horas:'17', href:'./src/titulos/platzi/diploma-fundamentos-node.pdf'},
                            {id:13, titulo:'Git y GitHub', fecha:'02/2020', horas:'22', href:'./src/titulos/platzi/diploma-git-github.pdf'},
                            {id:14, titulo:'Html y Css', fecha:'11/2019', horas:'18', href:'./src/titulos/platzi/diploma-html-css-2019.pdf'},
                            {id:15, titulo:'Ingeniería', fecha:'12/2020', horas:'15', href:'./src/titulos/platzi/diploma-ingenieria.pdf'},
                            {id:16, titulo:'Laravel', fecha:'02/2021', horas:'15', href:'./src/titulos/platzi/diploma-intro-laravel-2020.pdf'},
                            {id:17, titulo:'Js V8 y Navegador', fecha:'08/2020', horas:'7', href:'./src/titulos/platzi/diploma-javascript-navegador.pdf'},
                            {id:18, titulo:'Mongo DB', fecha:'08/2020', horas:'7', href:'./src/titulos/platzi/diploma-mongodb.pdf'},
                            {id:19, titulo:'P.O.O', fecha:'03/2020', horas:'20', href:'./src/titulos/platzi/diploma-oop.pdf'},
                            {id:20, titulo:'Photoshop', fecha:'12/2020', horas:'34', href:'./src/titulos/platzi/diploma-photoshop-basico.pdf'},
                            {id:21, titulo:'PHP', fecha:'10/2020', horas:'6', href:'./src/titulos/platzi/diploma-php.pdf'},
                            {id:22, titulo:'Frameworks PHP', fecha:'10/2020', horas:'3', href:'./src/titulos/platzi/diploma-php-frameworks.pdf'},
                            {id:23, titulo:'PHP P.O.O', fecha:'10/2020', horas:'8', href:'./src/titulos/platzi/diploma-php-poo.pdf'},
                            {id:24, titulo:'Programacion básica', fecha:'01/2020', horas:'35', href:'./src/titulos/platzi/diploma-programacion-basica.pdf'},
                            {id:25, titulo:'React', fecha:'01/2020', horas:'35', href:'./src/titulos/platzi/diploma-react.pdf'},
                            {id:26, titulo:'Closures y scope', fecha:'08/2020', horas:'13', href:'./src/titulos/platzi/diploma-scope.pdf'},
                            {id:27, titulo:'Wordpress', fecha:'07/2020', horas:'15', href:'./src/titulos/platzi/diploma-seo-wordpress.pdf'},
                            {id:28, titulo:'SQL y Mysql', fecha:'03/2020', horas:'18', href:'./src/titulos/platzi/diploma-sql-mysql.pdf'},
                            {id:29, titulo:'Terminal', fecha:'06/2020', horas:'12', href:'./src/titulos/platzi/diploma-terminal-2019.pdf'},
                            {id:30, titulo:'Typescript', fecha:'03/2020', horas:'18', href:'./src/titulos/platzi/diploma-typescript.pdf'},
                            {id:31, titulo:'SQL y Mysql', fecha:'02/2021', horas:'17', href:'./src/titulos/platzi/diploma-sql-mysql.pdf'},
                            {id:32, titulo:'Vue 3', fecha:'03/2021', horas:'16', href:'./src/titulos/platzi/diploma-vuejs.pdf'},
                            {id:33, titulo:'Vue 2', fecha:'02/2021', horas:'19', href:'./src/titulos/platzi/diploma-vuejs2.pdf'},



                            // SEPARADOR PARA CARRERAS DE PLATZI
                            {id:1, separador:'true', tituloseparador:'CARRERAS DE PLATZI', titulo:'Drllo Wordpress', fecha:'06/2021', horas:'47', href:'./src/titulos/carrerasdeplatzi/Carrerade desarrolloconWordpress.pdf'},
                            {id:2, titulo:'Drllo PHP', fecha:'05/2020', horas:'82', href:'./src/titulos/carrerasdeplatzi/DesarrollowebbackendconPHP.pdf'},
                            {id:3, titulo:'Drllo JS', fecha:'11/2021', horas:'74', href:''},
                            {id:4, titulo:'Drllo Vue', fecha:'11/2021', horas:'71', href:''},
                            {id:4, titulo:'Drllo Web', fecha:'11/2021', horas:'394', href:''}
                            ] 
                },
                


                                


                // CADA DE MASTERMIND
                {id:5, titulo:'mastermind', activate: true, descripcion:'Mastermind.ac es una plataforma Española, creada por Nate Gentile, con la idea de aprender nuevas cosas relacionadas con la informática, robótica, montaje de pc, coding, hacking... Sus profesores son iconos de influencia en España como Nate Gentile, Antonio Sarosi, Betta tech (Martín), S4vitar (Marcelo), Vitto Modder, Claudi Lázaro, Sara Nogark, Diego Laballos, Raúl Lamaso, SFDX show... Solo hay seis cursos con certificados que demuestren el estado educativo orientado al entorno laboral, para conseguir estos certificados es necesario superar la calificación de ejercicios y de exámenes.', 
                imagen:'./src/mastermind.png',
                    diplomas:[
                                                       
                             {id:1, titulo:'Linux', fecha:'07/2021', horas:'9', href:'./src/titulos/cursosoficiales/LINUX.pdf'},
                             

                            ]
                },






                // CADA DE PROYECTOS DE PENTESTING
                {id:3, titulo:'PROYECTOS DE PENTESTING', activate: true, descripcion:'En mi tiempo libre me gusta simular ataques informaticos para aprender de seguridad informatica, programación y redes, me parece la forma de llevar todo lo aprendido al limite hasta encontrar las vulnerabilidades. Todos estos ataques han sido simulados con una Raspberry pi 400 y como sistema operativo Kali Linux.', 
                imagen:'./src/proyecto.png',
                    diplomas:[
                        {id:1, titulo:'Logo', fecha:'06/2021', horas:'XX', href:'./src/titulos/proyectodepentesting/logo.pdf'},
                            ]
                },



                

               
            ],
            
        }
    }
})

