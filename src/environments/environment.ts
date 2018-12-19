// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL : 'https://demo.booktofly.co/',
  // Initialize Firebase
  firebase_config : {
    apiKey: "AIzaSyCzwSFf-Wa628C4MFU5T55hhawpcUmRMI0",
    authDomain: "booktofly.firebaseapp.com",
    databaseURL: "https://booktofly.firebaseio.com",
    projectId: "booktofly",
    storageBucket: "booktofly.appspot.com",
    messagingSenderId: "820531036177"
  },
  payload : { "agencyId": "Pw7uAcZ2xfeuXCrig", 
              "agencyKey":"nU5l03ape5pxy1K4UiYmfR36ENNmYwBl/PG4yyZg/DEwaSrnCOHDTJUdZO+dI3rrJo8KKXnJ94GGa9g10BUGtA==", 
              "clientId": "apps.booktofly.net" 
            }  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
