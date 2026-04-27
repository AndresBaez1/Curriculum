document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA EXISTENTE PARA BOTONES DESPLEGABLES ---
    const toggleButtons = document.querySelectorAll('.btn-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            targetContent.classList.toggle('show');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });

    // --- NUEVA LÓGICA PARA LA ANIMACIÓN DE LA FOTO DE PERFIL ---
    const foto = document.querySelector('.fotoPerfil');

    if (foto) {
        // 1. Crear el elemento para el halo de gradiente dinámicamente
        const halo = document.createElement('div');
        halo.classList.add('foto-halo');
        // Insertar el halo justo después de la foto en el DOM
        foto.parentNode.insertBefore(halo, foto.nextSibling);

        // 2. Definir funciones para manejar los estados
        const activarEfecto = () => {
            foto.classList.add('presionado');
        };

        const desactivarEfecto = () => {
            foto.classList.remove('presionado');
        };

        // 3. Función para descargar el PDF
        const descargarPDF = () => {
            const link = document.createElement('a');

            // Ruta actualizada apuntando a la carpeta "documentos"
            link.href = 'documentos/CV_Andres_Emmanuel_Baez.pdf';
            link.download = 'CV_Andres_Emmanuel_Baez.pdf';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        // 4. Escuchar eventos de ratón (Computadoras)
        foto.addEventListener('mousedown', activarEfecto);

        // Cuando suelta el clic, desactivamos la animación y DESCARGAMOS
        foto.addEventListener('mouseup', () => {
            if (foto.classList.contains('presionado')) {
                desactivarEfecto();
                descargarPDF();
            }
        });

        // Si el usuario hace clic pero arrastra el mouse fuera de la foto, cancelamos
        foto.addEventListener('mouseleave', desactivarEfecto);

        // 5. Escuchar eventos táctiles (Móviles)
        foto.addEventListener('touchstart', (e) => {
            // e.preventDefault(); // Opcional: previene comportamientos por defecto como zoom
            activarEfecto();
        }, { passive: true });

        // Cuando suelta el dedo de la pantalla, desactivamos y DESCARGAMOS
        foto.addEventListener('touchend', () => {
            if (foto.classList.contains('presionado')) {
                desactivarEfecto();
                descargarPDF();
            }
        });

        foto.addEventListener('touchcancel', desactivarEfecto); // Si la acción táctil se interrumpe
    }
});


