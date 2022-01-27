import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from './components/Card';
import CarsDataDB from './db/data.json';
import _uniqueId from 'lodash/uniqueId';

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
} & Pick<CarsDataExtra, 'id'>;

type CarsDataExtra = {
  id?: any;
};

let { offers } = CarsDataDB;

const App: React.FC = () => {
  const [cars, setCars] = useState<Array<CarsData>>(offers);
  const [isLoading, setIsLoading] = useState(true);

  const availabilityParser = ({ availability, i }: any) => {
    offers[i].availability = availability;

    setCars([...cars]);
  };

  const removeParser = ({ id, i }: any) => {
    const updatedCars = cars.filter((item) => item.id !== id);

    console.log(id);
    setCars([...updatedCars]);

    console.log('updatedCars', updatedCars);
    console.log('cars', cars);
  };

  const offersParser = (data: any) => {
    const { offers } = data;
    offers.map((offer: CarsData) => (offer.id = Number(_uniqueId())));
    return [...offers];
  };

  useEffect(() => {
    setCars(offersParser(CarsDataDB));
  }, [CarsDataDB, offers]);

  return (
    <>
      <Wrapper>
        <Card
          cars={cars}
          getQuery={(result) => availabilityParser(result)}
          remove={(result) => removeParser(result)}
        />
      </Wrapper>
    </>
  );
};

export default App;
