# Change Log

All notable changes to the Laravel extension will be documented in this file.

## [0.1.14]

-   Fixed fallback for running PHP code (mentioned in 0.1.13 as a breaking change). The note in the last changelog was incorrect: the new PHP Command setting should just read `php`, meaning the file will just be added to the end of the command.

## [0.1.13]

-   Initial Windows support
-   Fixed nullable param for translations template for PHP 8.4
-   Fixed undefined GLOB_BRACE for translations template
-   Fix for Eloquent model info when `phpDocumentor` wasn't installed
-   Fix for handling newline characters in JSON response ([#31](https://github.com/laravel/vs-code-extension/pull/31))
-   Remove `.github` from bundle ([#29](https://github.com/laravel/vs-code-extension/pull/29))
-   Inspired by [#20](https://github.com/laravel/vs-code-extension/pull/20), Inertia paths are now read from the existing PHP config in the project
-   **Breaking**: The setting for PHP Command is now changed to run a file, not inline code. Previously this would have looked like this: `php -r "{code}"` but should now look like this `php "{code}"`

## [0.1.12]

-   Now fetching OS/arch specific binaries for Mac and Linux (Windows coming soon)
-   Fixed translation loading when there were _a lot_ of translations
-   Fixed an issue regarding full name resolution for scoped property access

## [0.1.11]

-   No significant changes

## [0.1.10]

-   Updated icon
-   Fixed translation file path display
-   Fixed detection of helper methods in parser (e.g. `config()`, `redirect()`, etc)
-   Made downloaded binary ~30% smaller

## [0.1.9]

-   Fixed parsing for `new` anonymous classes (i.e. migrations)
-   Fixed parsing for regular function declarations

## [0.1.8]

-   Bugfix for (really) large `detect` responses
-   Autocomplete for `view` related items orders by non-vendor views first
-   Fixed bug for searching for views in non-directories
-   Better support for earlier versions of Laravel (fixes for config and translation loading)
-   If extension cannot load, give specific reason
-   Support for linking in path helpers:
    -   `base_path`
    -   `resource_path`
    -   `config_path`
    -   `app_path`
    -   `database_path`
    -   `lang_path`
    -   `public_path`
    -   `storage_path`

## [0.1.7]

-   Facade aliases are now considered
-   Blade linking, hovering, and diagnostics are improved
-   Fixed an error where variables were not consistently resolved

## [0.1.6]

-   Fixed bug where we weren't restricting diagnostics to only PHP files
-   Added timeout to parsing processes

## [0.1.5]

-   Remove external dependency on file downloader extension
-   Removed keybindings and commands for test runner

## [0.1.4]

-   Aligned items you can autocomplete with linkable, hoverable, and diagnostic-able items
-   Created settings for opting in and out of auto completion

## [0.1.3]

-   Performance improvements
-   Remove tests integration (for now)
-   Added `to_route` completion
-   Added `redirect()` helper chaining for hovering, linking, and diagnostics
