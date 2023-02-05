export default function NavigatorElectron({setComponentShowing}) {
  return (
    <div>
      <ul>
        <li>
          <button onClick={()=>{setComponentShowing('home')}}>Home</button>
        </li>
        <li>
          <button onClick={()=>{setComponentShowing('counter')}}>Counter</button>
        </li>
      </ul>
    </div>
  );
}
