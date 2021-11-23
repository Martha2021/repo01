function youpi_custom_logo_setup()/* fonction pour créer un logo*/
{
$aParams = array(
'height' => 100,
'width' => 400,
'flex-height' => true,
'flex-width' => true,
'header-text' => array( 'site-title', 'site-description' ),
);
// Ajout du support
add_theme_support('custom-logo', $aParams );
}
add_action( 'after_setup_theme', 'youpi_custom_logo_setup' );