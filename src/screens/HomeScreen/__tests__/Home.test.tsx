import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

jest.mock('@react-navigation/native',()=>({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ navigate: jest.fn() }),
}))

describe('HomeScreen', ()=>{
    it('should render HomeScreen', () => {
        renderer.create(<Home />);
    });
})