import { all } from 'redux-saga/effects';
import additionFormSagas from "../addition-form/addition-form.saga";
import tableSagas from "../table/table.saga";

export default function* rootSaga() {
  yield all([
    additionFormSagas(),
    tableSagas(),
  ]);
}
