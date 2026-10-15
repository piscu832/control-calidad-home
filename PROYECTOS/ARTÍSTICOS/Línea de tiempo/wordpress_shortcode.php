<?php
/**
 * SNIPPET DE WORDPRESS: SHORTCODE PARA LÍNEA DE TIEMPO INTERACTIVA
 * Empresa: VILLALBA HNOS. IMPLANTES S.A.
 * 
 * Instrucciones:
 * 1. Pega este código al final del archivo functions.php de tu Tema Hijo (Child Theme)
 *    o mediante el plugin 'Code Snippets' / 'WPCode'.
 * 2. Guarda el archivo 'wordpress_embed.html' en la carpeta de tu tema: wp-content/themes/tu-tema/templates/wordpress_embed.html
 *    o usa directamente el shortcode [linea_tiempo_villalba].
 */

function villalba_render_linea_tiempo_shortcode() {
    $embed_file = get_stylesheet_directory() . '/templates/wordpress_embed.html';
    
    // Si el archivo HTML existe en el tema, lo carga directamente:
    if (file_exists($embed_file)) {
        return file_get_contents($embed_file);
    }
    
    // De lo contrario, se puede incluir el archivo subido a wp-content/uploads/
    $upload_dir = wp_upload_dir();
    $uploaded_embed = $upload_dir['basedir'] . '/linea-de-tiempo/wordpress_embed.html';
    if (file_exists($uploaded_embed)) {
        return file_get_contents($uploaded_embed);
    }

    return '<!-- Error: Archivo wordpress_embed.html no encontrado -->';
}
add_shortcode('linea_tiempo_villalba', 'villalba_render_linea_tiempo_shortcode');
