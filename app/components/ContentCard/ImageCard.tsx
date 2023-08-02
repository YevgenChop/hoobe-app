import { Content } from '@/app/types';
import { ComponentProps } from 'react';
import { ContentCardProps } from '@/app/components/ContentCard/index';

export const ImageCard = ({value, ...props}: ContentCardProps ) => {

  const { content } = value;
  return (
    <div {...props} className={`content-card ${props.className ?? ''}`}  >
      <img className="content-card-background" src={`/images/content-id-${content.id}-image.jpg`} alt=""/>
      <a href={content.link} className="content-card-body flex items-end">
        <div className="content-card-link">
          <span className="content-card-title">
            {content.title}
          </span>
          <span className="content-card-logo">
            <img src="/assets/hoobe.svg"/>
          </span>
        </div>
      </a>
    </div>
  );
};