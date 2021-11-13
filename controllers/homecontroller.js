exports.mostrarMensaje = (req, res) =>{
    res.render('home', {
        nombrePagina: 'Tienda de Productos WherEx',
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