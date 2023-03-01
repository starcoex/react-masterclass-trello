import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'Telllo',
  storage: localStorage,
});

export const recoilState = atom({
  key: 'atom',
  default: {
    data: [],
    isDark: false,
  },
  effects_UNSTABLE: [persistAtom],
});

// export const isDarkState = atom({
//   key: "isDarkState",
//   default:
// });
