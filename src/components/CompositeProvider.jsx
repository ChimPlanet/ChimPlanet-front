import { cloneElement } from 'react';

const nestElement = (children, element) => cloneElement(element, {}, children);

export const CompositeProvider = ({ children, providers }) => {
  return <>{providers.reduceRight(nestElement, children)}</>;
};
