import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import styled from 'styled-components';

import Button from 'components/common/base/Button';
import Icon from 'components/common/base/Icon';
import { pluralWord } from 'helpers/string';

const Check = styled(Icon)`
  font-size: 0.75rem;
  margin-right: 4px;
`;

const Count = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

const Danger = styled.span`
  color: ${({ theme }) => theme.color.danger};
  cursor: pointer;
`;

const Frame = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Highlight = styled.strong`
  color: #ff620c;
`;

const Meta = styled.div`
  color: #666;
  font-size: 0.75rem;
  margin-bottom: 0;
`;

const Panel = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Summary = styled.span`
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

const propTypes = exact({
  error: PropTypes.array,
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  onDeleteRequest: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  selected: PropTypes.array,
  status: PropTypes.string
});

const defaultProps = {
  error: [],
  isLoading: false,
  selected: [],
  status: ''
};

function Control({
  error,
  images,
  isLoading,
  onDeleteRequest,
  onDeselect,
  onError,
  onSelectAll,
  selected,
  status
}) {
  const errorLength = error.length;
  const imageLength = images.length;
  const isEmpty = imageLength < 1;
  const isError = errorLength > 0;
  const selectedLength = selected.length;

  return (
    <Frame>
      <Choose>
        <When condition={selectedLength}>
          <Panel>
            <Summary>
              <If condition={isMobile}>
                <Check icon={['far', 'check-circle']} />
              </If>
              <If condition={imageLength === selectedLength}>All </If>
              <Highlight>{selectedLength}</Highlight>
              <If condition={isBrowser}> selected</If>
            </Summary>
            <Button.Set>
              <Button isLoading={isLoading} onClick={onSelectAll}>
                Select all
              </Button>
              <Button isLoading={isLoading} onClick={onDeselect}>
                Clear
              </Button>
              <Button
                icon="trash-alt"
                isLoading={isLoading}
                minimal
                onClick={onDeleteRequest}
              >
                Delete
              </Button>
            </Button.Set>
          </Panel>
        </When>
        <When condition={!!status}>
          <Meta>{status}</Meta>
        </When>
        <When condition={!isEmpty && !status}>
          <Meta>
            Showing <Count>{imageLength}</Count> images
            {isError && (
              <span>
                {' '}
                with{' '}
                <Danger onClick={onError}>{`${errorLength} ${pluralWord(
                  errorLength,
                  'error'
                )}`}</Danger>
              </span>
            )}
          </Meta>
        </When>
      </Choose>
    </Frame>
  );
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
