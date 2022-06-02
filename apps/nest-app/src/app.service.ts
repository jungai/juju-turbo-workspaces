import { Injectable } from '@nestjs/common';
import { SongInfo } from 'types';

@Injectable()
export class AppService {
  getHello() {
    const val: SongInfo = {
      id: 1,
      name: 'Darl+ling',
    };

    return [val];
  }
}
