// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    config: {
      apiKey: "AIzaSyAAE3FDp39e9GTF2K7tV_9jXUmVL2znfOg",
      authDomain: "voteapp-89726.firebaseapp.com",
      projectId: "voteapp-89726",
      storageBucket: "voteapp-89726.appspot.com",
      messagingSenderId: "425951522430",
      appId: "1:425951522430:web:08372277c732b2f01b322f"
    },
    actionCodeSettings: {
      //url: 'https://electoralapp.netlify.app/#/dashboard/profile/new',
      url: 'http://localhost:4200/#/dashboard/profile/new',
      handleCodeInApp: true
    }
   }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
