type ServiceResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND';

type ServiceResError = {
  status: ServiceResponseErrorType,
  data: { message: string },
};

type ServiceResSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T,
};

export type ServiceRes<T> = ServiceResError | ServiceResSuccess<T>;