import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Stores/store';
import { OidcProvider } from 'redux-oidc';
import { BrowserRouter } from 'react-router-dom';
import userManager from './Utils/userManager';

test('Header title', () => {
  const { getByText } = render(<Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OidcProvider>
  </Provider>);
  const linkElement = getByText(/PSPS Viewer/i);
  expect(linkElement).toBeInTheDocument();
});
