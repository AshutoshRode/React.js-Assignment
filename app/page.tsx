import UserList from "../components/UserList";


export default function HomePage() {

  const fetchUsers = async () =>{
      try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
         
      } catch (error) {
          console.error(error)
      }
  }
  

  return <UserList usersData={fetchUsers()} />;
}
