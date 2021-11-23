<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'blog01wp' );

/** MySQL database username */
define( 'DB_USER', 'Marceline' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tgQFL[T>PBf]>veQ^/Jr@k RvKPworbW[kfi;q.q!k@c=:klaUNwV|y<R$Ec<BKb' );
define( 'SECURE_AUTH_KEY',  'jG6XLnMr4NQwK5aAlY0L%*g3:DpPHSqI8Z6]c:dRMxf=(mfk(g2PVa]y5|?*ME0W' );
define( 'LOGGED_IN_KEY',    'B.S5Af<C6}Z:l%ZzgarnKOm<>Av-Ip:4iHmNsk5NuTTKdC~ Hhtdl l/cdxN?yO?' );
define( 'NONCE_KEY',        'xA{d|Br.o.@>~s!!qP6UX>/WsB/%e]rYYm&+L j7CKPAH?l+GM30#QB7~=kyv=P[' );
define( 'AUTH_SALT',        'CWAN&UH#WuInwoVMHyQ>H^_zc<di*#t7qT7(xk%)Z<&^A7vcI(C6kth}v-QI4W1j' );
define( 'SECURE_AUTH_SALT', '5o}Ipq+Bt]qWp+ .a4%DqODUaq]/Yeq~0X>[qn~NmsaL}M+2/dnYMH+2oou@BhT*' );
define( 'LOGGED_IN_SALT',   'ta>&pcDr&7}3G/V[:__Qr ,HT>tGXUdQ8!(E1hN5k}F+,MX.pyGF71Z{.NSxn=>d' );
define( 'NONCE_SALT',       'xs^WXpSoK}}.k=br;A-]tv,=M+j/.M._)bWFfxqnhm$;AF+=^sY&H}Y??2su<6a5' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'w_xp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
