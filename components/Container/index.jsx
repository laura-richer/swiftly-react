import PropTypes from 'prop-types';
import React from 'react';

const propTypesContainer = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerName: PropTypes.string,
  containerWrapper: PropTypes.string,
  rowType: PropTypes.string,
};

const defaultPropsContainer = {
  containerName: '',
  containerWrapper: '',
  rowType: '',
};

const propTypesCols = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerCols: PropTypes.string,
  flexOrder: PropTypes.string,
};

const defaultPropsCols = {
  containerCols: '',
  flexOrder: '',
};

const Container = (props) => {
  const {
    children,
    containerName,
    containerWrapper,
    rowType,
  } = props;

  return (
    <div am-container-wrapper={containerWrapper}>
      <div am-container={containerName}>
        <div am-row={rowType}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Cols = (props) => {
  const {
    children,
    containerCols,
    flexOrder,
  } = props;

  return (
    <div am-col={containerCols} am-flex-order={flexOrder}>
      {children}
    </div>
  );
};

Cols.propTypes = propTypesCols;
Cols.defaultProps = defaultPropsCols;
Container.propTypes = propTypesContainer;
Container.defaultProps = defaultPropsContainer;


export {
  Cols,
  Container,
};
