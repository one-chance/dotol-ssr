type ApiResponse = {
  statusCode: number;
  message: string;
  data: any;
};

export const useApiError = (error: ApiResponse) => {
  switch (error.statusCode) {
    case 400:
      alert(error.message);
      break;

    case 401:
      window.location.reload();
      break;

    // 토큰 만료시 새로고침으로 로그아웃
    case 403:
      window.location.reload();
      break;

    case 404:
      alert(error.message);
      break;
  }
};
