import React from 'react';
import ButtonComponent from './components/atoms/Button';
import InputComponent from './components/atoms/Input';
import InputLabelComponent from './components/atoms/InputLabel';
import MenuItemComponent from './components/atoms/MenuItem';
import SelectComponent from './components/atoms/Select';

const App: React.FC = () => {
  return (
    <div className="App">
      <ButtonComponent
        onClick={() => alert("I am clicked")}
      >
        Click Me
      </ButtonComponent>

      <InputComponent onChange={() => { }} />

      <div>
        <SelectComponent label="Select">
          <MenuItemComponent value={1}>One</MenuItemComponent>
          <MenuItemComponent value={2}>Two</MenuItemComponent>
          <MenuItemComponent value={3}>Three</MenuItemComponent>
        </SelectComponent>
      </div>

      <div>
        <InputLabelComponent>Enter your name</InputLabelComponent>
      </div>

    </div>
  );
}

export default App;
