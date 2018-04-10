import { connect, throwError, checkResult } from 'frontend-api-client';
import { restParams } from '../app-config';

export const { post, fetch } = connect(restParams, {
  checkSuccess: checkResult,
  onSuccess: ({ data }) => data,
  onError: throwError
});
