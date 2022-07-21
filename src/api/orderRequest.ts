import {makeRequest} from '@app/api/makeRequest';
import {ApiConfig} from '@app/config/ApiConfig';
import {generatePath} from 'react-router';

export const orderCheckoutRequest = (id: string) => {
  return makeRequest(generatePath(ApiConfig.order.checkout, {id: id}), 'POST');
};

export const orderConfirmRequest = (id: string) => {
  return makeRequest(generatePath(ApiConfig.order.checkout, {id: id}), 'POST');
};
