import type { IBaseDialogStoreParams } from '#/components/dialog/dialog.store';
import { makeObservable, observable, action, computed } from 'mobx';
import { BaseDialogStore } from '#/components/dialog/dialog.store';

//* ---- Store ---------------------------------------------------------------- *//
export class SearchStore extends BaseDialogStore {
  private _params: ISearchStoreParams;

  private _state: ISearchStoreState = {
    term: '',
    isFocused: false
  };

  constructor(params?: ISearchStoreParams) {
    super(params);
    this._params = params ?? {};

    makeObservable(this._state, {
      term: observable,
      isFocused: observable
    });

    makeObservable<SearchStore, '_setValue'>(this, {
      _setValue: action,
      onFocusChange: action,
      state: computed,
      params: computed,
      isOptionsMenuVisible: computed
    });
  }

  private _setValue = (value: string): string => (this._state.term = value);

  hide = () => this.setIsVisible(false);
  show = () => this.setIsVisible(true);

  onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): string =>
    this._setValue(e.target.value);

  onFocusChange = (value: boolean): boolean => (this._state.isFocused = value);

  get isOptionsMenuVisible() {
    return this._state.isFocused && !this._state.term;
  }

  get state() {
    return this._state;
  }

  get params() {
    return this._params;
  }
}

//* ---- Interfaces ---------------------------------------------------------------- *//
export interface IOptionsItems {
  id: string;
  name: string;
}

export interface ISearchStoreParams extends IBaseDialogStoreParams {
  optionsItems?: IOptionsItems[];
}

export interface ISearchStoreState {
  term: string;
  isFocused: boolean;
}
