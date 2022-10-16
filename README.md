# PHP basic CMS Template

Template extracted from bootstrap themes.
This version has been refactored to better separate blocks of content. It also includes basic eslint, stylelint, browserlist and postcss config files.

## Dependencies used

The dependencies used in this project are:

- Parcel: Build tool used to compilate all files in the build stage. Also provides a built in development server.

- Autoprefixer: PostCSS plugin that parses the CSS and adds vendor prefixers automatically. It is configured in the .browserslistrc file. The plugin targets the last 4 versions of the browsers with a market search superior to 0,2%. It excludes those browsers without official support in the last 24 months. It includes IE 11.

- Imagemin: minifies images seamlessly. Useful in this website as there are a lot of images.

- Eslint: Analyses our code for errors. In this case, it is arranged with the standard configuration. Check further configurations in the .eslintrc.json file.

- Rimraf: cleans the installed node package.
