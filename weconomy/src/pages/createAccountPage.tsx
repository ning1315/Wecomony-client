import * as React from 'react';
import { useState } from 'react';
import Nav from '../component/nav';
import AccountSideBar from '../component/accountSideBar';
import CreateAccount from '../component/createAccount';
import { IoCalculator } from 'react-icons/io5';

const CreateAccountPage: React.FC = () => {

  const [incomeCounter, setIncomeCounter] = useState<number>(1);

  const [outcomeCounter, setOutcomeCounter] = useState<number>(1);


  const inCounter = (message: string) => {
    if (message === 'up' && incomeCounter < 2) {
      setIncomeCounter(incomeCounter + 1);
    } else if (message === 'down' && incomeCounter > 1) {
      setIncomeCounter(incomeCounter - 1);
    } else {
      console.log('asdf');
    }
  };

  const outCounter = (message: string) => {
    if (message === 'up' && outcomeCounter < 2) {
      setOutcomeCounter(outcomeCounter + 1);
    } else if (message === 'down' && outcomeCounter > 1) {
      setOutcomeCounter(outcomeCounter - 1);
    }
  };


  return (
    <>
      <Nav></Nav>
      <div className="createAccount-container">
        <div className="belowBtns-calculator">
          <IoCalculator></IoCalculator>
        </div>
        <div className="createAccount-content">
          <CreateAccount incomeCounter={incomeCounter} outcomeCounter={outcomeCounter} inCounter={inCounter} outCounter={outCounter}></CreateAccount>
        </div>
      </div>
    </>
  );
};

export default CreateAccountPage;
