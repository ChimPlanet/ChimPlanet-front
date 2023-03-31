import { Banner } from '@/service/banner';
import { useCallback } from 'react';
import { useReducer } from 'react';
import { formVOFromBanner } from '../utils';

/**
 * @typedef {import('@/service/banner/banner-request').UploadBannerRequestOptions} BannerFormState
 */

/** @type {BannerFormState} */
const defaultBannerFormState = {
  deviceType: 'PC',
  fileType: 'MAIN',
  redirectionType: '',
  redirectUrl: '',
  useYn: 'Y',
  sequence: 0,
  formData: null,
};

/**
 * @param {"new" | "update"} type
 * @param {Banner?} payload
 * @returns
 */
export default function useBannerForm(type, payload) {
  /** @type {[BannerFormState, (newState: Partial<BannerFormState>)=>void]} */
  const stateAndDispatch = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    type === 'new' ? defaultBannerFormState : formVOFromBanner(banner),
  );

  const submit = useCallback(() => {}, [stateAndDispatch[0]]);

  return [stateAndDispatch, submit];
}
