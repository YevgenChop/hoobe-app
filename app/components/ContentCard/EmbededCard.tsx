import { ContentCardProps } from '@/app/components/ContentCard/index';

export const EmbededCard = ({value, ...props}: ContentCardProps) => {

  return (
    <div  {...props} className={`content-card ${props.className ?? ''}`}>
      <iframe width="100%" height="100%" src={value.content.link} />
    </div>
  )

}