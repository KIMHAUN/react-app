import logo from './logo.svg';
import './App.css';
import { logRoles } from '@testing-library/react';
function Header(props) {
  return <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault(); //a tag의 기본 동작(reload) 방지
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t=props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav> 
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'js is ...'}
  ]
  return (
    <div>
      <Header title="WEB" onChangeMode={function(){
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
    </div>
  );
}

export default App;
