import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Card from 'components/common/base/Card';
import Item from './Item';

const Frame = styled.div`
  margin-bottom: 0;
`;

const Label = styled.p`
  color: #666;
  font-size: 0.875rem;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

const Message = styled.div`
  margin-top: 1.75rem;
`;

const propTypes = {
  error: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDeleting: PropTypes.bool,
  isFetching: PropTypes.bool,
  isMore: PropTypes.bool,
  selected: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  error: 0,
  isDeleting: false,
  isFetching: false,
  isMore: false,
  selected: []
};

function Masonry({
  error,
  images,
  isDeleting,
  isFetching,
  isMore,
  selected,
  ...props
}) {
  const imageLength = images.length;
  const isAny = imageLength > 0;
  const isLoaded = error === 0 && !isFetching;
  const isEmpty = !isAny && isLoaded && !isMore;
  const isRemaining = !isAny && isMore && isLoaded;

  return (
    <Frame>
      <If condition={isRemaining}>
        <Message>
          <Label center>Remaining images will be loaded automatically.</Label>
        </Message>
      </If>
      <If condition={isEmpty}>
        <Label>No images found</Label>
      </If>
      <Card.Columns>
        <Choose>
          <When condition={imageLength > 0}>
            {images.map((image, index) => {
              const isSelected = selected.includes(image.public_id);

              return (
                <Item
                  {...props}
                  image={image}
                  index={index}
                  isLoading={isDeleting}
                  isSelected={isSelected}
                  key={image.public_id}
                />
              );
            })}
          </When>
          <Otherwise>
            <div />
          </Otherwise>
        </Choose>
      </Card.Columns>
    </Frame>
  );
}

Masonry.propTypes = propTypes;
Masonry.defaultProps = defaultProps;

export default Masonry;
