import { useEffect, useState } from 'react';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import DataTable from './Pages/DataTable/DataTable';
import AddUser from './Pages/AddUser/AddUser';
import EditModal from './Components/EditModal/EditModal';
import AlertModal from './Components/AlertModal/AlertModal';
import DataProvider from './Store/data-provider';
import { Alert } from 'reactstrap';

function App() {

  const [isError,setIsError] = useState(false);
  const [isSucces,setIsSucces] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const [editModal,setEditModal] = useState(false);
  const [alertModalState,setAlertModalState] = useState(false);
  const [selectedUser,setSelectedUSer] = useState({
    id:null,
    firstName:'',
    lastName:'',
    email:'',
    age: null,
    position:''
  })


const addUserHandler = (newUser) => {
  //console.log(newUser)
};

const openModalHandler = (user) => {
  setEditModal(true);
  setSelectedUSer(user)
  console.log(user)
}

const closeModalHandler =  () => {
  setEditModal(false);
};

const openAlertModalHandler = () => {
  setAlertModalState(!alertModalState)
}


const showAlertHandler = (bool) => {
  if(bool){
  setIsError(true);
  setTimeout(() => {
    setIsError(false);
  },2000)    
  } else if(!bool){
    setIsSucces(true);
    setTimeout(() => {
      setIsSucces(false);
    },2000) 
  }

}

const isLoadingDataHandler = (bool) => {
  setIsLoading(bool)
}

let alerttt ;

if(isError){
  console.log(isError)
  alerttt = <Alert color='danger'>
  <p>An unexpected error has ocurred</p>
</Alert>
} else if(isSucces) {
  alerttt = <Alert color='success'>
  <p>The user was saved successfully</p>
</Alert>
}



  return (
    <div className="App">
    <DataProvider openModal={openAlertModalHandler} toggleAlert={showAlertHandler} dataLoading={isLoadingDataHandler} closeModal={closeModalHandler}> 
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
          <DataTable openModal={openModalHandler} loading={isLoading} />
          </Route>
          <Route path="/allUsers" exact>
            <DataTable openModal={openModalHandler} loading={isLoading}  />
          </Route>
          <Route path="/addUser">
            <AddUser addUser={addUserHandler}/>
          </Route>
        </Switch>
      </Router>  
      <EditModal toggle={editModal} closeModal={closeModalHandler} data={selectedUser}   />    
      <AlertModal toggle={alertModalState} closeModal={openAlertModalHandler} />
      <section>
        {alerttt}
      </section>
    </DataProvider>

      
    </div>
  );
}

export default App;
