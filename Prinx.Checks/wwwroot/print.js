window.printContent = function (html) {
    // Crear un iframe oculto
    var iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.visibility = 'hidden';

    document.body.appendChild(iframe);

    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();

    iframe.onload = function () {
        // Forzar foco e imprimir
        iframe.contentWindow.focus();
        iframe.contentWindow.print();

        // Eliminar iframe luego de imprimir (con pequeño delay)
        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 500);
    };
};