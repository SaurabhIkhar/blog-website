export const LoginStart = (userCredentials) =>({
    type:"Login_Start",
});

export const LoginSuccess =(user)=>({
    type:"Login_Success",
    payload:user,
});

export const LoginFailure =() =>({
    type:"Login_Failure",
});

export const Logout =() =>({
    type:"LOGOUT",
});


export const UpdateStart = (userCredentials) =>({
    type:"Update_Start",
});

export const UpdateSuccess =(user)=>({
    type:"Update_Success",
    payload:user,
});

export const UpdateFailure =() =>({
    type:"Update_Failure",
});