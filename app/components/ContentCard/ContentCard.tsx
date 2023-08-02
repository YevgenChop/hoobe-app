// components
import { ImageCard } from '@/app/components/ContentCard/ImageCard';
import { EmbededCard } from '@/app/components/ContentCard/EmbededCard';
// styles
import './styles.css';
import { ContentCardProps } from '@/app/components/ContentCard/index';

export const ContentCard = (props: ContentCardProps ) => {

  const {  content } = props.value;

  if (content.hasPhoto && !content.isEmbedEnabled) {
    return (
      <ImageCard {...props}/>
    );
  }

  if (content.isEmbedEnabled) {
    return (
        <EmbededCard {...props} />
    )
  }
};