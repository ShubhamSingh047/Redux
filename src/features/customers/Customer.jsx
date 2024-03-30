import { useSelector } from "react-redux";

function Customer() {
  //use a callback function which take a single argument which is store
  const { fullName } = useSelector((store) => store.customer);
  console.log(fullName, "full name");
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
