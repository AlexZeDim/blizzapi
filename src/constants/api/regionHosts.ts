/**
 * List of all available region API hosts
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { RegionIdProperties } from '../../types';

const hosts: RegionIdProperties<string | ReadonlyArray<string>> = {
  1: 'https://us.api.blizzard.com',
  2: 'https://eu.api.blizzard.com',
  3: ['https://kr.api.blizzard.com', 'https://tw.api.blizzard.com/'],
  5: 'https://gateway.battlenet.com.cn/',
};

export default Object.freeze(hosts);
