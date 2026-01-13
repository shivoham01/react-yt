import { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const onSubmitButton = (e)=>{
    e.preventDefault();
  }

  const onChangeButton = (e)=>{
    setName(e.target.value)
  }

  return (
    <div className="div">
      <form onSubmit={(e)=>{onSubmitButton(e)}}>
        <input type="text" onChange={(e)=> onChangeButton(e)} placeholder='Enter your name' value={name} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App