import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

interface IToDoState {
  [key: string]: string[];
}

const { persistAtom } = recoilPersist({
  key: 'Telllo',
  storage: localStorage,
});
// const { persistAtom } = recoilPersist();
export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    to_do: ['a', 'b'],
    doing: ['c', 'd'],
    done: ['e', 'f'],
  },
});
export const recoilLocalState = atom({
  key: 'TelloAtom',
  default: {
    isDark: false,
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
