import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux'
import rootReducer from './../reducers';

describe("GIVEN a Redux store created from the rootReducer", () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  describe("WHEN this is passed to Root", () => {
    let container, getAllByText;
    beforeEach(() => {
      ({ container, getAllByText  } = render(
        <Provider store={store} >
          <App />
        </Provider>
      ));
    });

    test('renders Financial Advisor title', () => {
      expect(container).toHaveTextContent(/Financial Advisor/i);
    });

    test('render Buttons', () => {
      const buttons = container.querySelector('.risk-button');
      expect(buttons).toBeTruthy();
    });

    describe("Risk level 10 was clicked", () => {
      beforeEach(() => {
        fireEvent.click(getAllByText('10')[0]);
      });

      test("THEN show active row with color", () => {
         const row = container.querySelector('.active-row');
         expect(row).toBeTruthy();
      });
    });

    describe("Show Donut button was clicked", () => {
      beforeEach(() => {
        fireEvent.click(container.querySelector('.button-mode'));
      });

      test("THEN show donut", () => {
        const donut = container.querySelector('.donut');
         expect(donut).toBeTruthy();
      });
    });
  })
});
