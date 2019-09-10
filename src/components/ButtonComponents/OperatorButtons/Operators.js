import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = () => {
  const [operatorState, setOperatorrState] = useState(operators);

  return (
    <div className="operators">
      {
        operatorState.map(
          item => 
          <OperatorButton
            key={item.value} 
            value={item.value} 
          />
        )
      }
    </div>
  );
};

export default Operators;
