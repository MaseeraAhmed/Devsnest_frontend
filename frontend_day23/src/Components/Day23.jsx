// import styled from 'styled-components';
import useFetch from './useFetch';
import useToggle from './useToggle';


const Day23 = () => {
  const [data2] = useFetch(`https://jsonplaceholder.typicode.com/todos/55`);
  const [data3] = useFetch(`https://jsonplaceholder.typicode.com/todos/44`);

  const [myText, setMyText] = useToggle();

  return (
    <div>
      <h1>Day 23</h1>
      <p>
        {data2 && data2.title} ID: {data2.id}
      </p>
      <p>{data3.title}</p>
      <div
        style={{
          marginTop: '30px  ',
        }}>
        <h1>Toggle Button</h1>
        <button onClick={setMyText}>
          {myText ? 'Toggled' : 'Click to Toggle'}
        </button>
      </div>


    </div>
  );
};

export default Day23;
