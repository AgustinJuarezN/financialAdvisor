import React, { useState } from "react";
import { useSelector } from 'react-redux';
import "./HomePage.scss";
import { Container, Row } from 'react-bootstrap';
import ButtonGroup from './../../components/ButtonGroup';
import RiskTable from './../../components/RiskTable';
import RiskDonutChart from './../../components/RiskDonutChart';
import ActionButton from './../../components/ActionButton';

const HomePage = () => {
  const [mode, setMode] = useState('chart');
  const riskLevel = useSelector((state) => state.risk.riskLevel);

  const changeMode = () => {
   mode === 'chart' ? setMode('donut') : setMode('chart');
  }
  
  return (
    <Container>
      <Row className='select'>
        <div>
          <ButtonGroup />
        </div>
        <div className='next'>
          <ActionButton value={'Continue'} to={'/verify'} disabled={riskLevel ? false : true}/>
        </div>
        <div className='content-data'>
            {
                mode === 'chart'
                ? <RiskTable />
                : <RiskDonutChart />
            }   
        </div>
        <div className='button-mode' onClick={changeMode}>
            {
              mode === 'chart'
                ? <img src='/donutlogo.png' alt='img' />
                : <img src='/chartlogo.jpg' alt='img' />
            }
        </div>
      </Row>
    </Container>
  );
};

export default HomePage;
