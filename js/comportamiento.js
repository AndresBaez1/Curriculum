
    //_______________Boton presentacion____________________________
    function desplegar_presentacion(){
        texto_presentacion.classList.toggle('show');
    }

    let btn_presentacion = document.getElementById('btn_presentacion');
    let texto_presentacion = document.getElementById('texto_presentacion');
    btn_presentacion.addEventListener('click', desplegar_presentacion);

    //_______________Boton experiencia____________________________
    function desplegar_experiencia(){
        texto_experiencia.classList.toggle('show');
    }

    let btn_experiencia = document.getElementById('btn_experiencia');
    let texto_experiencia = document.getElementById('texto_experiencia');
    btn_experiencia.addEventListener('click', desplegar_experiencia);

    //________________Boton estudios______________________________
    function desplegar_estudios(){
        texto_estudios.classList.toggle('show');
    }

    let btn_estudios = document.getElementById('btn_estudios');
    let texto_estudios = document.getElementById('texto_estudios');
    btn_estudios.addEventListener('click', desplegar_estudios);

    //__________________Boton conocimientos_________________________
    function desplegar_conocimientos(){
        texto_conocimientos.classList.toggle('show');
    }

    let btn_conocimientos = document.getElementById('btn_conocimientos');
    let texto_conocimientos = document.getElementById('texto_conocimientos');
    btn_conocimientos.addEventListener('click', desplegar_conocimientos);

    //___________________boton idiomas_____________________________
    function desplegar_idiomas(){
        texto_idiomas.classList.toggle('show');
    }
    
    let btn_idiomas = document.getElementById('btn_idiomas');
    let texto_idiomas = document.getElementById('texto_idiomas');
    btn_idiomas.addEventListener('click', desplegar_idiomas);
    

    