import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {  faBacteria,  faBed,  faHandSpock,   faHeadSideCough,  faRaindrops, } from '@fortawesome/pro-light-svg-icons';
import {BeskyttelsesutstyrsettingTypeKonstanter} from '../models/api/BeskyttelsesutstyrsettingTypeKonstanter';

export class BeskyttelsesutstyrsettingMapper {
  public static getIkontypeMap() : Map<string, IconProp>{
    var ikonmap = new Map<string, IconProp>();
    ikonmap.set(BeskyttelsesutstyrsettingTypeKonstanter.BasaleSmittevernrutiner, faBacteria);
    ikonmap.set(BeskyttelsesutstyrsettingTypeKonstanter.Kontaktsmitte, faHandSpock);
    ikonmap.set(BeskyttelsesutstyrsettingTypeKonstanter.Drapesmitte, faRaindrops);
    ikonmap.set(BeskyttelsesutstyrsettingTypeKonstanter.Luftsmitte, faHeadSideCough);
    return ikonmap;
  }
}
