import '../src/App.css'
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUserName } from "./features/Users";
import { useState } from "react";
function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.users.value)
  const [name,setName]= useState('')
  const [username,setUserName]= useState('')
  const [newUsername,setNewUserName]= useState('')
  return (
    <div className="App">
        <div className="addUser">
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
            <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="UserName" />
            <button onClick={()=>{dispatch(addUser({id:userList[userList.length - 1].id + 1 , name, username}))}} >Add User</button>
        </div>
        <div className="displayUser">
          {userList.map((user)=>{
            return <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input onChange={(e)=>setNewUserName(e.target.value)} type="text" placeholder="New UserName" />
              <button   onClick={() => {
                  dispatch(
                    updateUserName({ id: user.id, username: newUsername })
                  );
                }}>Update Username</button>
              <button onClick={()=>{ dispatch(deleteUser({ id: user.id }));}}>Delete User</button>
            </div>
          })}
        </div>
    </div>
  );
}

export default App;
