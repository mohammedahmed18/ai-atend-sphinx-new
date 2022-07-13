-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2022 at 02:54 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ai-attend-sphinx2`
--

-- --------------------------------------------------------

--
-- Table structure for table `alerts`
--

CREATE TABLE `alerts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `message_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` enum('info','success','warning','error') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `alerts`
--

INSERT INTO `alerts` (`id`, `message_en`, `message_ar`, `user_id`, `created_at`, `updated_at`, `type`, `note`) VALUES
(3, 'give me your moneeey', 'اعطني مااالك', 1, '2022-07-11 14:47:06', '2022-07-11 14:47:06', 'error', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `alerts_to_companies`
--

CREATE TABLE `alerts_to_companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `alert_id` bigint(20) UNSIGNED NOT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `is_activate` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `alerts_to_companies`
--

INSERT INTO `alerts_to_companies` (`id`, `alert_id`, `company_id`, `start_date`, `end_date`, `is_activate`, `created_at`, `updated_at`, `user_id`) VALUES
(5, 3, 34, '2022-07-11', '2022-07-23', 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Tel_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Tel_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Tel_3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `main_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` decimal(8,2) DEFAULT NULL,
  `lat` decimal(8,2) DEFAULT NULL,
  `commercial_record` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '/images/logo.png',
  `tax_card` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `current_plan_id` bigint(20) UNSIGNED DEFAULT NULL,
  `timezone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `epm_username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `registration_num` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `domain_url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `commercial_record_file` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tax_card_file` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name_en`, `name_ar`, `Tel_1`, `Tel_2`, `Tel_3`, `email`, `website`, `main_address`, `long`, `lat`, `commercial_record`, `logo_url`, `tax_card`, `note`, `isActive`, `created_at`, `updated_at`, `current_plan_id`, `timezone`, `epm_username`, `user_id`, `registration_num`, `domain_url`, `commercial_record_file`, `tax_card_file`) VALUES
(34, 'we', 'mohammed ahsafasfsamed', NULL, NULL, NULL, 'mohammed18200118@gmail.com', NULL, 'address', '31.24', '30.04', NULL, '/images/logo.png', NULL, NULL, 1, '2022-07-01 22:13:15', '2022-07-11 15:17:32', 1, NULL, NULL, 1, '1656720795564', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `companies_registration_requests`
--

CREATE TABLE `companies_registration_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('1','2','3') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `notes` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `title`, `paragraph`, `created_at`, `updated_at`, `title_ar`, `paragraph_ar`) VALUES
(2, 'what do we provide', 'sssssss', '2022-05-16 22:30:40', '2022-05-16 22:33:11', 'safsa', 'safsa'),
(3, 'what do we provide', 'answer 1', '2022-05-19 22:23:49', '2022-05-19 22:23:49', 'يسشي', 'ؤشؤ');

-- --------------------------------------------------------

--
-- Table structure for table `feature_land`
--

CREATE TABLE `feature_land` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_ar` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `header`
--

CREATE TABLE `header` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'banner2.png',
  `learn_more` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#',
  `download` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `header`
--

INSERT INTO `header` (`id`, `title`, `img`, `content`, `paragraph`, `created_at`, `updated_at`, `title_ar`, `content_ar`, `paragraph_ar`, `image_2`, `learn_more`, `download`) VALUES
(1, 'title', 'banner.png', 'content', 'paragraph', NULL, '2022-05-19 22:15:13', 'عنوان', 'مقال', 'براجراف', 'banner.png', '#', '#');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2014_10_12_000000_create_users_table', 1),
(6, '2014_10_12_100000_create_password_resets_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(9, '2022_05_06_120308_laratrust_setup_tables', 1),
(10, '2022_05_06_124118_add_name_ar_users_table', 2),
(11, '2022_05_06_125216_create_companies_registration_requests_table', 3),
(12, '2022_05_06_130411_create_companies_table', 3),
(13, '2022_05_06_134413_add_foreign_key_to_companies_registration', 4),
(15, '2022_05_06_134802_create_payment_methods_table', 5),
(17, '2022_05_06_140030_create_plans_table', 6),
(18, '2022_05_06_150401_add_current_plan_id_and_time_zone', 7),
(19, '2022_05_06_173118_add_create_user_update_user', 8),
(20, '2022_05_06_173337_create_payment_details_table', 9),
(21, '2022_05_06_174618_create_alerts_table', 10),
(22, '2022_05_06_180254_make__alerts__to__companies', 11),
(23, '2022_05_06_200238_add_type_to_alerts', 12),
(24, '2022_05_08_024339_add_note_to_table_roles', 13),
(25, '2022_05_08_123636_create_terms_table', 14),
(26, '2022_05_08_130412_add_ar_columns', 15),
(27, '2022_05_08_123805_add_isactive_to_alert_table', 16),
(28, '2022_05_08_150525_add_user_id_to_companies', 17),
(29, '2022_05_08_161730_add_regestration_num', 18),
(30, '2022_05_08_220610_add_is_active_to_users', 19),
(31, '2022_05_08_065229_add_pause_plan_to_table', 20),
(32, '2022_05_10_132653_create_alerts_companies', 21),
(33, '2022_05_10_143826_addtimestamp_to_alerts_to_companies', 21),
(34, '2022_05_10_154019_add_user_id_to_alerts_to_companies', 21),
(35, '2022_05_15_114031_create_table__header', 22),
(36, '2022_05_15_114340_create_table_features', 22),
(37, '2022_05_15_114638_create_tabel__f_a_q', 22),
(38, '2022_05_15_121228_add_column_to_header', 22),
(39, '2022_05_15_121434_add_column_to__faq', 22),
(40, '2022_05_15_121612_add_column_to_table_features', 22),
(41, '2022_05_17_234802_add_image2_to_header', 23),
(42, '2022_05_18_120702_create_table_sentence', 23),
(43, '2022_05_19_151139_create_reviews_table', 24),
(44, '2022_05_19_154016_add_title_ar_to_reviews', 24),
(45, '2022_05_19_204121_create_profile_land_table', 24),
(46, '2022_05_19_205325_create_feature_land_table', 24),
(47, '2022_05_19_211819_add_title_ar_to_profile_land', 24),
(48, '2022_05_19_223049_add_title_ar_to_feature_land', 24);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_details`
--

CREATE TABLE `payment_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` bigint(20) UNSIGNED DEFAULT NULL,
  `plan_id` bigint(20) UNSIGNED DEFAULT NULL,
  `paymethod_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pay_date` date DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_details`
--

INSERT INTO `payment_details` (`id`, `company_id`, `plan_id`, `paymethod_id`, `pay_date`, `start_date`, `end_date`, `user_id`, `created_at`, `updated_at`) VALUES
(3, 34, 1, 1, '2022-07-11', '2022-07-11', '2022-08-11', 1, '2022-07-11 15:17:32', '2022-07-11 15:17:32');

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `update_user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `name`, `details`, `note`, `isActive`, `created_at`, `updated_at`, `update_user_id`) VALUES
(1, 'methods 1', 'detailssssssss update', 'notessssssssss update', 1, '2022-05-20 19:36:51', '2022-06-25 05:28:45', 1),
(2, 'methods 2', 'Payment Methods Details', 'test note Payment Methods', 1, '2022-06-25 05:18:02', '2022-06-25 05:29:55', 1),
(3, 'methods 3', 'Payment Methods Details', 'test note Payment Methods', 1, '2022-06-25 05:18:02', '2022-06-25 05:29:55', 1),
(4, 'methods 4', 'Payment Methods Details', 'test note Payment Methods', 1, '2022-06-25 05:18:02', '2022-06-25 05:29:55', 1),
(5, 'methods 5', 'Payment Methods Details', 'test note Payment Methods', 1, '2022-06-25 05:18:02', '2022-06-25 05:29:55', 1);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `collection_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`, `collection_id`) VALUES
(59, 'payment_details_add', 'add payment details', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 2),
(60, 'payment_details_view', 'view payment details', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 2),
(61, 'payment_details_edit', 'edit payment details', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 2),
(62, 'plans_add', 'add a new plan', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 3),
(63, 'plans_edit', 'edit a plan', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 3),
(64, 'plans_view', 'view plans', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 3),
(66, 'users_add', 'add users', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 1),
(67, 'users_edit', 'edit users', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 1),
(68, 'users_view', 'view users', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 1),
(70, 'payment_method_add', 'add payment method', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 4),
(71, 'payment_method_view', 'view payment methods', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 4),
(72, 'payment_method_edit', 'edit payment method', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 4),
(74, 'alerts_add', 'add a new alert', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 5),
(75, 'alerts_view', 'view alerts', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 5),
(76, 'alerts_edit', 'edit alerts', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 5),
(78, 'alerts_delete', 'delete alerts', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 5),
(83, 'roles_permissions_add', 'add a new role', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 6),
(84, 'roles_permissions_view', 'view roles', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 6),
(85, 'roles_permissions_update', 'update roles', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 6),
(86, 'manage_landpage', 'manage landpage data', NULL, '2022-05-20 11:47:47', '2022-05-20 11:47:47', 7),
(87, 'company_view', 'view companies', NULL, '2022-06-29 07:07:08', '2022-06-29 07:07:08', 8),
(88, 'company_add', 'add companies', NULL, '2022-06-29 07:07:08', '2022-06-29 07:07:08', 8),
(89, 'company_edit', 'edit companies', NULL, '2022-06-29 07:07:08', '2022-06-29 07:07:08', 8),
(91, 'users_delete', 'delete users', NULL, '2022-06-29 09:34:35', '2022-06-29 09:34:35', 1);

-- --------------------------------------------------------

--
-- Table structure for table `permission_collections`
--

CREATE TABLE `permission_collections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission_collections`
--

INSERT INTO `permission_collections` (`id`, `label`, `created_at`, `updated_at`) VALUES
(1, 'users', NULL, NULL),
(2, 'payment details', NULL, NULL),
(3, 'plans', NULL, NULL),
(4, 'payment methods', NULL, NULL),
(5, 'alerts', NULL, NULL),
(6, 'roles', NULL, NULL),
(7, 'landpage', NULL, NULL),
(8, 'company', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `id` int(10) UNSIGNED NOT NULL,
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission_role`
--

INSERT INTO `permission_role` (`id`, `permission_id`, `role_id`) VALUES
(1, 59, 1),
(2, 60, 1),
(3, 61, 1),
(4, 62, 1),
(5, 63, 1),
(8, 66, 1),
(9, 67, 1),
(12, 70, 1),
(13, 71, 1),
(14, 72, 1),
(16, 74, 1),
(17, 75, 1),
(18, 76, 1),
(20, 78, 1),
(21, 79, 1),
(22, 80, 1),
(23, 81, 1),
(24, 82, 1),
(25, 83, 1),
(26, 84, 1),
(27, 85, 1),
(28, 86, 1),
(31, 87, 1),
(32, 88, 1),
(33, 89, 1),
(34, 90, 1),
(35, 64, 1),
(36, 91, 1),
(38, 68, 1),
(39, 92, 1);

-- --------------------------------------------------------

--
-- Table structure for table `permission_user`
--

CREATE TABLE `permission_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission_user`
--

INSERT INTO `permission_user` (`id`, `permission_id`, `user_id`, `user_type`) VALUES
(1, 59, 8, 'App\\User'),
(2, 60, 8, 'App\\User');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'authToken', '9e14950d62563db4e3f82d6ecf0562ac5a251945dc8db0eff15ce4b9f1d4ffee', '[\"*\"]', NULL, '2022-05-07 13:50:09', '2022-05-07 13:50:09'),
(2, 'App\\Models\\User', 1, 'authToken', '0457be6067c89f24242b5760bfb38b7ca78d38491987200ec6cf89b2a3a791d7', '[\"*\"]', NULL, '2022-05-07 14:12:11', '2022-05-07 14:12:11'),
(3, 'App\\Models\\User', 1, 'authToken', '4abec96abcc42cbad6e03b4b71358c3aec290ce4f91bb315f5014d9f458aa4c1', '[\"*\"]', NULL, '2022-05-07 14:19:19', '2022-05-07 14:19:19'),
(4, 'App\\Models\\User', 1, 'authToken', 'e99020e73063916fb929bc1450ba52edb3ef57e9fdfd579cbfc663480cf72708', '[\"*\"]', NULL, '2022-05-07 15:58:57', '2022-05-07 15:58:57'),
(5, 'App\\Models\\User', 1, 'authToken', 'da052fdf0de825d705768ac2af647607ab2270f798d82fe976a625dad43f3482', '[\"*\"]', NULL, '2022-05-07 17:33:32', '2022-05-07 17:33:32'),
(6, 'App\\Models\\User', 1, 'authToken', 'd5c29ee9299bcbc9199794e46acc21874d06a12565021bebff607c919dba3bd4', '[\"*\"]', NULL, '2022-05-07 17:51:34', '2022-05-07 17:51:34'),
(7, 'App\\Models\\User', 1, 'authToken', 'cfae5f0aba37634914c04aa2ab0bf3ae347bb67f5edb3a998aa20fa8849ad6c3', '[\"*\"]', NULL, '2022-05-07 21:48:15', '2022-05-07 21:48:15'),
(8, 'App\\Models\\User', 1, 'authToken', '213f7c1006d61131b50e59685b0d7efe67384696d3c849d3ecdeefc9758e2d98', '[\"*\"]', NULL, '2022-05-07 22:24:08', '2022-05-07 22:24:08'),
(9, 'App\\Models\\User', 1, 'authToken', 'dc8af117560a1773a46bf5a346fe9fb3e3863b5459cc823fefe7b259ebe88fb8', '[\"*\"]', NULL, '2022-05-07 22:59:10', '2022-05-07 22:59:10'),
(10, 'App\\Models\\User', 1, 'authToken', '1dbda94d411f66134874aee79cd3b33c4ce7c94d18bf10bab634ffd10b9a7c89', '[\"*\"]', NULL, '2022-05-08 09:01:52', '2022-05-08 09:01:52'),
(11, 'App\\Models\\User', 1, 'authToken', '853bcbdcfae033264b591258fcda438cd8442a36a1c20d235379b10451509ce4', '[\"*\"]', NULL, '2022-05-08 10:54:54', '2022-05-08 10:54:54'),
(12, 'App\\Models\\User', 1, 'authToken', '04887149da353e0123da662777c41fd03a5469c4feca7b041b607716f2585339', '[\"*\"]', NULL, '2022-05-08 11:02:14', '2022-05-08 11:02:14'),
(13, 'App\\Models\\User', 1, 'authToken', '9a608089be6da82c57157ad89af386d37c25fb75978244edf9398bb5bcc0c994', '[\"*\"]', NULL, '2022-05-08 12:50:04', '2022-05-08 12:50:04'),
(14, 'App\\Models\\User', 1, 'authToken', 'a0a33a06f31cc74f65ed0c3bcc7f881e8a971b56679cea0681cd672a017857b5', '[\"*\"]', NULL, '2022-05-08 18:07:04', '2022-05-08 18:07:04'),
(15, 'App\\Models\\User', 1, 'authToken', '722af496c524151c6966ccfbd8d4b8baefd3ad3b54af16ab207b94159efaf6e2', '[\"*\"]', NULL, '2022-05-08 19:19:33', '2022-05-08 19:19:33'),
(16, 'App\\Models\\User', 1, 'authToken', '3546b60693e837d94e0212c236cc2eaaf1d540ad00f93e9d893fb7ddbdd9a508', '[\"*\"]', NULL, '2022-05-08 19:36:23', '2022-05-08 19:36:23'),
(17, 'App\\Models\\User', 1, 'authToken', '9ad1173944447fe53c39ed9fdba84a4e2019d375eed1a01839b27aeb0c0f2552', '[\"*\"]', NULL, '2022-05-08 20:38:02', '2022-05-08 20:38:02'),
(18, 'App\\Models\\User', 1, 'authToken', '2b65fdc4a8f210a3166db7a013c9a9d48ac6c515e631dd36fa9791bab2d63658', '[\"*\"]', NULL, '2022-05-08 20:54:52', '2022-05-08 20:54:52'),
(19, 'App\\Models\\User', 1, 'authToken', 'dd52c80c93a78fcb16913bcadb24dfb828acd1768c4a4e068e8f35ff0e10a445', '[\"*\"]', NULL, '2022-05-08 21:28:53', '2022-05-08 21:28:53'),
(20, 'App\\Models\\User', 1, 'authToken', '25b4663b27986521f65c805e45924734d03cd7bf3e318115038844c1f8002277', '[\"*\"]', NULL, '2022-05-09 00:52:01', '2022-05-09 00:52:01'),
(21, 'App\\Models\\User', 1, 'authToken', '54fd4a6a3c09915cd8839ecc9b0441acd38b8a507a0a64c2716ffebc775fde3c', '[\"*\"]', NULL, '2022-05-09 21:06:42', '2022-05-09 21:06:42'),
(22, 'App\\Models\\User', 1, 'authToken', '5a03e4a7b9abb44db78c4aaee1373a473c107eee9571ece988f0a705afaa5371', '[\"*\"]', NULL, '2022-05-10 07:21:54', '2022-05-10 07:21:54'),
(23, 'App\\Models\\User', 1, 'authToken', '9e34e2cb1180c5001c2116b38ad08324e3ee87d367b0c670e5c992cf62346cc7', '[\"*\"]', NULL, '2022-05-10 07:31:44', '2022-05-10 07:31:44'),
(24, 'App\\Models\\User', 1, 'authToken', 'f19467cf420126afbaa5410f969d06f67a75335e7112da0d405e56b2c7b01f45', '[\"*\"]', NULL, '2022-05-10 09:48:51', '2022-05-10 09:48:51'),
(25, 'App\\Models\\User', 1, 'authToken', '61a477326af11bece5091c0bd75972562d1623cfede54ed4c36b3f526f99362b', '[\"*\"]', NULL, '2022-05-11 10:29:54', '2022-05-11 10:29:54'),
(26, 'App\\Models\\User', 1, 'authToken', 'a972909f5c9b45bf60b6ed242a19b245617408808453e8ba4abce5179edc560b', '[\"*\"]', NULL, '2022-05-11 10:44:15', '2022-05-11 10:44:15'),
(27, 'App\\Models\\User', 1, 'authToken', '21a04e09f1d3b03e980c7322d319171d6a2fe1f4d8ed5a7e4ca2b713749a3431', '[\"*\"]', NULL, '2022-05-15 10:20:18', '2022-05-15 10:20:18'),
(28, 'App\\Models\\User', 1, 'authToken', '7702e443217b22ed26444bb4f3a5735e77febe7069c27472bf626f05f66d7a90', '[\"*\"]', NULL, '2022-05-15 13:39:55', '2022-05-15 13:39:55'),
(29, 'App\\Models\\User', 1, 'authToken', '0029e4a99f4a14440050ceccc24324eb58b390aa48aa15f2d5512878153eecce', '[\"*\"]', NULL, '2022-05-16 10:15:54', '2022-05-16 10:15:54'),
(30, 'App\\Models\\User', 1, 'authToken', 'b59b4d3bdf3d02515d90772b69c94e8891c62701fc29e75bc4f6c436fb6533c4', '[\"*\"]', NULL, '2022-05-16 18:14:19', '2022-05-16 18:14:19'),
(31, 'App\\Models\\User', 1, 'authToken', 'ad38d9d2a10e1fb13f591c3b9c29920f4e2039ce5a2552a4c80f68a40eec7804', '[\"*\"]', NULL, '2022-05-16 18:25:53', '2022-05-16 18:25:53'),
(32, 'App\\Models\\User', 1, 'authToken', '4ceea5641697a54454d7e269c2c28f381269e3808b28b2e6b12520511332c9e7', '[\"*\"]', NULL, '2022-05-16 22:28:06', '2022-05-16 22:28:06'),
(33, 'App\\Models\\User', 1, 'authToken', '625a1b3e1a27bb21466aecf8cf8d49349213a46fdbce0906db9d84402a12d137', '[\"*\"]', NULL, '2022-05-19 10:35:29', '2022-05-19 10:35:29'),
(34, 'App\\Models\\User', 1, 'authToken', '668084d9361c144fa41be84b3c474b91979f96c9e7e56daa22579166aff123ff', '[\"*\"]', NULL, '2022-05-19 19:35:45', '2022-05-19 19:35:45'),
(35, 'App\\Models\\User', 1, 'authToken', 'e82107d965aa7723465a73a9caa725f744a81188ba3eb126443f1ff10be8a0de', '[\"*\"]', NULL, '2022-05-19 22:03:08', '2022-05-19 22:03:08'),
(36, 'App\\Models\\User', 1, 'authToken', 'f3d01118d9118c38b7812ddf6876ddb59a48c4b8f44d0a5ab71ea6981fec4de9', '[\"*\"]', NULL, '2022-05-20 07:25:23', '2022-05-20 07:25:23'),
(37, 'App\\Models\\User', 1, 'authToken', 'e0041cc310ad2ee84ef2317226154fd4e0aeaaeddebf9644b82e049e3842cf18', '[\"*\"]', NULL, '2022-05-20 13:43:57', '2022-05-20 13:43:57'),
(38, 'App\\Models\\User', 1, 'authToken', 'a7be2f411cec7be39878510d1e3b55ef7611f5520ed9720d3a9fd0c067db40b1', '[\"*\"]', NULL, '2022-05-20 19:04:33', '2022-05-20 19:04:33');

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `max_emp` int(11) DEFAULT NULL,
  `coast` double(8,2) DEFAULT NULL,
  `duration_days` int(11) DEFAULT NULL,
  `create_user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `update_user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `activate` tinyint(1) DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `name_en`, `name_ar`, `max_emp`, `coast`, `duration_days`, `create_user_id`, `update_user_id`, `created_at`, `updated_at`, `activate`, `note`) VALUES
(1, 'plan 1', 'خطة 1', 400, 400.00, 30, 1, 1, '2022-06-24 13:30:02', '2022-06-29 11:09:11', 1, 'test note'),
(2, 'plan 2', 'خطة 2', 500, 500.00, 30, 1, 1, '2022-06-24 13:32:17', '2022-06-29 11:29:27', 0, 'test note'),
(3, 'plan 3', 'خطة 3', 600, 600.00, 30, 1, 1, '2022-06-24 13:40:55', '2022-06-29 11:11:08', 1, 'test notessss'),
(4, 'plan 4', 'خطة 4', 700, 700.00, 30, 1, 1, '2022-06-24 13:43:41', '2022-06-24 13:43:41', 1, 'test note'),
(5, 'plan 5', 'خطة 5', 800, 800.00, 30, 1, 1, '2022-06-24 13:45:15', '2022-06-24 13:45:15', 1, 'test note');

-- --------------------------------------------------------

--
-- Table structure for table `profile_land`
--

CREATE TABLE `profile_land` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `span` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `download` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#',
  `learn_more` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `span_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profile_land`
--

INSERT INTO `profile_land` (`id`, `img`, `span`, `title`, `download`, `learn_more`, `created_at`, `updated_at`, `span_ar`, `title_ar`) VALUES
(1, '3yLNQ5V7UcVzjhnB2EMljKfTsQErzt.jpg', '</script>', 'Select a profile or create new one. You deciced!', '#', '#', NULL, '2022-05-19 20:05:45', 'PROFILE', 'Select a profile or create new one. You deciced');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rate` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `supporter` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `supporter_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`, `note`) VALUES
(1, 'super_admin', 'super admin', 'has all possible privileges', '2022-05-06 10:27:15', '2022-07-02 11:14:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`id`, `role_id`, `user_id`, `user_type`) VALUES
(1, 1, 1, 'App\\Models\\User'),
(2, 1, 2, 'App\\Models\\User'),
(10, 1, 1, 'App\\User');

-- --------------------------------------------------------

--
-- Table structure for table `sentence`
--

CREATE TABLE `sentence` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sentence_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sentence_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sentence`
--

INSERT INTO `sentence` (`id`, `sentence_en`, `sentence_ar`, `created_at`, `updated_at`) VALUES
(2, 'success', 'نجاح', '2022-05-19 10:43:45', '2022-05-19 10:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `table_features`
--

CREATE TABLE `table_features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraph_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `terms`
--

CREATE TABLE `terms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `body_ar` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `terms`
--

INSERT INTO `terms` (`id`, `title`, `body`, `isActive`, `created_at`, `updated_at`, `body_ar`, `title_ar`) VALUES
(1, 'new term', 'body', 1, '2022-05-08 11:11:32', '2022-05-10 07:29:37', 'جسم جسممم', 'تيرم'),
(2, 'fasfas', 'helloooooooo', 1, '2022-05-08 11:18:11', '2022-05-10 07:29:38', 'يسشيسش', 'تيرم'),
(3, 'title', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and \r\n\r\n1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 1, '2022-05-10 07:33:55', '2022-05-16 22:36:42', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and \r\n\r\n1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'title');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Tel_1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Tel_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Tel_3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name_en`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `name_ar`, `Tel_1`, `Tel_2`, `Tel_3`, `address`, `isActive`, `note`) VALUES
(1, 'super admin', 'super_admin@gmail.com', NULL, '$2y$10$B/nk9B2PB3WLG9BWOSgYHeQMarnuNnbSMMAdXP/OdbCXwoc9MkNpO', NULL, '2022-05-06 16:16:37', '2022-06-30 10:49:04', 'الادمن الخارق', '01112856766', NULL, NULL, NULL, 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alerts_user_id_foreign` (`user_id`);

--
-- Indexes for table `alerts_to_companies`
--
ALTER TABLE `alerts_to_companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alerts_to_companies_alert_id_foreign` (`alert_id`),
  ADD KEY `alerts_to_companies_company_id_foreign` (`company_id`),
  ADD KEY `alerts_to_companies_user_id_foreign` (`user_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `domain_url` (`domain_url`),
  ADD KEY `companies_current_plan_id_foreign` (`current_plan_id`),
  ADD KEY `companies_user_id_foreign` (`user_id`);

--
-- Indexes for table `companies_registration_requests`
--
ALTER TABLE `companies_registration_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companies_registration_requests_user_id_foreign` (`user_id`),
  ADD KEY `companies_registration_requests_company_id_foreign` (`company_id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `update_user_id` (`user_id`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permissions_collection_id_foreign` (`collection_id`);

--
-- Indexes for table `permission_collections`
--
ALTER TABLE `permission_collections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alerts`
--
ALTER TABLE `alerts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `alerts_to_companies`
--
ALTER TABLE `alerts_to_companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `companies_registration_requests`
--
ALTER TABLE `companies_registration_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `permission_collections`
--
ALTER TABLE `permission_collections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `permission_role`
--
ALTER TABLE `permission_role`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `permission_user`
--
ALTER TABLE `permission_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `role_user`
--
ALTER TABLE `role_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_collection_id_foreign` FOREIGN KEY (`collection_id`) REFERENCES `permission_collections` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
