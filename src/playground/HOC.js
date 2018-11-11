//Higher Order Components
import React from 'react';
import ReactDOM from 'react-dom'


const  Info = (props) =>  {
  return (
    <div>
      <h1>Info</h1>
      <p>the contents are: {props.info}</p>
    </div>
  )
}

const adminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>THis is private one</p>
        <WrappedComponent {...props}/>
        </div>
        
        )
}

const requireAuthentication = (WrappedComponent) =>  {
    return (props) => (
        <div>
            { props.isAuthenticated && <p>THis is private one</p>}
        <WrappedComponent {...props}/>
        </div>
        )
}

const Admin = adminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info='Hello World' />, document.getElementById('app'))
