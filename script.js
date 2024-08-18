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
            imageElement.innerText = '';
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
        case 'big_sur':
            nameElement.innerText = 'Mac OS 11 Big Sur';
            descriptionElement.innerText = 'Es la decimoséptima versión importante de macOS, el sistema operativo de escritorio de Apple para computadoras Macintosh. El sucesor de macOS Catalina, Big Sur fue anunciado en la Conferencia Mundial de Desarrolladores 2020 el 22 de junio de 2020 y se lanzó al público el 12 de noviembre de 2020.';
            imageElement.innerText = 'Imagen de Mac OS 11 Big Sur';
            break;
        case 'catalina':
            nameElement.innerText = 'Mac OS X 10.15 "Catalina"';
            descriptionElement.innerText = 'Es la decimosexta versión principal de macOS, el sistema operativo de escritorio de Apple para computadoras Macintosh. Es el sucesor de macOS Mojave, se anunció en la WWDC 2019 el 3 de junio de 2019 y se lanzó al público el 7 de octubre de 2019. Catalina es la primera versión de macOS que admite exclusivamente aplicaciones de 64 bits.';
            imageElement.innerHTML = '<img src="images/catalina.png" alt="Mac OS X 10.15 Catalina">';
            break;
        case 'mojave':
            nameElement.innerText = 'Mac OS X 10.14 "Mojave"';
            descriptionElement.innerText = 'Es la decimoquinta versión de macOS (anteriormente OS X), el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh. Es la tercera versión del sistema operativo tras el cambio de denominación de OS X a macOS';
            imageElement.innerHTML = '<img src="images/mojave.png" alt="Mac OS X 10.14 Mojave">';
            break;
        case 'high_sierra':
            nameElement.innerText = 'Mac OS X 10.13 "High Sierra"';
            descriptionElement.innerText = 'Es la decimocuarta versión de macOS (anteriormente OS X), el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh. Es la segunda versión del sistema operativo tras el cambio de denominación de OS X a macOS.';
            imageElement.innerHTML = '<img src="images/high_sierra.png" alt="Mac OS X 10.13 High Sierra">';
            break;
        case 'sierra':
            nameElement.innerText = 'Mac OS X 10.12 "Sierra"';
            descriptionElement.innerText = 'Es la decimotercera versión de macOS (anteriormente OS X), el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh. Es la primera versión del sistema operativo tras el cambio de denominación de OS X a macOS.';
            imageElement.innerHTML = '<img src="images/sierra.png" alt="Mac OS X 10.12 Sierra">';
            break;
        case 'capitan':
            nameElement.innerText = 'Mac OS X 10.11 "El Capitan"';
            descriptionElement.innerText = 'Es la onceava versión de OS X, el sistema operativo de Apple para sus ordenadores de escritorio, portátiles y servidores Macintosh; la versión de prueba pública fue lanzada el 9 de julio de 2015 y los usuarios pudieron descargarla desde la Mac App Store desde el día 30 de septiembre de 2015.';
            imageElement.innerHTML = '<img src="images/capitan.png" alt="Mac OS X 10.11 El Capitan">';
            break;
        case 'yosemite':
            nameElement.innerText = 'Mac OS X 10.10 "Yosemite"';
            descriptionElement.innerText = 'Es la undécima versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/yosemite.png" alt="Mac OS X 10.10 Yosemite">';
            break;
        case 'mavericks':
            nameElement.innerText = 'Mac OS X 10.9 "Mavericks"';
            descriptionElement.innerText = 'Es la décima versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/mavericks.png" alt="Mac OS X 10.9 Mavericks">';
            break;
        case 'mountain_lion':
            nameElement.innerText = 'Mac OS X 10.8 "Mountain Lion"';
            descriptionElement.innerText = 'Es la novena versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/mountain_lion.png" alt="Mac OS X 10.8 Mountain Lion">';
            break;
        case 'lion':
            nameElement.innerText = 'Mac OS X 10.7 "Lion"';
            descriptionElement.innerText = 'Es la octava versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/lion.png" alt="Mac OS X 10.7 Lion">';
            break;
        case 'snow_leopard':
            nameElement.innerText = 'Mac OS X 10.6 "Snow Leopard"';
            descriptionElement.innerText = 'Es la séptima versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/snow_leopard.png" alt="Mac OS X 10.6 Snow Leopard">';
            break;
        case 'leopard':
            nameElement.innerText = 'Mac OS X 10.5 "Leopard"';
            descriptionElement.innerText = 'Es la sexta versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/leopard.png" alt="Mac OS X 10.5 Leopard">';
            break;
        case 'tiger':
            nameElement.innerText = 'Mac OS X 10.4 "Tiger"';
            descriptionElement.innerText = 'Es la quinta versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/tiger.png" alt="Mac OS X 10.4 Tiger">';
            break;
        case 'panther':
            nameElement.innerText = 'Mac OS X 10.3 "Panther"';
            descriptionElement.innerText = 'Es la cuarta versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/panther.png" alt="Mac OS X 10.3 Panther">';
            break;
        case 'jaguar':
            nameElement.innerText = 'Mac OS X 10.2 "Jaguar"';
            descriptionElement.innerText = 'Es la tercera versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/jaguar.png" alt="Mac OS X 10.2 Jaguar">';
            break;
        case 'puma':
            nameElement.innerText = 'Mac OS X 10.1 "Puma"';
            descriptionElement.innerText = 'Es la segunda versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/puma.png" alt="Mac OS X 10.1 Puma">';
            break;
        case 'cheetah':
            nameElement.innerText = 'Mac OS X 10.0 "Cheetah"';
            descriptionElement.innerText = 'Es la primera versión principal de macOS...';
            imageElement.innerHTML = '<img src="images/cheetah.png" alt="Mac OS X 10.0 Cheetah">';
            break;
        case 'mac_9':
            nameElement.innerText = 'Mac OS 9';
            descriptionElement.innerText = 'Es la última versión clásica de Mac OS...';
            imageElement.innerHTML = '<img src="images/mac_g.png" alt="Mac OS 9">';
            break;
        case 'mac_8':
            nameElement.innerText = 'Mac OS 8';
            descriptionElement.innerText = 'Es una versión de Mac OS lanzada en 1997...';
            imageElement.innerHTML = '<img src="images/mac_8.png" alt="Mac OS 8">';
            break;
        case 'sistema_7':
            nameElement.innerText = 'Sistema 7';
            descriptionElement.innerText = 'También conocido como Mac OS 7, fue lanzado en 1991...';
            imageElement.innerHTML = '<img src="images/sistema_7.png" alt="Sistema 7">';
            break;
        case 'sistema_6':
            nameElement.innerText = 'Sistema 6';
            descriptionElement.innerText = 'Una de las primeras versiones del sistema operativo para Macintosh...';
            imageElement.innerHTML = '<img src="images/sistema_6.png" alt="Sistema 6">';
            break;
        case 'sistema_5':
            nameElement.innerText = 'Sistema 5';
            descriptionElement.innerText = 'Fue lanzado en 1987 y ofrecía mejoras sobre las versiones anteriores...';
            imageElement.innerHTML = '<img src="images/sistema_5.png" alt="Sistema 5">';
            break;
        case 'sistema_4':
            nameElement.innerText = 'Sistema 4';
            descriptionElement.innerText = 'Una versión temprana del sistema operativo Mac OS, lanzada en 1987...';
            imageElement.innerHTML = '<img src="images/sistema_4.png" alt="Sistema 4">';
            break;
        case 'sistema_3':
            nameElement.innerText = 'Sistema 3';
            descriptionElement.innerText = 'Lanzado en 1986, introdujo varias mejoras en comparación con versiones anteriores...';
            imageElement.innerHTML = '<img src="images/sistema_3.png" alt="Sistema 3">';
            break;
        case 'sistema_2':
            nameElement.innerText = 'Sistema 2';
            descriptionElement.innerText = 'Una de las primeras versiones del sistema operativo para Macintosh, lanzada en 1985...';
            imageElement.innerHTML = '<img src="images/sistema_2.png" alt="Sistema 2">';
            break;
        case 'sistema_1':
            nameElement.innerText = 'Sistema 1';
            descriptionElement.innerText = 'La primera versión del sistema operativo para Macintosh, lanzada en 1984...';
            imageElement.innerHTML = '<img src="images/sistema_1.png" alt="Sistema 1">';
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