// Components
import CustomHead from '@/components/CustomHead/CustomHead.component';
import ShuffledGallery from '@/components/Gallery/ShuffledGallery.component';

// Constants
import data from '@/constants/things/art2019.json';

export default function Art() {
  return (
    <div>
      <CustomHead title="Paintings & Collages" description="A selection of mixed media art from 2019. Concentrated around the intersection of text forms and portraiture." url="https://sebf.xyz/things/art-2019" />  
      <ShuffledGallery 
        title="Selection of Art From 2019" 
        subtitle="click & drag images" 
        data={data} 
        delay={1.5}
        returnHref='/#things'
      />
    </div>
  );
}