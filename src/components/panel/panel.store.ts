import type { ISide } from './panel.style';
import type { IBaseDialogStoreParams } from '../dialog/dialog.store';
import { BaseDialogStore } from '../dialog/dialog.store';

export interface IPanelStoreParams extends IBaseDialogStoreParams {
  side?: ISide;
  width?: string;
}

export class PanelStore extends BaseDialogStore {
  private _params?: IPanelStoreParams;

  constructor(params?: IPanelStoreParams) {
    super(params);

    this._params = {
      ...params
    };
  }

  hide = () => this.setIsVisible(false);
  show = () => this.setIsVisible(true);

  handleOutsideClick = () => {
    if (this.isVisible && this.dialogParams.isOutsideClick) {
      this.hide();
    }
  };

  get isDialogNotAnimate(): boolean {
    return !!this._params?.isNotAnimate;
  }

  get side(): ISide {
    return this._params?.side ?? 'left';
  }

  get width(): string {
    return this._params?.width ?? '300px';
  }
}
