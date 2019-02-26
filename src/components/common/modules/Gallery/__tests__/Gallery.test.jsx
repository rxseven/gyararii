import { shallow } from 'enzyme';
import React from 'react';
// import renderer from 'react-test-renderer';

import Gallery from '../index';

describe('<Gallery />', () => {
  // Arrange
  const props = {
    // Toolbar
    nodeTop: React.createRef(),

    // File
    id: 'gallery',
    onUpload: jest.fn(),

    // Control
    onDeleteRequest: jest.fn(),
    onDeselect: jest.fn(),
    onScrollTop: jest.fn(),
    onSelectAll: jest.fn(),

    // Error
    error: [],
    onDismiss: jest.fn(),

    // Masonry
    images: [
      {
        public_id: 'image-001',
        secure_url: 'https://via.placeholder.com/480x320?text=Image-001',
        url: 'https://via.placeholder.com/480x320?text=Image-001'
      },
      {
        public_id: 'image-002',
        secure_url: 'https://via.placeholder.com/480x320?text=Image-002',
        url: 'https://via.placeholder.com/480x320?text=Image-002'
      },
      {
        public_id: 'image-003',
        secure_url: 'https://via.placeholder.com/480x320?text=Image-003',
        url: 'https://via.placeholder.com/480x320?text=Image-003'
      }
    ],
    onLightboxOpen: jest.fn(),
    onSelect: jest.fn(),

    // Pagination
    isMore: false,
    onLoad: jest.fn(),

    // Confirm
    buttonConfirm: 'delete',
    isModal: false,
    onDeleteCancel: jest.fn(),
    onDeleteConfirm: jest.fn(),
    title: 'Permanently Delete Images',

    // Lightbox
    currentImage: 1,
    onLightboxNext: jest.fn(),
    onLightboxPrev: jest.fn(),
    onLightboxClose: jest.fn()
  };
  const component = <Gallery {...props} />;

  describe('Unit tests', () => {
    it('should render without crashing', () => {
      // Act
      const wrapper = shallow(component);

      // Assert
      expect(wrapper).toBeDefined();
    });
  });

  // describe('Snapshot tests', () => {
  //   it('should render correctly', () => {
  //     // Act
  //     const tree = renderer.create(component).toJSON();

  //     // Assert
  //     expect(tree).toMatchSnapshot();
  //   });
  // });
});
