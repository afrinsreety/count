export default function Control(prop) {
  return (
    <div><div className='control center'>
    <button className="btn increase" onClick={prop.increase}>increase</button>
    <button className="btn decrease" onClick={prop.decrease}>decrease</button>
    <button className="btn reset" onClick={prop.reset}>reset</button>
    </div>
    
  </div>
  )
}
