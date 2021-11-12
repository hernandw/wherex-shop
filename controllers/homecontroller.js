exports.mostrarMensaje = (req, res) =>{
    res.render('home', {
        nombrePagina: 'DevJobs',
        tagline: 'Pagina de prueba',
        barra: true,
        boton: true,
    } )
}