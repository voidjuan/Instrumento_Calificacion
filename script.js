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
        case 'big_sur':
            nameElement.innerText = 'Mac OS 11 Big Sur';
            descriptionElement.innerText = 'Es la decimoséptima versión importante de macOS, el sistema operativo de escritorio de Apple para computadoras Macintosh. El sucesor de macOS Catalina, Big Sur fue anunciado en la Conferencia Mundial de Desarrolladores 2020 el 22 de junio de 2020 y se lanzó al público el 12 de noviembre de 2020.';
            imageElement.innerText = 'Imagen de Mac OS 11 Big Sur';
            break;
        case 'panther':
            nameElement.innerText = 'Mac OS X 10.3 "Panther"';
            descriptionElement.innerText = 'Es la cuarta versión principal del Mac OS X, el sistema operativo de Apple. Sucedió a Mac OS X v10.2, llamado “Jaguar” y fue sustituido por el Mac OS X v10.4, denominado “Tiger”. Apple lanzó Panther el 24 de octubre del 2003';
            imageElement.innerText = 'Imagen de Mac OS X 10.3 "Panther"';
            break;
        case 'cheetah':
            nameElement.innerText = 'Mac OS X 10.0 "Cheetah"';
            descriptionElement.innerText = 'Es la primera versión importante de Mac OS X (ahora llamado macOS). Fue lanzado el 24 de marzo de 2001, siendo esta la versión en la que se exponían las principales nuevas características de OS X. Aunque era una beta, se habló mucho de su estabilidad y características para el mercado de consumo.';
            imageElement.innerText = 'Imagen de Mac OS X 10.0 "Cheetah"';
            break;
        case 'ventura':
            nameElement.innerText = 'Mac OS 13 Ventura';
            descriptionElement.innerText = 'Es la decimonovena versión principal de macOS, el sistema operativo de escritorio de Apple para ordenadores Macintosh. Es el sucesor de macOS Monterey y fue anunciado en la WWDC 2022 el 6 de junio de 2022. Lleva el nombre de Ventura en California, siguiendo el sistema de nomenclatura que comenzó con OS X Mavericks.';
            imageElement.innerText = 'Imagen de Mac OS 13 Ventura';
            break;
        case 'monterrey':
            nameElement.innerText = 'Mac OS 12 Monterrey';
            descriptionElement.innerText = 'Es la decimoctava versión principal de macOS, el sistema operativo de escritorio de Apple para computadoras Mac. El sucesor de macOS Big Sur fue anunciado en la WWDC 2021 el 7 de junio de 2021 y se publicó en el cuarto trimestre del año. Se lanzó una versión beta de macOS Monterey el 7 de junio de 2021 para los desarrolladores registrados en su programa de desarrolladores. Una versión beta pública estuvo disponible en julio de 2021.';
            imageElement.innerText = 'Imagen de Mac OS 12 Monterrey';
            break;
        case 'mac_8':
            nameElement.innerText = 'Mac OS 8';
            descriptionElement.innerText = 'Es un sistema operativo comercializado por Apple Computer el 26 de julio de 1997 Es la mayor revisión de Mac OS desde el lanzamiento del System 7, seis años antes. Mac OS 8 representaba el esfuerzo de Apple por integrar muchas de las tecnologías desarrolladas para el ambicioso proyecto con el nombre en clave Copland.';
            imageElement.innerText = 'Imagen de Mac OS 8';
            break;
        case 'sistema_1':
            nameElement.innerText = 'Sistema 1';
            descriptionElement.innerText = 'Es la primera versión importante del clásico sistema operativo Mac OS . Fue desarrollado para el microprocesador Motorola 68000. El System 1 se lanzó el 24 de enero de 1984, junto con el Macintosh 128K , el primero de la familia de computadoras personales Macintosh . Recibió una actualización, "System 1.1", el 29 de diciembre de 1984, antes de ser reemplazado por el System 2.';
            imageElement.innerText = 'Imagen del Sistema 1';
            break;
        case 'sistema_4':
            nameElement.innerText = 'Sistema 4';
            descriptionElement.innerText = 'Descripción del Sistema 4.';
            imageElement.innerText = 'Imagen del Sistema 4';
            break;
        case 'sistema_7':
            nameElement.innerText = 'Sistema 7';
            descriptionElement.innerText = 'Descripción del Sistema 7.';
            imageElement.innerText = 'Imagen del Sistema 7';
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
            imageElement.innerText = 'imagen';
    }
}