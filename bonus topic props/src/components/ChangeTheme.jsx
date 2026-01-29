import React from 'react'

const ChangeTheme = (props) => {
    const ChangeThemeFunction = () => {
        props.setTheme("Dark")
    }

    return (
        <div>
            <h1>Theme - {props.theme}</h1>
            <button onClick={ChangeThemeFunction}>ChangeTheme</button>
        </div>
    )
}

export default ChangeTheme