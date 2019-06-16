import http from './httpService';

export const fetchProductsByCategory = (category, skip, take) => {
  return http.get(
    `/products?category=${category}${skip ? `&skip=${skip}` : ''}${
      take ? `&take=${take}` : ''
    }`
  );
};
