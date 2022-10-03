function App(props){
  return(
    <div>
      <h2>{props.city}</h2>
      <img src={props.img} />
      <p>{props.desc}</p>
      <p>{props.rating}</p>
      <hr />
    </div>
  )
}

export default App