import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "WordPress Basics",
    commands: [
      { label: "WordPress admin URL:", command: "https://yoursite.com/wp-admin" },
      { label: "WordPress login:", command: "https://yoursite.com/wp-login.php" },
      { label: "Reset admin password:", command: "$wp_hasher = new PasswordHash(8, true); $hashed = $wp_hasher->HashPassword('newpassword');" },
      { label: "Change WordPress URL:", command: "UPDATE wp_options SET option_value='http://newurl.com' WHERE option_name='siteurl';" },
    ],
  },
  {
    title: "Themes & Plugins",
    commands: [
      { label: "Activate theme:", command: "switch_theme('theme-slug');" },
      { label: "Get active theme:", command: "get_template();" },
      { label: "Is plugin active:", command: "is_plugin_active('plugin-folder/plugin-file.php');" },
      { label: "Activate plugin:", command: "activate_plugin('plugin-folder/plugin-file.php');" },
      { label: "Deactivate plugin:", command: "deactivate_plugins('plugin-folder/plugin-file.php');" },
      { label: "List all plugins:", command: "get_plugins();" },
    ],
  },
  {
    title: "Post Operations",
    commands: [
      { label: "Get post by ID:", command: "get_post(123);" },
      { label: "Get post title:", command: "get_the_title(123);" },
      { label: "Get post content:", command: "get_post_field('post_content', 123);" },
      { label: "Create post:", command: "wp_insert_post(array('post_title' => 'Title', 'post_content' => 'Content'));" },
      { label: "Update post:", command: "wp_update_post(array('ID' => 123, 'post_title' => 'New Title'));" },
      { label: "Delete post:", command: "wp_delete_post(123);" },
      { label: "Get recent posts:", command: "get_posts(array('numberposts' => 10));" },
    ],
  },
  {
    title: "User Operations",
    commands: [
      { label: "Get current user:", command: "wp_get_current_user();" },
      { label: "Get user by ID:", command: "get_user_by('id', 123);" },
      { label: "Get user by email:", command: "get_user_by('email', 'user@example.com');" },
      { label: "Create user:", command: "wp_create_user('username', 'password', 'email@example.com');" },
      { label: "Get user meta:", command: "get_user_meta(123, 'key');" },
      { label: "Update user meta:", command: "update_user_meta(123, 'key', 'value');" },
      { label: "Delete user:", command: "wp_delete_user(123);" },
    ],
  },
  {
    title: "Taxonomies & Categories",
    commands: [
      { label: "Get categories:", command: "get_categories();" },
      { label: "Get category by ID:", command: "get_category(123);" },
      { label: "Insert term:", command: "wp_insert_term('New Term', 'category');" },
      { label: "Delete term:", command: "wp_delete_term(123, 'category');" },
      { label: "Get post categories:", command: "get_the_terms(123, 'category');" },
      { label: "Set post terms:", command: "wp_set_post_terms(123, array('cat1', 'cat2'), 'category');" },
    ],
  },
  {
    title: "Actions & Hooks",
    commands: [
      { label: "Add action:", command: "add_action('hook_name', 'function_name');" },
      { label: "Remove action:", command: "remove_action('hook_name', 'function_name');" },
      { label: "Do action:", command: "do_action('hook_name');" },
      { label: "Add filter:", command: "add_filter('hook_name', 'function_name');" },
      { label: "Apply filter:", command: "apply_filters('hook_name', $value);" },
      { label: "Current filter:", command: "current_filter();" },
    ],
  },
  {
    title: "Database Queries",
    commands: [
      { label: "Direct SQL query:", command: "$wpdb->query('SELECT * FROM posts');" },
      { label: "Get results:", command: "$wpdb->get_results('SELECT * FROM posts');" },
      { label: "Get single var:", command: "$wpdb->get_var('SELECT COUNT(*) FROM posts');" },
      { label: "Prepare statement:", command: "$wpdb->prepare('SELECT * FROM posts WHERE ID = %d', 123);" },
      { label: "Insert data:", command: "$wpdb->insert('wp_posts', array('post_title' => 'Title'));" },
      { label: "Update data:", command: "$wpdb->update('wp_posts', array('post_title' => 'New'), array('ID' => 123));" },
    ],
  },
  {
    title: "Custom Post Types",
    commands: [
      { label: "Register post type:", command: "register_post_type('custom_type', array('public' => true, 'supports' => array('title', 'editor')));" },
      { label: "Get custom posts:", command: "get_posts(array('post_type' => 'custom_type'));" },
      { label: "Get custom post type:", command: "get_post_type(123);" },
      { label: "Get post type object:", command: "get_post_type_object('custom_type');" },
    ],
  },
  {
    title: "Admin Features",
    commands: [
      { label: "Add admin menu:", command: "add_menu_page('Title', 'Menu Title', 'manage_options', 'menu-slug', 'function');" },
      { label: "Add submenu:", command: "add_submenu_page('parent-slug', 'Title', 'Menu Title', 'manage_options', 'page-slug', 'function');" },
      { label: "Add settings page:", command: "add_options_page('Title', 'Menu Title', 'manage_options', 'page-slug', 'function');" },
      { label: "Register setting:", command: "register_setting('option_group', 'option_name');" },
      { label: "Add settings field:", command: "add_settings_field('field_id', 'Label', 'callback', 'page', 'section');" },
      { label: "Add settings section:", command: "add_settings_section('section_id', 'Section Title', 'callback', 'page');" },
    ],
  },
  {
    title: "Shortcodes",
    commands: [
      { label: "Register shortcode:", command: "add_shortcode('shortcode_name', 'function_name');" },
      { label: "Remove shortcode:", command: "remove_shortcode('shortcode_name');" },
      { label: "Do shortcode:", command: "do_shortcode('[shortcode_name]');" },
      { label: "Shortcode attributes:", command: "shortcode_atts(array('attr' => 'value'), $atts);" },
      { label: "Extract shortcode atts:", command: "extract(shortcode_atts(array('param' => 'default'), $atts));" },
    ],
  },
  {
    title: "WordPress CLI",
    commands: [
      { label: "WordPress version:", command: "wp core version" },
      { label: "Update WordPress:", command: "wp core update" },
      { label: "List posts:", command: "wp post list" },
      { label: "Create post:", command: "wp post create --post_title='Title' --post_content='Content'" },
      { label: "List users:", command: "wp user list" },
      { label: "Create user:", command: "wp user create username email@example.com --role=editor" },
      { label: "Database export:", command: "wp db export backup.sql" },
      { label: "Database import:", command: "wp db import backup.sql" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "WordPress Cheat Sheet | Code2Cloud",
  description: "A comprehensive WordPress cheat sheet covering themes, plugins, posts, users, hooks, and admin features.",
};

export default function WordPressCheatSheetPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionGrid}>
              {section.commands.map((item) => (
                <article key={`${section.title}-${item.command}`} className={styles.card}>
                  <h3>{item.label}</h3>
                  <code>{item.command}</code>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
