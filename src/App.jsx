import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"
import WelcomeMessage from "./component/WelcomeMessage"
import JSXRules from "./component/JSXRules"
import Func from "./component/Func"
import Greeting from "./component/Greeting"
import ProductInfo from "./component/ProductInfo"
import HandleList from "./component/HandleList"
import UserList from "./component/UserList"
import ProductList from "./component/ProductList"
import Person from "./component/Person"
import Card from "./component/Card"
import Password from "./component/Password"
import Cart from "./component/Cart"
import Weather from "./component/Weather"
import UserStatus from "./component/UserStatus"
import DayGreeting from "./component/DayGreeting"
import Style from "./component/Style"
import UseIcon from "./component/UseIcon"
import StyledCard from "./component/StyledCard"
import ProfileCard from "./component/ProfileCard"
import Event from "./component/Event"
import Counter from "./component/Counter"
import FriendList from "./component/FriendList"
import Movie from "./component/Movie"
import Parent from "./component/Parent"
import ExampleOne from "./component/OTHER/ExampleOne"
import ParentExampl from "./component/OTHER/ParentExampl"
import MainH from "./component/CUSTOM-HOOK/MainH"
import UniqueID from "./component/UNIQUE-ID/UniqueID"
import Article from "./component/UNIQUE-ID/Article"

function App() {

  const url="https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_1280.jpg";

  const products=[
    {
        id:1,name:"Phone",price:699.99
    },
    {
        id:2,name:"Laptop",price:999.99
    },
    {
        id:3,name:"Tablet",price:499.99
    }
    ]

  return (
    <>
      {/* <Header/>
      <Main/>
      <Footer/> */}
      {/* <section id="section">
        <h1>My Website</h1>
        <h3>Welcome to react JS</h3>
        <p className="text">Paragraph Content is here</p>
      </section> */}
      {/* <WelcomeMessage/> */}
      {/* <JSXRules/>
      <Func/>
      <Greeting/> */}
      {/* <ProductInfo/>
      <HandleList/>
      <UserList/> */}
      {/* <ProductList product={products} imageUrl={url} />
      <Person name="Shivam Kumar Singh" age="23" /> */}

      {/* <Card>
        <Person name="Sam" age="25" />
        <span>----------This is a Line------------</span> */}
        {/* <Person name="Rohan" age="22" />
        <span>----------This is a Line------------</span>
        <Person name="Biswas" age="22" />
        <span>----------This is a Line------------</span> */}
      {/* </Card> */}
      {/* <Password isValid={true}/>
      <Cart/>
      <Weather temperature={18}/> */}
      {/* <UserStatus loggedIn={true} isAdmin={true}/> */}
      {/* <DayGreeting timeOfDay="day"/>
      <Style/>
      <StyledCard/> */}
      {/* <ProfileCard/> */}
      {/* <Event/>
      <Counter/> */}
    {/* <FriendList/>
    <Movie/>
    <Parent/> */}
    <ParentExampl/>
    <hr />
    {/* <MainH/> */}
    <UniqueID/>
    <Article/>
    </>
  )
}

export default App
