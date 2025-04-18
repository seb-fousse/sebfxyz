import ShuffledGallery from '@/components/Gallery/ShuffledGallery.component';
import data from '@/constants/things/art2019.json';

export default function Art() {
  return (
    <ShuffledGallery 
      title="Selection of Art From 2019" 
      subtitle="click & drag images" 
      data={data} 
      delay={1.5}
      returnHref='/#things'
    />
  );
}