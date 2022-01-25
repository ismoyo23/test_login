export function loginStore(){
    return {
        LoginState: [],
        pushDataLogin(text){
            this.LoginState.push({
                text
            })
        },

        logOutLogin(id){
            this.LoginState = this.LoginState.filter(LoginState => LoginState.id != id)
        } 
    }
}