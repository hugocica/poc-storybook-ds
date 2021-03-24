import { ReactComponent as arrowdown } from './assets/arrow-down.svg';
import { ReactComponent as arrowleft } from './assets/arrow-left.svg';
import { ReactComponent as arrowright } from './assets/arrow-right.svg';
import { ReactComponent as arrowup } from './assets/arrow-up.svg';
import { ReactComponent as close } from './assets/close.svg';
import { ReactComponent as config } from './assets/config.svg';
import { ReactComponent as doccheck } from './assets/doc-check.svg';
import { ReactComponent as doc } from './assets/doc.svg';
import { ReactComponent as gift } from './assets/gift.svg';
import { ReactComponent as lifeboat } from './assets/lifeboat.svg';
import { ReactComponent as lock } from './assets/lock.svg';
import { ReactComponent as logout } from './assets/logout.svg';
import { ReactComponent as hidden } from './assets/eye-hidden.svg';
import { ReactComponent as notification } from './assets/notification.svg';
import { ReactComponent as patients } from './assets/patients.svg';
import { ReactComponent as print } from './assets/print.svg';
import { ReactComponent as prontmedlogodarkbg } from './assets/prontmed-logo-dark-bg.svg';
import { ReactComponent as prontmedlogolightbg } from './assets/prontmed-logo-light-bg.svg';
import { ReactComponent as spinner } from './assets/spinner.svg';
import { ReactComponent as user } from './assets/user.svg';
import { ReactComponent as visible } from './assets/eye-visible.svg';

import { TColors } from '../theme';

export const iconDictionary = {
  'arrow-down': arrowdown,
  'arrow-left': arrowleft,
  'arrow-right': arrowright,
  'arrow-up': arrowup,
  close,
  config,
  'doc-check': doccheck,
  doc,
  gift,
  lifeboat,
  lock,
  logout,
  hidden,
  notification,
  patients,
  print,
  'prontmed-logo-dark-bg': prontmedlogodarkbg,
  'prontmed-logo-light-bg': prontmedlogolightbg,
  spinner,
  user,
  visible,
};

export interface IIconProps {
  name: keyof typeof iconDictionary;
  color?: TColors;
  fill?: string;
  size?: number;
}
