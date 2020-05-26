import React from 'react'

const AuthContext = React.createContext({
    showLogin: false,
    showLoginHandler: () => {},
    hideLoginHandler: () => {}
})


export default AuthContext
