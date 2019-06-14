import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextField, Button } from '@material-ui/core';
import { Login } from '../Login';

configure({ adapter: new Adapter() });

describe('<Login />', () => {
  it('Login form should contains two textFields and one button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(TextField)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
