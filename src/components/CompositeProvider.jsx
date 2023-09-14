import { cloneElement } from 'react';

const nestElement = (children, element) => cloneElement(element, {}, children);

const CompositeProvider = ({ children, providers }) => {
  return <>{providers.reduceRight(nestElement, children)}</>;
};

export default CompositeProvider;
