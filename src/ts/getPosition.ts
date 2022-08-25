import { Position } from '../types/position.interface';

export function getPositionData(): Promise<Position> {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}
