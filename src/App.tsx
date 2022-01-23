import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from './components/Card';
import CarsDataDB from './db/data.json';



const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 100%;
  position: relative;
  flex-wrap: wrap;
`;

export type CarsData = {
  make: string;
  model: string;
  engine: string;
  availability: boolean;
  photo?: string | undefined;
  id?: number | string
};

const { offers } = CarsDataDB;

const App: React.FC = () => {
  const [cars, setCars] = useState<CarsData[] > (offers);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCars(offers)
  }, [CarsDataDB]);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await fetch('https://bitbucket.org/dacsoftware/recruitment-frontend/src/master/data.json', {
  //       // headers : {
  //       //   'Content-Type': 'application/json',
  //       //   'Accept': 'application/json'
  //       //  }
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {console.log(data) })
  //   };
  //   fetchItems();
  // }, []);

  return (
    <>
      <Wrapper>
      <Card cars={cars} />
      </Wrapper>
    </>
  );
};

export default App;
