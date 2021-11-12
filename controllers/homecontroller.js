exports.mostrarMensaje = (req, res) =>{
    res.render('home', {
        nombrePagina: 'DevJobs',
        tagline: 'Pagina de prueba',
        barra: true,
        boton: true,
    } )
}

exports.mostrarUsuaurio = (req, res) =>{
    res.render('usuario', {
        nombrePagina: 'Usuarios',
        tagline: 'Pagina de Usuarios',
        barra: true,
        boton: true,
    } )
}