import { useReducer } from 'react';
import { formBaseVOFromBanner, formDiffVOFromPairedBanner } from '../utils';

/**
 * @typedef {Omit<import('@/service/banner/banner-request').UploadBannerRequestOptions, "formData" | "deviceType">} BannerFormBaseState
 *
 * @typedef {Pick<import('@/service/banner/banner-request').UploadBannerRequestOptions, "deviceType" | "formData"> & {imageSourceUrl: string}} BannerFormDiffState
 */

/** @type {BannerFormBaseState} */
const defaultBannerBaseFormState = {
  fileType: 'MAIN',
  redirectType: 'CurrentTab',
  redirectUrl: '',
  useYn: 'Y',
  sequence: 0,
};

/**
 * @param {"MOBILE" | "PC"} type
 * @returns {BannerFormDiffState}
 */
const defaultBannerDiffFormState = (type) => ({
  formData: null,
  deviceType: type,
  imageSourceUrl: null,
});

/**
 * @param {"new" | "update"} type
 * @param {import('@/components/admin/Marketing/components/utils').PairedBanner} payload
 */
export default function useBannerForm(type, payload) {
  /** @type {[BannerFormBaseState, (newState: Partial<BannerFormBaseState>)=>void]} */
  const baseStateAndDispatch = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    type === 'new'
      ? defaultBannerBaseFormState
      : formBaseVOFromBanner(payload.pc),
  );

  /** @type {[BannerFormDiffState, (newState: Partial<BannerFormDiffState>)=>void]} */
  const pcStateAndDispatch = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    type === 'new'
      ? defaultBannerDiffFormState('PC')
      : formDiffVOFromPairedBanner(payload.pc),
  );

  /** @type {[BannerFormDiffState, (newState: Partial<BannerFormDiffState>)=>void]} */
  const mobileStateAndDispatch = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    type === 'new'
      ? defaultBannerDiffFormState('MOBILE')
      : formDiffVOFromPairedBanner(payload.mobile),
  );

  return {
    base: baseStateAndDispatch,
    pc: pcStateAndDispatch,
    mobile: mobileStateAndDispatch,
  };
}
