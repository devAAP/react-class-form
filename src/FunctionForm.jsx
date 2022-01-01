import React from 'react';



function App () {
    const [name, SetName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e)=> {
    setEmail(e.target.value)
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };
  return (
    <div className='App'>
    <form onSubmit = {handleSubmit}>
      <input type= 'email' value={email} onChange={handleEmailChange}/>
      <input type = 'password' value={password}onChange={handlePasswordlChange}/>
      <button type = 'submit'>Submit</button>
    </form>
          </div>
  );
  };

export default FunctionForm;