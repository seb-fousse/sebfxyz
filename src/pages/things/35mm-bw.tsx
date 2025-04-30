// Components
import CustomHead from '@/components/CustomHead/CustomHead.component';
import ShuffledGallery from '@/components/Gallery/ShuffledGallery.component';

// Constants
import data from '@/constants/things/35mmBW.json';

export default function FilmBW() {
  return (
    <div>
      <CustomHead title="35mm B&W Film" description="Self loaded, developed, and scanned B&W film. Shot on a Pentax K1000 in Milan." url="https://sebf.xyz/things/35mm-bw" />
      <ShuffledGallery 
        title="Self developed & scanned B&W film" 
        subtitle="click & drag images" 
        data={data} 
        delay={1.5}
        returnHref='/#things'
      />
    </div>
  );
}