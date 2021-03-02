import { UserContext, MethodContext } from "./UserContext";
import CompA from "./CompA";
let App = () => {
  let emp = {
    name: "Chiru",
    sal: 60000,
  };
  let getHike = () => {
    console.log("Testing... getHike function in app");
  };
  return (
    <>
      <h1>Component - App </h1>
      <h5> data: {JSON.stringify(emp)}</h5>
      <UserContext.Provider value={emp}>
       
          <CompA/>
    
      </UserContext.Provider>
    </>
  );
};

export default App;