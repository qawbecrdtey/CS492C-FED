import React from 'react'

function signIn() {

}

function showLoginPage(state) {
    return (
        <div className="LoginMainCover">
            <h1>This is the login page.</h1>
            <label for="idInput">Type in your ID.</label>
            <input type="text" name="idInput" required minLength="4" maxLength="8" size="10"/>
            <button onClick={signIn}>sign in</button>
        </div>
    )
}

export default showLoginPage;