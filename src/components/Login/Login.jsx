

import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import app from '../../Firebase/Firebase.int';




const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handelGoogleSign = ()=>{
        console.log('google mama is coming');
    }

    
    return (
        <div>
           <button onClick={handelGoogleSign}>Google</button>
        </div>
    );
};

export default Login;