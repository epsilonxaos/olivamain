$(".dropify").dropify({
    messages: {
        default: "Arrastre y suelte un archivo o haga clic aquí",
        replace: "Arrastre y suelte un archivo o haga clic para reemplazar",
        remove: "Eliminar",
        error: "Ooops, algo salio mal.",
    },
    error: {
        fileSize:
            "El tamaño del archivo es demasiado grande. ({{ value }} max).",
        minWidth:
            "El tamaño del archivo es demasiado pequeño. ({{ value }}}px min).",
        maxWidth:
            "El ancho de la imagen es demasiado grande. ({{ value }}}px max).",
        minHeight:
            "El alto de la imagen es demasiado pequeño. ({{ value }}}px min).",
        maxHeight:
            "El alto de la imagen es demasiado grande. ({{ value }}px max).",
        imageFormat:
            "El formato de la imagen no está permitido. Formatos aceptados ({{ value }}).",
    },
});
