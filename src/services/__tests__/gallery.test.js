import axios from 'axios';

import { deleteImages, fetchImages, uploadImages } from '../gallery';

// Mock
jest.mock('axios');

// Test suites
describe('fetchImages() service', () => {
  it('should return images when the operation completed successfully', async () => {
    const data = {
      max_results: undefined,
      next_cursor: null
    };
    const response = {
      next_cursor: 'cursor',
      resources: [
        { url: 'http://res.cloudinary.com/rxseven/image/upload/image-001.jpg' },
        { url: 'http://res.cloudinary.com/rxseven/image/upload/image-002.jpg' }
      ]
    };
    const errorHandler = jest.fn();
    const successHandler = jest.fn();
    const expected = { arguments: response };
    axios.get.mockImplementation(() => Promise.resolve(response));

    await fetchImages(data, successHandler, errorHandler);

    expect(successHandler).toHaveBeenCalledWith(expected.arguments);
    expect(errorHandler).not.toHaveBeenCalled();
  });

  it('should return an error message when the operation failed', async () => {
    const data = {
      max_results: undefined,
      next_cursor: null
    };
    const response = new Error('Something went wrong');
    const errorHandler = jest.fn();
    const successHandler = jest.fn();
    const expected = { arguments: response };
    axios.get.mockImplementation(() => Promise.reject(response));

    await fetchImages(data, successHandler, errorHandler);

    expect(errorHandler).toHaveBeenCalledWith(expected.arguments);
    expect(successHandler).not.toHaveBeenCalled();
  });
});

describe('uploadImages() service', () => {
  it('should upload images successfully', async () => {
    const data = new FormData();
    const response = [
      { url: 'http://res.cloudinary.com/rxseven/image/upload/image-001.jpg' },
      { url: 'http://res.cloudinary.com/rxseven/image/upload/image-002.jpg' }
    ];
    const errorHandler = jest.fn();
    const successHandler = jest.fn();
    const expected = { arguments: response };
    axios.post.mockImplementation(() => Promise.resolve(response));

    await uploadImages(data, successHandler, errorHandler);

    expect(successHandler).toHaveBeenCalledWith(expected.arguments);
    expect(errorHandler).not.toHaveBeenCalled();
  });

  it('should return an error message when the operation failed', async () => {
    const data = new FormData();
    const response = new Error('Something went wrong');
    const errorHandler = jest.fn();
    const successHandler = jest.fn();
    const expected = { arguments: response };
    axios.post.mockImplementation(() => Promise.reject(response));

    await uploadImages(data, successHandler, errorHandler);

    expect(errorHandler).toHaveBeenCalledWith(expected.arguments);
    expect(successHandler).not.toHaveBeenCalled();
  });
});

describe('deleteImages() service', () => {
  it('should delete images successfully', async () => {
    const data = ['image-001', 'image-002'];
    const response = null;
    const errorHandler = jest.fn();
    const successHandler = jest.fn();
    axios.delete.mockImplementation(() => Promise.resolve(response));

    await deleteImages(data, successHandler, errorHandler);

    expect(successHandler).toHaveBeenCalled();
    expect(errorHandler).not.toHaveBeenCalled();
  });

  it('should return an error message when the operation failed', async () => {
    const data = ['image-001', 'image-002'];
    const response = new Error('Something went wrong');
    const errorHandler = jest.fn();
    const successHandler = jest.fn();
    const expected = { arguments: response };
    axios.delete.mockImplementation(() => Promise.reject(response));

    await deleteImages(data, successHandler, errorHandler);

    expect(errorHandler).toHaveBeenCalledWith(expected.arguments);
    expect(successHandler).not.toHaveBeenCalled();
  });
});
