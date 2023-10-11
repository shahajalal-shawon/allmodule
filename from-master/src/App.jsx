import './App.css'
import ReuseableForm from './Hooks/ReuseableForm/ReuseableForm'
// import HooksForm from './Components/HooksForm/HooksForm'
// import RefFrom from './Components/RefFrom/RefFrom'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data =>{
    console.log(data);
  }

  const handleUpdateProfile = data =>{
   console.log(data);
  }

  return (
    <>
      <h1>FROM MASTER</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HooksForm></HooksForm> */}
      <ReuseableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now </p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update' >
        <div>
          <h2>Update</h2>
          <p>Keep your profile Updated </p>
        </div>
      </ReuseableForm>
    </>
  )
}

export default App
