import { Header as BaseHeader } from 'chimplanet-ui';

import SearchTab from './SearchTab';
import CategoryOverlay from './CategoryOverlay';

export default function Header() {
  return (
    <BaseHeader
      CategoryOverlayComponent={CategoryOverlay}
      SearchTabComponent={SearchTab}
    />
  );
}
