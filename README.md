
# Storybook Bootstrap 5

This project is a **Storybook** setup for developing UI components with **Bootstrap 5** and **Twig** templates. It supports component-driven development using **Storybook**, **Gulp**, and **Bootstrap 5** for styling.

## Installation

To install the project dependencies, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:Greg735/sb-bootstrap5-base.git
   cd sb-bootstrap5-base
   ```

2. Install the necessary Node.js packages:

   ```bash
   npm install
   ```

## Development

To start the development environment with **Storybook** and **Gulp**, follow these steps:

1. **Run the development environment**:

   You can run both **Gulp** (for processing CSS/JS tasks) and **Storybook** (for previewing components) concurrently by running the following command:

   ```bash
   npm run develop
   ```

   This will:

   - Start **Storybook** on `http://localhost:6006`.
   - Watch for changes in your **Twig**, **Sass**, and **JavaScript** files.
   - Automatically reload Storybook when changes are made.

2. **Running only Storybook**:

   If you prefer to run Storybook alone without Gulp tasks, use:

   ```bash
   npm run storybook
   ```

3. **Gulp tasks**:

   Gulp is used to automate CSS/JavaScript processing tasks. You can run Gulp tasks separately using:

   ```bash
   npm run gulp
   ```

   The Gulp tasks will handle:

   - **Sass** compilation and minification.
   - **JavaScript** minification.
   - Automatic prefixing for cross-browser compatibility.

4. **File watching**:

   The development environment watches for changes in the following directories:

   - `stories/*/**/*.scss` for **Sass** styles.
   - `stories/*/**/*.behavior.js` for **JavaScript** files.
   - `stories/*/**/*.twig` for **Twig** templates.

   When a change is detected, Storybook will automatically reload, and Gulp will recompile the assets if necessary.

5. **Asset management**:

   By using Gulp for asset management, all compiled files (CSS, JS) will be optimized and minified for performance. These files can then be integrated into your application or CMS.

## Building for Production

To build Storybook for production, run the following command:

```bash
npm run build-storybook
```

This will generate a static version of your Storybook, which you can deploy to any static hosting service or integrate into your project.

## File Structure

The basic file structure for this project is as follows:

```
├── .storybook/           # Storybook configuration
├── dist/                 # Compiled output files (ignored in version control)
├── node_modules/         # Node.js dependencies
├── stories/              # Source files
│   ├── foundations/      # 
│   ├── utilities/        # 
│   └── componants/       # Twig componants
└── package.json          # Project configuration and dependencies
```

## Dependencies

This project relies on the following core dependencies:

- **Storybook**: A tool for developing UI components in isolation.
- **Bootstrap 5**: The CSS framework used for styling components.
- **Twig**: A templating engine used to create dynamic component templates.
- **Gulp**: A task runner used for automating asset compilation and minification.
- **Sass**: A CSS preprocessor used for styling.
- **Leaflet**: A library used for interactive maps.
- ...

### Dev Dependencies

The dev dependencies are managed in the `package.json` file. You can install them using the `npm install` command.

## License

This project is licensed under the **ISC License**.
