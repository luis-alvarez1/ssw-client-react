import { gql } from '@apollo/client';

export const JWT_TOKEN_KEY = 'jwtToken';

export const VEHICLES = gql`
  query vehicles {
    vehicles {
      name
      model
      year
      colour
      price
      cylinderCapacity
      gearbox
      stock
      imgUrl
    }
  }
`;

export const CREDITS = gql`
  query credits($filter: FilterCredit) {
    credits(filter: $filter) {
      userId
      creditValue
      expirationDate
      nextFeeExpirationDate
      feesNumber
      expired
      feeValue
      isActive
    }
  }
`;
export const GEARBOX_BY_ID = gql`
  query getGearboxById($filter: FilterGearbox!) {
    gearboxes(filter: $filter) {
      id
      type
    }
  }
`;
export const AUTH_USER = gql`
  mutation authUser($user: AuthUserInput) {
    authUser(user: $user) {
      token
    }
  }
`;
export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      name
    }
  }
`;
