import type { UseFetchOptions } from "nuxt/app";
import { useI18n } from "vue-i18n";
import type { ApiResponse } from "~/types/api";

export const useApi = <T>(
  url: string,
  options: UseFetchOptions<ApiResponse<T>> = {}
) => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();

  const defaultOptions: UseFetchOptions<ApiResponse<T>> = {
    baseURL: config.public.apiBase,
    headers: {
      lang: locale.value,
    },
    // ... other default options
  };

  return useFetch<ApiResponse<T>, Error, any, any>(url, {
    ...defaultOptions,
    ...options,
  });
};
