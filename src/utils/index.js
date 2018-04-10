import { safe as $ } from 'safe-monada';
import { URL_ID_REG_EXP, RESOLUTION_SPLIT } from '../constants/system';

export const getUrlId = () => {
  const currentLocation = $(global.location).$('href').$();
  const matchArr = currentLocation.match(URL_ID_REG_EXP);
  return matchArr[matchArr.length - 1].substring(1);
};

export const flatObj = obj => {
  const result = {
    pdfUrl: obj.pdf_url,
    fileName: obj.project.filename,
    passwordProtected: obj.project_password_protected,
  };
  if (result.passwordProtected) result.pdfUrl = null;
  return result;
};

export const createMultiInfoObj = docId => (
  {
    ids: [docId],
    properties: {
      project: { filename: 1 },
      pdf_url: 1,
      pdf_ttl: 3600,
      project_password_protected: 1,
    }
  }
);

export const checkMobile = () => global.innerWidth <= RESOLUTION_SPLIT;
