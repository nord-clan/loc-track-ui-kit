import type { SearchStore } from './search.store';
import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { CgSearchLoading } from 'react-icons/cg';
import { SearchStyled } from './search.style';

export const Search: FC<{ store?: SearchStore }> = observer(({ store }) => {
  if (!store) return null;
  const { state, params, isVisible, isOptionsMenuVisible, onFocusChange } = store;

  return (
    <SearchStyled isVisible={isVisible}>
      <div className="input">
        <input
          onFocus={() => onFocusChange(true)}
          onBlur={() => onFocusChange(false)}
          value={state.term}
          onChange={store.onChangeSearch}
          placeholder="Search..."
        />
        <CgSearchLoading />
      </div>
      {isOptionsMenuVisible && (
        <div className="settings">
          <div className="settings-wrapper">
            {params.optionsItems?.map(({ id, name }) => (
              <div key={id} className="items">
                {name}
              </div>
            ))}
          </div>
        </div>
      )}
    </SearchStyled>
  );
});
