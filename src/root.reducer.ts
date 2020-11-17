import { combineReducers } from 'redux';

import uvHeaderReducer from './uv_header/uv_header.reducers';
import uvPieReducer from './uv_pie/uv_pie.reducers';
import uvBarChartReducer from './uv_bar-chart/uv_bar-chart.reducers';
import UvAngularGaugeReducer from './uv_angular-gauge/uv_angular-gauge.reducer';

export const rootReducer = combineReducers({
  header: uvHeaderReducer,
  pie: uvPieReducer,
  barChart: uvBarChartReducer,
  angularGauge: UvAngularGaugeReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
