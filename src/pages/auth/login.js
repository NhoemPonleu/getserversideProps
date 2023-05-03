import React from 'react'

export default function Login() {
  return (
    <div className="container">
        <h1>Login</h1>
      <form>
        <label>UserName</label>
        <input type='text'/>
      </form>
    </div>
  );
}
login.getLayout=function getLayout(page){
    return (
        <>
        <main>
          {page}
        </main>
      </>
    );

    
};
