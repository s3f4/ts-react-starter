import React from 'react'
import ReactDOM from "react-dom"

export default function App(): JSX.Element {
    return (<h1>Hello </h1>)
}

const root: HTMLElement = document.getElementById("root");
ReactDOM.render(<App />, root);