import renderer from 'react-test-renderer';
import React from '../node_modules/@types/react';
import App from './App';
it('renders without crashing', () => {
    const rendered = renderer.create(React.createElement(App, null)).toJSON();
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=App.test.js.map