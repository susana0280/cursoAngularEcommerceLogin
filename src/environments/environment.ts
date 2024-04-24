export interface Environment {
    production: boolean;
    firebaseConfig: {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
      measurementId: string;
    }
}


export const environment = {

    production:false,

    firebaseConfig :{
        apiKey: "AIzaSyAtmcJs1mxC4KzaURN2v6e9CbLo4fqa3-A",
        authDomain: "cursoangularecommerce.firebaseapp.com",
        projectId: "cursoangularecommerce",
        storageBucket: "cursoangularecommerce.appspot.com",
        messagingSenderId: "242162427552",
        appId: "1:242162427552:web:21533d9f1b97c8d13b8bc5",
        measurementId: "G-RJDVEB1CRD"
    }

};
