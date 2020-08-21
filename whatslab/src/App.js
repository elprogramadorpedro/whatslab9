import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
border:1px solid black;
height:100vh;  //largura 
width:600px; //altura
margin:0 auto;
box-sizing:border-box;                                  /*con box-sizing:border-box eliminas el poco scroll que queda y asi mi elemento principal ocupa solo el ancho y anto de mi pagina sin escrolar*/
display: flex;
flex-direction:column;
`
const MenssagesContainer = styled.div`
padding:8px;
flex-grow:1;
display:flex;                                           /*paso1 esto me ayuda  que el texto este desde abajo junto con colunreverse*/
flex-direction:column-reverse;/////////////
`
const InputsContainer = styled.div`
display:flex;
`
const NameImput=styled.input`
width:100px;
`
const MessageInput = styled.input`
flex-grow:1;                                             /*para que ocupe todo el tamaño restante. width:100px;*/
`

export class App extends React.Component {

  state = {
   messages: [],
    userValue:'',
    messageValue:''
  }

onChangeUserValue = (event) => {
  this.setState({userValue: event.target.value})
}

onChangeMessageValue = (event) => {
  this.setState({messageValue: event.target.value})
}

sendMessage = () => {
  const newMessage = {
    user: this.state.userValue,
    text: this.state.messageValue
  }

   const newMessagesArray= [newMessage, ...this.state.messages]
    
   this.setState({messages: newMessagesArray, messageValue: '', userValue:''})
}

  render() {
  return (
    
     
     <AppContainer>
     <MenssagesContainer>

       {this.state.messages.map((message, index) => {
         return<p key={index}>
           <strong>{message.user}</strong>: {message.text}
         </p>
       })}

      </MenssagesContainer>
      <InputsContainer>
       
      <NameImput 
      onChange={this.onChangeUserValue}
      value={this.state.userValue}
      placehoder={'Nome'}
      />

      <MessageInput 
      onChange={this.onChangeMessageValue}
      value={this.state.messageValue}
      placehoder={'Mensagem'}
      />

      <button onClick={this.sendMessage}>Enviar</button>
      </InputsContainer>
      </AppContainer>

     );
  }
}

export default App;




