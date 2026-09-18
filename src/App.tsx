import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  return (
    <>
    <div className='flex flex-col justify-between items-center h-full mt-25 '>
      Sign in
      <button className='bg-black text-white rounded-e-xl+' onClick={() => navigate('/Home')}>Click</button>
    </div>
    </>
  );
}

export default App
