<!DOCTYPE html>
<html <?php language_attributes(); ?>>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="<?php echo get_bloginfo('description');?>">
<meta name="author" content="">
<title><?php echo get_bloginfo('title');?></title>
<!-- CSS de Bootstrap -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
<!-- Ajout d'une nouvelle feuille de style qui sera spécifique à notre thème -->
<link href="<?php bloginfo('template_directory');?>/blog.css" rel="stylesheet">
<!-- HTML5 shim et Respond.js pour supporter les éléments HTML5 pour les versions p
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
<?php wp_head(); ?>
</head>