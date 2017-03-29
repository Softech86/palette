/**
 * Created by leobai on 2017/3/28.
 */

export function deg2rad(d) {
  return parseFloat(d) / 180 * Math.PI;
}

export function rad2deg(r) {
  return parseFloat(r) / Math.PI * 180;
}

export function dcos(d) {
  return Math.cos(deg2rad(d));
}

export function dsin(d) {
  return Math.sin(deg2rad(d));
}
