import { HandsmykkeTypeKonstanter } from '../models/api/HandsmykkeTypeKonstanter';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faRingsWedding, faThumbsUp, faWatchFitness } from '@fortawesome/pro-light-svg-icons';
import { Handsmykkevalg } from '../models/registrering/handsmykkevalg.model';
import { HandsmykkeType } from '../models/api/HandsmykkeType';
import { faLangermet, faKunstigNegl, faLangNegl } from './customIkoner';
import { faTshirt } from '@fortawesome/pro-regular-svg-icons';

export class HandsmykkeMapper {

  public static getIkontypeMap(): Map<HandsmykkeTypeKonstanter, IconProp> {
    var ikonmap = new Map<HandsmykkeTypeKonstanter, IconProp>();
    ikonmap.set(HandsmykkeTypeKonstanter.AltOk, faThumbsUp);
    ikonmap.set(HandsmykkeTypeKonstanter.Ring, faRingsWedding);
    ikonmap.set(HandsmykkeTypeKonstanter.KlokkeArmband, faWatchFitness);
    ikonmap.set(HandsmykkeTypeKonstanter.LangNegl, faLangNegl);
    ikonmap.set(HandsmykkeTypeKonstanter.KunstigNeglShellac, faKunstigNegl);
    ikonmap.set(HandsmykkeTypeKonstanter.Kortermet, faTshirt);
    ikonmap.set(HandsmykkeTypeKonstanter.Langermet, faLangermet);
    return ikonmap;
  }

  public static getHandsmykkevalg(handsmykkeAlternativer: HandsmykkeType[], handsmykkeValg: string[]): Handsmykkevalg[] {
    return handsmykkeAlternativer.reduce((acc, item) => {
      acc.push({
        erValgt: handsmykkeValg.indexOf(item.kode) != -1,
        navn: item.navn,
        type: item.kode,
        disabled: false
      });
      return acc;
    }, [] as Handsmykkevalg[]);
  }
}
