import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'react-testing-library/cleanup-after-each';

// Configure Enzyme adapter
configure({ adapter: new Adapter() });
