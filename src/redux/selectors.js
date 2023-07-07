export const selectIsLogin = state => state.auth.isLogin;

export const selectUserName = state => state.auth.user.name;

export const selectAllCars = state => state.cars.allCars;

export const selectScoresByUser = state => state.score.scoresByUser;

export const selectIsUserLoading = state => state.auth.isLoading;

export const selectIsScoreLoading = state => state.score.isLoading;

export const selectAuthError = state => state.auth.error;

export const selectScoreError = state => state.score.error;
