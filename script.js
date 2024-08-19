function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function toggleDropdown(menu) {
    const dropdown = document.getElementById(menu + '-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function loadContent(system) {
    const nameElement = document.getElementById('system-name');
    const descriptionElement = document.getElementById('system-description');
    const imageElement = document.getElementById('system-image');

    switch(system) {
        case 'sonoma' :
            nameElement.innerText = 'Mac OS 14 Sonoma';
            descriptionElement.innerText = 'Es la vigésima versión principal de macOS, el sistema operativo de escritorio de Apple para ordenadores Mac. Es el sucesor de macOS Ventura y fue anunciado en la WWDC del 5 de junio de 2023 en Apple Park, Cupertino. Debe su nombre a la región vinícola situada en el condado californiano de Sonoma.';
            imageElement.innerHTML = '<img src="images/sonoma.png" alt="Mac OS 14 Sonoma" class="image">';
            break;
        case 'ventura':
            nameElement.innerText = 'Mac OS 13 Ventura';
            descriptionElement.innerText = 'Es la decimonovena versión principal de macOS, el sistema operativo de escritorio de Apple para ordenadores Macintosh. Es el sucesor de macOS Monterey y fue anunciado en la WWDC 2022 el 6 de junio de 2022. Lleva el nombre de Ventura en California, siguiendo el sistema de nomenclatura que comenzó con OS X Mavericks.';
            imageElement.innerHTML = '<img src="images/ventura.png" alt="Mac OS 13 Ventura" class="image">';
            break;
        case 'monterrey':
            nameElement.innerText = 'Mac OS 12 Monterrey';
            descriptionElement.innerText = 'Es la decimoctava versión principal de macOS, el sistema operativo de escritorio de Apple para computadoras Mac. El sucesor de macOS Big Sur fue anunciado en la WWDC 2021 el 7 de junio de 2021 y se publicó en el cuarto trimestre del año. Se lanzó una versión beta de macOS Monterey el 7 de junio de 2021 para los desarrolladores registrados en su programa de desarrolladores. Una versión beta pública estuvo disponible en julio de 2021.';
            imageElement.innerHTML = '<img src="images/monterrey.png" alt="Mac OS 12 Monterrey" class="image">';
            break;
        case 'big_sur':
            nameElement.innerText = 'Mac OS 11 Big Sur';
            descriptionElement.innerText = 'Es la decimoséptima versión importante de macOS, el sistema operativo de escritorio de Apple para computadoras Macintosh. El sucesor de macOS Catalina, Big Sur fue anunciado en la Conferencia Mundial de Desarrolladores 2020 el 22 de junio de 2020 y se lanzó al público el 12 de noviembre de 2020.';
            imageElement.innerHTML = '<img src="images/big_sur.png" alt="Mac OS 11 Big Sur" class="image">';
            break;
        case 'catalina':
            nameElement.innerText = 'Mac OS X 10.15 "Catalina"';
            descriptionElement.innerText = 'Es la decimosexta versión principal de macOS, el sistema operativo de escritorio de Apple para computadoras Macintosh. Es el sucesor de macOS Mojave, se anunció en la WWDC 2019 el 3 de junio de 2019 y se lanzó al público el 7 de octubre de 2019. Catalina es la primera versión de macOS que admite exclusivamente aplicaciones de 64 bits.';
            imageElement.innerHTML = '<img src="images/catalina.png" alt="Mac OS X 10.15 Catalina" class="image">';
            break;
        case 'mojave':
            nameElement.innerText = 'Mac OS X 10.14 "Mojave"';
            descriptionElement.innerText = 'Es la decimoquinta versión de macOS (anteriormente OS X), el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh. Es la tercera versión del sistema operativo tras el cambio de denominación de OS X a macOS';
            imageElement.innerHTML = '<img src="images/mojave.jpg" alt="Mac OS X 10.14 Mojave" class="image">';
            break;
        case 'high_sierra':
            nameElement.innerText = 'Mac OS X 10.13 "High Sierra"';
            descriptionElement.innerText = 'Es la decimocuarta versión de macOS (anteriormente OS X), el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh. Es la segunda versión del sistema operativo tras el cambio de denominación de OS X a macOS.';
            imageElement.innerHTML = '<img src="images/high_sierra.jpg" alt="Mac OS X 10.13 High Sierra" class="image">';
            break;
        case 'sierra':
            nameElement.innerText = 'Mac OS X 10.12 "Sierra"';
            descriptionElement.innerText = 'Es la decimotercera versión de macOS (anteriormente OS X), el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh. Es la primera versión del sistema operativo tras el cambio de denominación de OS X a macOS.';
            imageElement.innerHTML = '<img src="images/sierra.jpg" alt="Mac OS X 10.12 Sierra" class="image">';
            break;
        case 'capitan':
            nameElement.innerText = 'Mac OS X 10.11 "El Capitan"';
            descriptionElement.innerText = 'Es la onceava versión de OS X, el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh; la versión de prueba pública fue lanzada el 9 de julio de 2015 y los usuarios pudieron descargarla desde la Mac App Store desde el día 30 de septiembre de 2015.';
            imageElement.innerHTML = '<img src="images/capitan.png" alt="Mac OS X 10.11 El Capitan" class="image">';
            break;
        case 'yosemite':
            nameElement.innerText = 'Mac OS X 10.10 "Yosemite"';
            descriptionElement.innerText = 'Es la undécima versión de OS X, el sistema operativo de Apple para los ordenadores Macintosh. OS X Yosemite se anunció y presentó a los desarrolladores el 2 de junio de 2014 en el WWDC 2014 y su versión de prueba salió el 24 de julio de 2014. La versión para los consumidores fue lanzada finalmente el 16 de octubre de 2014.';
            imageElement.innerHTML = '<img src="images/yosemite.png" alt="Mac OS X 10.10 Yosemite" class="image">';
            break;
        case 'mavericks':
            nameElement.innerText = 'Mac OS X 10.9 "Mavericks"';
            descriptionElement.innerText = 'Es la décima versión de OS X para ordenadores, portátiles y servidores Mac. OS X Mavericks se anunció el 10 de junio de 2013 en la WWDC 2013, y se podía descargar desde el Mac App Store. Esta versión de OS X marcó el comienzo de un cambio en el esquema de nombres de OS X, dejando la utilización de los grandes felinos y pasando a nombres basados en lugares en California. Así que esta versión del sistema operativo se ha llamado Mavericks, una localidad de California donde el surf es muy popular, lo que hace que el logotipo sea una ola del mar.';
            imageElement.innerHTML = '<img src="images/mavericks.png" alt="Mac OS X 10.9 Mavericks" class="image">';
            break;
        case 'mountain_lion':
            nameElement.innerText = 'Mac OS X 10.8 "Mountain Lion"';
            descriptionElement.innerText = 'Es la novena versión de OS X, el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores. Mountain Lion fue anunciado el 16 de febrero de 2012 y fue puesto a la venta el 25 de julio de 2012 a través de la Mac App Store. Incorpora aún más características del sistema iOS, algunas de las cuales ya han sido introducidas en Lion. Diversas aplicaciones fueron renombradas o alteradas para lograr una correspondencia con sus contrapartes de iOS.';
            imageElement.innerHTML = '<img src="images/mountain_lion.jpg" alt="Mac OS X 10.8 Mountain Lion" class="image">';
            break;
        case 'lion':
            nameElement.innerText = 'Mac OS X 10.7 "Lion"';
            descriptionElement.innerText = 'Es la octava versión de OS X, el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores. Lion fue presentado en el evento "Back to the Mac", el 20 de octubre de 2010. Incluye elementos heredados del sistema iOS. El 20 de julio de 2011 se puso a disposición del público OS X Lion a través de descarga digital en la tienda de aplicaciones Mac App Store, costando 29,99 dólares.';
            imageElement.innerHTML = '<img src="images/lion.png" alt="Mac OS X 10.7 Lion" class="image">';
            break;
        case 'snow_leopard':
            nameElement.innerText = 'Mac OS X 10.6 "Snow Leopard"';
            descriptionElement.innerText = 'Es la séptima versión de OS X, fue lanzado públicamente el 28 de agosto de 2009. Su precios de salida fueron de 29 € para actualizar a los usuarios de Leopard. Es más rápido que la versión 10.5 Leopard y está disponible en el Apple Store y en distribuidores autorizados Apple. Casi no ofrece cambios en el diseño gráfico.';
            imageElement.innerHTML = '<img src="images/snow_leopard.png" alt="Mac OS X 10.6 Snow Leopard" class="image">';
            break;
        case 'leopard':
            nameElement.innerText = 'Mac OS X 10.5 "Leopard"';
            descriptionElement.innerText = 'Es la sexta versión de OS X, este sistema fue anunciado el 6 de junio de 2005 por la WWDC y lanzado el 26 de octubre de 2007; según Apple, Leopard contiene más de 300 cambios y mejoras sobre su predecesor, Mac OS X Tiger, cubriendo componentes del núcleo del sistema operativo, así como también las aplicaciones incluidas y las herramientas de desarrollo.';
            imageElement.innerHTML = '<img src="images/leopard.png" alt="Mac OS X 10.5 Leopard" class="image">';
            break;
        case 'tiger':
            nameElement.innerText = 'Mac OS X 10.4 "Tiger"';
            descriptionElement.innerText = 'Es la quinta versión de OS X, este sistema operativo fue lanzado al publico el 29 de abril de 2005 como sucesor del "MAC OS X "panther"" el cual fue lanzado 18 meses antes. Algunas de las nuevas características incluyen un sistema de búsqueda rápido denominado Spotlight, una nueva versión de navegador web Safari, Dashboard, un nuevo tema gráfico unificado y un mejorado soporte para 64 bits de las Power Mac G5. Tiger es también la primera versión de un sistema operativo de Apple que trabaja en la plataforma Intel x86, aunque también está pensado para que trabaje en arquitectura Apple-Intel solamente como las MacBook Pro, MacBook, Mac Mini Intel y Mac Pro.';
            imageElement.innerHTML = '<img src="images/tiger.png" alt="Mac OS X 10.4 Tiger" class="image">';
            break;
        case 'panther':
            nameElement.innerText = 'Mac OS X 10.3 "Panther"';
            descriptionElement.innerText = 'Es la cuarta versión de OS X, este sistema operativo fue lanzado el 24 de octubre de 2003 ante el publico, es el sucesor del sistema "Jaguar", sin embargo este sistema es sustituido por el sistema "Tiger". Este sistema requiere un procesador PowerPC G3, G4 O G5 a 233MHz como minimo, ademas se debera tener una memoria ram de 128MB y 1.5GB de espacio libre al disco';
            imageElement.innerHTML = '<img src="images/panther.png" alt="Mac OS X 10.3 Panther" class="image">';
            break;
        case 'jaguar':
            nameElement.innerText = 'Mac OS X 10.2 "Jaguar"';
            descriptionElement.innerText = 'Es la tercera versión de OS X, este sistema operativo estuvo inicialmente disponible el 23 de agosto de 2002 tanto en version unica como en family pack. Fue a grandes rasgos recibido por los usuarios de macintosh como un gran paso en las areas de estabilidad y velocidad de funcionamiento, sin embargo, muchos críticos siguieron insistiendo en hacer observaciones en lo relacionado con la velocidad de la interfaz de usuario y en la inmadurez y dificultad de uso. ';
            imageElement.innerHTML = '<img src="images/jaguar.png" alt="Mac OS X 10.2 Jaguar" class="image">';
            break;
        case 'puma':
            nameElement.innerText = 'Mac OS X 10.1 "Puma"';
            descriptionElement.innerText = 'Es la segunda versión de OS X, esta fue liberada el 25 de septiembre de 2001 como una actualizacion gratuita a la version 10.0.Comenzando con la versión 10.1.2, Apple hizo del Mac OS X su sistema operativo predeterminado en los nuevos Macs, además en este mismo puede haber muchos programas más que en la competencia, pero claro teniendo algunos más programas puede no tener otros programas que en otros sistemas operativos no. ';
            imageElement.innerHTML = '<img src="images/puma.png" alt="Mac OS X 10.1 Puma" class="image">';
            break;
        case 'cheetah':
            nameElement.innerText = 'Mac OS X 10.0 "Cheetah"';
            descriptionElement.innerText = 'Es la primera versión de OS X, la cual fue lanzada el 24 de marzo de 2001, siendo esta la version en la que se exponian las principales nuevas caracteristicas de OS X. Aunque era una beta, Se habló mucho de su estabilidad y caracteristicas para el mercado de consumo. MAC OS X fue la transición de los sistemas operativos MAC OS clasicos a los de la nueva generación. Introdujó un nuevo codigo fuente, completamente distinto al de MAC OS 9 y todos sus predecesores.';
            imageElement.innerHTML = '<img src="images/cheetah.jpg" alt="Mac OS X 10.0 Cheetah" class="image">';
            break;
        case 'mac_9':
            nameElement.innerText = 'Mac OS 9';
            descriptionElement.innerText = 'Es la última versión clásica de Mac OS, fue introducida por Apple Computer el 23 de octubre de 1999 y sucedida por Mac OS X. Este sistema operativo seria una version menor del anterior Mac OS 8, pero se cambio a Mac OS 9 para suplir el salto hacia la siguiente generacion del Mac OS. Apple lo catalogó como "El mejor sistema operativo de internet" destacando funcionalidades de este sistema operativo.';
            imageElement.innerHTML = '<img src="images/mac_9.png" alt="Mac OS 9" class="image">';
            break;
        case 'mac_8':
            nameElement.innerText = 'Mac OS 8';
            descriptionElement.innerText = 'Es una versión de Mac OS lanzada el 26 de julio de 1997 y ha sido la mayor revision de Mac OS desde el lanzamiento del System 7, seis años antes. Mac OS 8 representaba el esfuerzo de Apple por integrar muchas de las tecnologías desarrolladas para el ambicioso proyecto con el nombre en clave Copland.';
            imageElement.innerHTML = '<img src="images/mac_8.png" alt="Mac OS 8" class="image">';
            break;
        case 'sistema_7':
            nameElement.innerText = 'Sistema 7';
            descriptionElement.innerText = 'También conocido como Mac OS 7, fue introducido el 13 de mayo de 1991 y el principal sistema operativo de los Mac hasta ser sustitudido por el Mac OS 8 en 1997. Las características añadidas al System 7 incluyeron Multitarea cooperativa, memoria virtual, compartir archivos personales, QuickTime, QuickDraw 3D y una interfaz gráfica mejorada. Hoy en día todavía es utilizado por un pequeño número de usuarios Macintosh que utilizan equipos basados en Microprocesadores Motorola de la familia 68000.';
            imageElement.innerHTML = '<img src="images/sistema_7.png" alt="Sistema 7" class="image">';
            break;
        case 'sistema_6':
            nameElement.innerText = 'Sistema 6';
            descriptionElement.innerText = 'System 6 era el nombre del sistema operativo de la computadora Apple Macintosh, que se introdujo en abril de 1988, antes de la introducción del System 7. Con el Sistema 6, Apple unificó la numeración de versiones entre la versión del Sistema, la versión del Finder y el paquete de lanzamiento de actualización, siendo el paquete de lanzamiento el seguimiento de la versión del Sistema (por ejemplo, 6.0.2) y la versión del Finder 6.1.';
            imageElement.innerHTML = '<img src="images/sistema_6.png" alt="Sistema 6" class="image">';
            break;
        case 'sistema_5':
            nameElement.innerText = 'Sistema 5';
            descriptionElement.innerText = 'Fue lanzado en 1987 y ofrecía mejoras sobre un paquete de software que incluía System 4.2, Finder versión 6.0, MultiFinder 1.0 y LaserWriter versión 5.0.';
            imageElement.innerHTML = '<img src="images/sistema_5.png" alt="Sistema 5" class="image">';
            break;
        case 'sistema_4':
            nameElement.innerText = 'Sistema 4';
            descriptionElement.innerText = 'Una versión temprana del sistema operativo Mac OS, lanzada en 1987, se introdujo con Macintosh SE y Macintosh II, incorporando múltiple soporte al monitor. En la versión 4.1 el Finder soportaba ya varios programas, mostrando la memoria utilizada por cada uno, y contaba con un panel de control configurable.';
            imageElement.innerHTML = '<img src="images/sistema_4.png" alt="Sistema 4" class="image">';
            break;
        case 'sistema_3':
            nameElement.innerText = 'Sistema 3';
            descriptionElement.innerText = 'Lanzado en 1986, introdujo varias mejoras en comparación con versiones anteriores, reemplazó el sistema de archivos HFS por el MSF, permitiendo carpetas anidadas. Se añadió un icono de zoom para cambiar el tamaño del contenido de las ventanas. En las versiones 3.2 y 3.3 se arreglaron errores y se incluyó un sistema de compartición de archivos.';
            imageElement.innerHTML = '<img src="images/sistema_3.png" alt="Sistema 3" class="image">';
            break;
        case 'sistema_2':
            nameElement.innerText = 'Sistema 2';
            descriptionElement.innerText = 'Una de las primeras versiones del sistema operativo para Macintosh, lanzada en 1985, introdujo notables mejoras, incrementando la velocidad del Finder (el gestor de archivos e interfaz gráfica de Mac). Se añadieron nuevas opciones como la creación de carpetas, y se listaban los ítems en vertical como iconos. Se podían extraer discos y unidades arrastrándolos a la papelera.';
            imageElement.innerHTML = '<img src="images/sistema_2.png" alt="Sistema 2" class="image">';
            break;
        case 'sistema_1':
            nameElement.innerText = 'Sistema 1';
            descriptionElement.innerText = 'La primera versión del sistema operativo para Macintosh, lanzada en 1984, que tenía escritorio, ventanas, iconos, menús y puntero de ratón. No existía la memoria virtual, por lo que no se podía trabajar en dos aplicaciones a la vez, y la papelera se vaciaba al reiniciar el ordenador. Tampoco permitía carpetas anidadas. System 1.1 añadió mejoras de velocidad y los cuadros de diálogo.';
            imageElement.innerHTML = '<img src="images/sistema_1.png" alt="Sistema 1" class="image">';
            break;
        case 'version_1.0':
            nameElement.innerText = 'MS-DOS 1.0';
            descriptionElement.innerText = 'La primera edición, MS-DOS 1.0, fue presentada en 1982. La versión incluida en los PCs de IBM fue conocida como PC DOS. Soporta 16 KiB de memoria RAM, disquetes de 5,25 pulgadas de una sola cara de 160 KiB. 22 órdenes. Permite archivos con extensión .com y .exe. Incorpora el intérprete de órdenes COMMAND.COM';
            imageElement.innerHTML = '<img src="images/version_1.0.png" alt="Sistema 1" class="image">';
            break;
        case 'version_1.1':
            nameElement.innerText = 'MS-DOS 1.1';
            descriptionElement.innerText = 'La versión 1.1 fue una actualización relativamente menor de DOS, lanzada junto con una computadora personal actualizada en mayo de 1982. La PC más nueva tenía unidades de disquete de doble cara; DOS simplemente duplicó la capacidad del disco utilizando ambos lados, pasando de 160 KB a 320 KB. Por supuesto, el propio DOS 1.1 todavía se enviaba en discos de 160 KB para que pudiera usarse en el modelo de PC anterior.';
            imageElement.innerHTML = '<img src="images/version_1.1.png" alt="Sistema 1" class="image">';
            break;
        case 'version_1.25':
            nameElement.innerText = 'MS-DOS 1.25';
            descriptionElement.innerText = 'MS-DOS 1.25 se lanzó en abril de 1982 como la primera versión general para clientes OEM distintos de IBM, por lo que fue utilizado por todos los primeros fabricantes de clones. Algunos OEM etiquetaron su lanzamiento con diferentes números de versión (por ejemplo, COMPAQ), pero todos se basan en la versión 1.25.';
            imageElement.innerHTML = '<img src="images/version_1.25.png" alt="Sistema 1" class="image">';
            break;
        case 'version_2.0':
            nameElement.innerText = 'MS-DOS 2.0';
            descriptionElement.innerText = 'Lanzado en 1983, MS-DOS 2.0 se le introdujeron características propias de Unix, como el uso de subdirectorios, tuberías, redirección de entrada y salida de órdenes, así como soporte para discos duros y unidades de disquete de 360 KiB de capacidad puedes jugar poli station sin problemas';
            imageElement.innerHTML = '<img src="images/version_2.0.png" alt="MS-DOS 2.0">';
            break;
        case 'version_2.1':
            nameElement.innerText = 'MS-DOS 2.1';
            descriptionElement.innerText = 'Esta versión mejoró la compatibilidad con el hardware IBM PCjr, fue lanzada en 1983 e implemento mejoras de compatibilidad';
            imageElement.innerHTML = '<img src="images/version_2.1.png" alt="MS-DOS 2.1">';
            break;
        case 'version_2.11':
            nameElement.innerText = 'MS-DOS 2.11';
            descriptionElement.innerText = 'MS-DOS 2.11 introdujo mejoras en el soporte de impresoras y se añaden nuevos caracteres en el teclado, esta actualizacion se da en el mismo año de la version 2.0';
            imageElement.innerHTML = '<img src="images/version_2.11.png" alt="MS-DOS 2.11">';
            break;
        case 'version_3.0':
            nameElement.innerText = 'MS-DOS 3.0';
            descriptionElement.innerText = 'En 1984, Microsoft lanzaria su versión 3.0 de MS-DOS, y es entonces cuando da soporte para discos de alta densidad de 1,2MB y posibilidad de instalar un disco duro con un maximo de 32MB.';
            imageElement.innerHTML = '<img src="images/version_3.0.png" alt="MS-DOS 3.0">';
            break;
        case 'version_3.1':
            nameElement.innerText = 'MS-DOS 3.1';
            descriptionElement.innerText = 'MS-DOS 3.1 introdujo mejoras en las capacidades de redes IBM PC Networks y mejoras en el soporte de red, esta fue lanzada en el año 1985.';
            imageElement.innerHTML = '<img src="images/version_3.1.png" alt="MS-DOS 3.1">';
            break;
        case 'version_3.2':
            nameElement.innerText = 'MS-DOS 3.2';
            descriptionElement.innerText = 'Lanzado en 1986, MS-DOS 3.2 ofreció soporte para disquetes de 3.5 pulgadas y mejoras en la gestión de disquetes';
            imageElement.innerHTML = '<img src="images/version_3.2.png" alt="MS-DOS 3.2">';
            break;
        case 'version_3.3':
            nameElement.innerText = 'MS-DOS 3.3';
            descriptionElement.innerText = 'En 1984, Microsoft lanzó su versión 3.0 de MS-DOS, y es entonces cuando da soporte para discos de alta densidad de 1,2 MB y posibilidad de instalar un disco duro con un máximo de 32 MB.';
            imageElement.innerHTML = '<img src="images/version_3.3.png" alt="MS-DOS 3.3">';
            break;
        case 'version_3.31':
            nameElement.innerText = 'MS-DOS 3.31';
            descriptionElement.innerText = 'Lanzada en 1987, MS-DOS 3.31 introdujo soporte para discos duros con más de 32 MB, Y mejoras en el soporte de red.';
            imageElement.innerHTML = '<img src="images/version_3.31.png" alt="MS-DOS 3.31">';
            break;
        case 'version_4.0':
            nameElement.innerText = 'MS-DOS 4.0';
            descriptionElement.innerText = 'MS-DOS 4.0 introdujo soporte para discos duros más grandes y una interfaz gráfica básica, fue una versión multitarea de MS-DOS desarrollada por Microsoft basada en MS-DOS 2.0. La falta de interés de los OEM, en particular de IBM (que anteriormente proporcionó código multitarea a Microsoft en IBM PC DOS incluido con TopView), llevó a que se lanzara solo en una forma reducida. A veces se le conoce como MS-DOS 4.0 europeo, ya que se utilizó principalmente allí. No debe confundirse con PC DOS 4.00 o MS-DOS 4.01 y posteriores, que no contenían funciones multitarea.';
            imageElement.innerHTML = '<img src="images/version_4.0.png" alt="MS-DOS 4.0">';
            break;
        case 'version_4.01':
            nameElement.innerText = 'MS-DOS 4.01';
            descriptionElement.innerText = 'MS-DOS 4.01 corrigió varios errores de la versión 4.0, y adicionó un soporte para particiones mayores de 32 MB, esta version salio el mismo año que la version 4.0.';
            imageElement.innerHTML = '<img src="images/version_4.01.jpg" alt="MS-DOS 4.01">';
            break;
        case 'version_5.0':
            nameElement.innerText = 'MS-DOS 5.0';
            descriptionElement.innerText = 'MS-DOS 5.0 introdujo una interfaz de usuario mejorada y se presentó el 11 de junio de 1991, incluía nuevas características de administración de memoria y herramientas para soporte de macros y mejora del intérprete de comandos o shell.';
            imageElement.innerHTML = '<img src="images/version_5.0.png" alt="MS-DOS 5.0">';
            break;
        case 'version_6.0':
            nameElement.innerText = 'MS-DOS 6.0';
            descriptionElement.innerText = 'MS-DOS 6.0, lanzada en 1993, ofreció nuevas herramientas como la compresión de disco y la gestión de memoria por medio de DoubleSpace, que prácticamente duplica la capacidad del disco duro, gracias a que comprime los archivos. Double Space también puede comprimir los datos de disquetes.';
            imageElement.innerHTML = '<img src="images/version_6.0.png" alt="MS-DOS 6.0">';
            break;
        case 'version_6.2':
            nameElement.innerText = 'MS-DOS 6.2';
            descriptionElement.innerText = 'Esta versión introdujo mejoras en las utilidades de disco y mayor estabilidad en cuanto a las utilidades del sistema.';
            imageElement.innerHTML = '<img src="images/version_6.2.png" alt="MS-DOS 6.2">';
            break;
        case 'version_6.21':
            nameElement.innerText = 'MS-DOS 6.21';
            descriptionElement.innerText = 'Lanzada en 1994, MS-DOS 6.21 se enfocó en la corrección de errores sin incluir nuevas funciones, esta versión se lanzó específicamente para eliminar DoubleSpace debido a una orden judicial. Su sustituto "DriveSpace" aún no estaba listo.';
            imageElement.innerHTML = '<img src="images/version_6.21.jpg" alt="MS-DOS 6.21">';
            break;
        case 'version_6.22':
            nameElement.innerText = 'MS-DOS 6.22';
            descriptionElement.innerText = 'Microsoft DOS 6.22 fue la última versión independiente de Microsoft. También fue el último de Microsoft en ejecutarse en un 8088, 8086. 6.22 agrega DriveSpace, un reemplazo para la compresión de unidad DoubleSpace de DOS 6.20 que se eliminó en 6.21.';
            imageElement.innerHTML = '<img src="images/version_6.22.png" alt="MS-DOS 6.22">';
            break;
        case 'version_7.0':
            nameElement.innerText = 'MS-DOS 7.0';
            descriptionElement.innerText = 'MS-DOS 7.0 fue una versión integrada en Windows 95, ofreciendo una mayor compatibilidad con el nuevo sistema operativo...';
            imageElement.innerHTML = '<img src="images/version_7.0.png" alt="MS-DOS 7.0">';
                break;
        case 'version_7.1':
            nameElement.innerText = 'MS-DOS 7.1';
            descriptionElement.innerText = 'Esta versión fue parte de Windows 95 OSR2 y Windows 98, mejorando la compatibilidad con discos grandes...';
            imageElement.innerHTML = '<img src="images/version_7.1.png" alt="MS-DOS 7.1">';
            break;
        case 'version_8.0':
            nameElement.innerText = 'MS-DOS 8.0';
            descriptionElement.innerText = 'MS-DOS 8.0 fue la última versión, incluida en Windows ME, y dejó de ser relevante con la llegada de Windows XP...';
            imageElement.innerHTML = '<img src="images/version_8.0.png" alt="MS-DOS 8.0">';
            break;
        case 'windows_11':
            nameElement.innerText = 'Windows 11';
            descriptionElement.innerText = 'Descripción de Windows 11.';
            imageElement.innerText = 'Imagen de Windows 11';
            break;
        case 'windows_10':
            nameElement.innerText = 'Windows 10';
            descriptionElement.innerText = 'es un sistema operativo desarrollado por Microsoft como parte de la familia de sistemas operativos Windows NT.7 Fue dado a conocer oficialmente en septiembre de 2014, seguido por una breve presentación de demostración en la conferencia Build 2014. Entró en fase beta de prueba en octubre de 2014 y fue lanzado al público en general el 29 de julio de 2015.';
            imageElement.innerHTML = '<img src="images/images.jpg" alt="Windows 10" style="max-width: 100%;">';
            break;
        case 'windows_8':
            nameElement.innerText = 'Windows 8';
            descriptionElement.innerText = 'Descripción de Windows 8.';
            imageElement.innerText = 'Imagen de Windows 8';
            break;
        case 'vista':
            nameElement.innerText = 'Windows Vista';
            descriptionElement.innerText = 'Descripción de Windows Vista.';
            imageElement.innerText = 'Imagen de Windows Vista';
            break;
        case 'xp':
            nameElement.innerText = 'Windows XP';
            descriptionElement.innerText = 'Descripción de Windows XP.';
            imageElement.innerText = 'Imagen de Windows XP';
            break;
        case 'windows_98':
            nameElement.innerText = 'Windows 98';
            descriptionElement.innerText = 'Descripción de Windows 98.';
            imageElement.innerText = 'Imagen de Windows 98';
            break;
        case 'windows_95':
            nameElement.innerText = 'Windows 95';
            descriptionElement.innerText = 'Descripción de Windows 95.';
            imageElement.innerText = 'Imagen de Windows 95';
            break;
        case 'win_11_ent':
            nameElement.innerText = 'Windows 11 Enterprise';
            descriptionElement.innerText = 'Descripción de Windows 11 Enterprise.';
            imageElement.innerText = 'Imagen de Windows 11 Enterprise';
            break;
        case 'win_10_pro':
            nameElement.innerText = 'Windows 10 Pro';
            descriptionElement.innerText = 'Descripción de Windows 10 Pro.';
            imageElement.innerText = 'Imagen de Windows 10 Pro';
            break;
        case 'win_8_pro':
            nameElement.innerText = 'Windows 8 Pro';
            descriptionElement.innerText = 'Descripción de Windows 8 Pro.';
            imageElement.innerText = 'Imagen de Windows 8 Pro';
            break;
        case 'win_7_pro':
            nameElement.innerText = 'Windows 7 Professional';
            descriptionElement.innerText = 'Descripción de Windows 7 Professional.';
            imageElement.innerText = 'Imagen de Windows 7 Professional';
            break;
        case 'vista_bus':
            nameElement.innerText = 'Windows Vista Business';
            descriptionElement.innerText = 'Descripción de Windows Vista Business.';
            imageElement.innerText = 'Imagen de Windows Vista Business';
            break;
        case 'xp_pro':
            nameElement.innerText = 'Windows XP Professional';
            descriptionElement.innerText = 'Descripción de Windows XP Professional.';
            imageElement.innerText = 'Imagen de Windows XP Professional';
            break;
        case 'win_2000':
            nameElement.innerText = 'Windows 2000';
            descriptionElement.innerText = 'Descripción de Windows 2000.';
            imageElement.innerText = 'Imagen de Windows 2000';
            break;
        default:
            nameElement.innerText = 'Nombre sistema operativo';
            descriptionElement.innerText = 'DESCRIPCIÓN DEL SISTEMA';
            imageElement.innerHTML = 'imagen';
    }
}