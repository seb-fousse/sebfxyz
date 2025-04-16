import ShuffledGallery from '@/components/Gallery/ShuffledGallery.component';
import data from '@/constants/things/35mmBW.json';

export default function FilmBW() {
  return (
    <ShuffledGallery 
      title="Self scanned & developed B&W film" 
      subtitle="click & drag images" 
      data={data} 
      delay={1.5}
      returnHref='/#things'
    />
  );
}