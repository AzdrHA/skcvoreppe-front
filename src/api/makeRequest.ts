import axios, {Method} from 'axios';
import Cookies from 'js-cookie';
import {ApiConfig} from '@app/config/ApiConfig';

/**
 * @param {string} url
 * @param {Method} method
 * @param {Object} data
 * @param {boolean} withAuth
 * @return {Promise<any>}
 */
export const makeRequest = (url: string, method: Method, data: any = {}, withAuth: boolean = true): Promise<any> => {
  return new Promise((resolve, reject) =>
    axios({
      baseURL: ApiConfig.basePath,
      method,
      url,
      data,
    }).then((r) => resolve(r)).catch((e)=> reject(e)),
  );
};
