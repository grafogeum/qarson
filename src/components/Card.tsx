import { CarsData } from '../App';
import styled from 'styled-components';
import { useState } from 'react';

type CardProps = {
  availability: boolean;
};

const CarCard = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  flex-wrap: wrap;
  margin: 10px;
  border: ${({ availability }) => !availability && '1px solid red'};
  border-radius: 5px;
  & > h4 {
    margin-top:5px;
  }
`;
const SnapInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
type CardImageProps = {
  src: string | any;
};

export const CardImage = styled.div<CardImageProps>`
  width: 100%;
  height: 170px;
  margin:10px;
  max-height: 170px;
  margin: 0;
  border-radius: 5px 5px 0 0 ;
  background: center / cover no-repeat url(${({ src }) => src});
` 

interface CarsProps2 {
  cars: CarsData[];
}

const Container = styled.div`
  display:flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  & > div {
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & > hr { width: 80%;}
`




export const Card = ({ cars }: CarsProps2) => {

  console.log('samochody', cars)

  const [available, setAvailable] = useState()

  // const handleAvailability = (availability) => {
    
  // }

  return (
    <>
        {cars.map(({model,make, photo, availability, engine, id}: CarsData, i: number) => {
          return (
            <>
              <CarCard key={id} availability={availability}>
                  <CardImage src={photo ?? "https://fakeimg.pl/300x170/" } />
                <Container>
                  <div>Mark: {make}</div>
                  <div>Model: {model}</div>
                  <hr />
                  </Container>
                  <SnapInfo>
                  <div>Engine: {engine}</div>
                  {/* <button onClick={setAvailable(availability => !availability)}>availability</button> */}
                  <button onClick={()=> {}}>availability</button>
                  </SnapInfo>
              </CarCard>
            </>
          );
        })}
    </>
  );
};
