<p align="center">
  <img src="../docs/images/styles_directory.svg" alt="styles-directory" width="48px" height="48px"/>
  <br>
</p>

# Styles Directory

The Styles directory contains all of Angular's global stylesheet files. It is recommended to implement a structure that fits the project's needs, keeping the styles as global as possible to avoid boilerplate (e.g., the scss 7-1 pattern).

```bash
.
┣ base
|  ┣ _global.scss   
|  ┗  _index.scss  
...
┣ components
|  ┣ _buttons.scss  
|  ┣ _carousel.scss  
|  ┣ _slider.scss  
|
┣ themes
|  ┣ _palettes.scss     
|  ┣ _themes.scss   
|  ┗ _index.scss  
|
┣ utilities
|  ┣ _variables.scss  
|  ┣ _functions.scss  
|  ┣ _mixins.scss
|  ┗ _index.scss # Forwards all utility modules
|
┣ vendors
|  ┣ _bootstrap-grid.scss
|  ┗ _index.scss 
|
┗ styles.scss # Uses all modules
```
