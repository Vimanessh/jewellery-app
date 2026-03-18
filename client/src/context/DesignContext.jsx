import React, { createContext, useReducer } from 'react';

const initialState = {
  jewelleryType: 'ring',
  material: 'gold',
  stone: 'none',
  stoneSize: 'medium',
  engraving: '',
  engravingFont: 'Classic',
  ringSize: 7,
  quantity: 1,
  estimatedPrice: 37500, // (15000 * 2.5) + (0 * 1.5)
};

const basePrices = {
  ring: 15000,
  necklace: 25000,
  bracelet: 12000,
  earrings: 10000
};

const materialMultipliers = {
  gold: 2.5,
  platinum: 3.5,
  silver: 1.0,
  'rose-gold': 2.0
};

const stoneAddOns = {
  diamond: 20000,
  ruby: 8000,
  emerald: 10000,
  sapphire: 9000,
  amethyst: 3000,
  pearl: 2000,
  citrine: 2500,
  none: 0
};

const stoneSizeMultipliers = {
  small: 1,
  medium: 1.5,
  large: 2.2
};

const calculatePrice = (state) => {
  const base = basePrices[state.jewelleryType] || 0;
  const matMult = materialMultipliers[state.material] || 1;
  const stonePrice = stoneAddOns[state.stone] || 0;
  const sizeMult = stoneSizeMultipliers[state.stoneSize] || 1;
  
  return ((base * matMult) + (stonePrice * sizeMult)) * state.quantity;
};

const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'SET_FIELD':
      newState = { ...state, [action.payload.field]: action.payload.value };
      break;
    case 'RESET':
      newState = { ...initialState };
      break;
    default:
      return state;
  }
  newState.estimatedPrice = calculatePrice(newState);
  return newState;
};

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [designState, dispatch] = useReducer(reducer, initialState);

  const setField = (field, value) => {
    dispatch({ type: 'SET_FIELD', payload: { field, value } });
  };

  const resetDesign = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <DesignContext.Provider value={{ designState, setField, resetDesign }}>
      {children}
    </DesignContext.Provider>
  );
};
