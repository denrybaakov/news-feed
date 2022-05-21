import React from 'react';
import { Break } from '../../../Break';
import { AnonIcon } from '../../../icons/AnonIcon';
import { Text, EColors } from '../../../Text';

import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

const API = `https://www.reddit.com/api/v1/authorize?client_id=lrTpO5r8D9iJ8mxdJ8_R_g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`

export function UserBlock({
  avatarSrc,
  username
}: IUserBlockProps) {
  return (
    <a
      className={styles.userBox}
      href={API}
    >
      <div className={styles.avatarBox}>
        {
          avatarSrc
            ? <img className={styles.avatarImg} src={avatarSrc} alt="" />
            : <AnonIcon />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={EColors.black}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}