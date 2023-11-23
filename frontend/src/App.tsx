import { useState } from 'react';
import './App.css'
import {EmployeeList} from './components/EmployeesList'
import Header from './components/Header'
import { NewEmployee } from './components/NewEmployee'

function App() {
  const [refreshEmployeeList, setRefreshEmployeeList] = useState(false);

  const handleEmployeeListRefresh = () => {
    setRefreshEmployeeList((prev) => !prev);
  };

  const handleEmployeeDeleted = () => {
    setRefreshEmployeeList((prev) => !prev);
  };
  
  return (
    <>
      <Header></Header>
      <NewEmployee onEmployeeAdded={handleEmployeeListRefresh} /><br />
      <EmployeeList  onEmployeeDeleted={handleEmployeeDeleted}  key={refreshEmployeeList.toString()}/>
    </>
  )
}

export default App
