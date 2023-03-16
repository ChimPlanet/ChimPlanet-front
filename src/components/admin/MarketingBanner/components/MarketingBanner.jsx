import { useAdminSidebarMenu } from '@/components/admin/AdminSidebar';
import { BannerConfiguration } from '@/components/admin/BannerConfiguration';

export default function MarketingBanner() {
  const [, { setElement }] = useAdminSidebarMenu();

  const handleClick = () => {
    setElement(<BannerConfiguration />);
  };

  return <button onClick={handleClick}>Enable Banner Configuration</button>;
}
