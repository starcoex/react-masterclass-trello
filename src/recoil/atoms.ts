import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'Telllo',
  storage: localStorage,
});

export const recoilLocalState = atom({
  key: 'TelloAtom',
  default: {
    data: [],
    isDark: false,
    // minutes: 'KO',
  },
  effects_UNSTABLE: [persistAtom],
});

export const minuteState = atom({
  key: 'minutes',
  default: 0,
});
export const hourSelector = selector({
  key: 'hours',
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});

// export const isDarkState = atom({
//   key: "isDarkState",
//   default:
// });
