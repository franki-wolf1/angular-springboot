## Angular testing con JEST
Remover cualquier referencia de Jasmine / Karma en el package.json

## npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

npm remove <karma karma-chrome-launcher...>
Instalar Jest

npm install --save-dev jest jest-preset-angular @types/jest
## npm install --save-dev jest jest-preset-angular @types/jest

# setup-jest.ts
Crear el setup-jest.ts en la carpeta root del proyecto y el contenido es el siguiente

import 'jest-preset-angular/setup-jest';

Agregar en el package.json, la configuración de Jest
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
Configurar JEST en tsconfig.json y tsconfig.spec.json
"types": [
  "jest"
]

## Configurar los comandos para ejecutar las pruebas en el package.json
"test": "jest",
"test:watch": "jest --watchAll",

Remover karma.config.js y el archivo test.ts

### npm run test:watch