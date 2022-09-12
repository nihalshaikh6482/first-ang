import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const b2cPolicies = {
     names: {
         signUpSignIn: "B2C_1_SignUpSignIn",
         editProfile: "B2C_1_ProfileEditing"
     },
     authorities: {
         signUpSignIn: {
             authority: "https://zingsadb2c.b2clogin.com/zingsadb2c.onmicrosoft.com/B2C_1_SignUpSignIn",
         },
         editProfile: {
             authority: "https://zingsadb2c.b2clogin.com/zingsadb2c.onmicrosoft.com/B2C_1_ProfileEditing"
         }
     },
     authorityDomain: "zingsadb2c.b2clogin.com"
 };
 
 
export const msalConfig: Configuration = {
     auth: {
         clientId: 'fcb3fb6a-3541-47fc-b976-a3e8e0d8397a',
         authority: b2cPolicies.authorities.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/', 
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE, 
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = {
  todoListApi: {
    endpoint: "http://localhost:5000/api/todolist",
    scopes: ["https://zingsadb2c.onmicrosoft.com/api/tasks.read"],
  },
}
export const loginRequest = {
  scopes: []
};