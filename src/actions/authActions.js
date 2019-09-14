import {LOGIN} from './types';
import loginCredentials from '../assets/loginCredentials.json';

export const login=(username,password,history)=>dispatch=>{

    if(!(username.trim().toString()===loginCredentials.username && password.trim().toString()===loginCredentials.password)){
        
        alert('Invalid Credentails!Please try again');
        return;
    }
    history.push('/table');


        return dispatch({

            type:LOGIN,
            payload:{
                username,
                password
            }

        });


}