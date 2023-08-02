import { PropsWithChildren } from 'react';

import './styles.css';

export const Button = (props: PropsWithChildren) => {
  return (
    <div className="hoobe-button">
      { props.children }
    </div>
  )
}