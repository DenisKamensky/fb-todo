// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyALTaQ2b0im8w18CJN80YyHVlifcU4FPBg',
    authDomain: 'todo-fa079.firebaseapp.com',
    databaseURL: 'https://todo-fa079.firebaseio.com',
    projectId: 'todo-fa079',
    storageBucket: 'todo-fa079.appspot.com',
    messagingSenderId: '652399733852'
  }
};
