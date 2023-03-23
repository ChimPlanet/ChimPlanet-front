import Banner from '@/components/Banner';
import ConfigurableMainLayout from './ConfigurableMainLayout';
import ConfigurableOption from './ConfigurableMainOption';

export default function ConfigurableBanner() {
  // ! use RecoilState for shareing Sidebar Menu Setting
  const banners = [];

  return (
    <ConfigurableMainLayout Options={<ConfigurableOption />}>
      <Banner banners={banners} />
    </ConfigurableMainLayout>
  );
}
