import React from 'react'
import { loginStore } from '../store/loginStore'
import {useLocalStore} from 'mobx-react'

let LoginContext = React.createContext(null)

export let LoginProviders = ({children}) => {
let LoginStore = useLocalStore(loginStore)

return <LoginContext.Providers value={LoginStore}>
    {children}
</LoginContext.Providers>
}


export let useLoginStore = () => React.useContext(LoginProviders)