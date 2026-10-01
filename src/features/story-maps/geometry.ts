export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

/** Great-circle distance in kilometres. */
export const distanceKm = (lon1: number, lat1: number, lon2: number, lat2: number): number => {
  const rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad;
  const dLon = (lon2 - lon1) * rad;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export const pathFromPoints = (points: Array<[number, number]>, closed = false): string =>
  points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ') + (closed ? 'Z' : '');

/** The first `t` (0 to 1) of a polyline by length, with the tip position and heading in degrees. */
export const partialPolyline = (points: Array<[number, number]>, t: number) => {
  const lengths: number[] = [];
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    const length = Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    lengths.push(length);
    total += length;
  }
  let remaining = clamp(t, 0, 1) * total;
  const out: Array<[number, number]> = [points[0]];
  let angle = 0;
  for (let i = 1; i < points.length; i += 1) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];
    angle = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI;
    if (remaining >= lengths[i - 1]) {
      out.push(points[i]);
      remaining -= lengths[i - 1];
    } else {
      const f = lengths[i - 1] === 0 ? 0 : remaining / lengths[i - 1];
      out.push([x0 + (x1 - x0) * f, y0 + (y1 - y0) * f]);
      break;
    }
  }
  return { points: out, tip: out[out.length - 1], angle };
};

/** Cut a polyline short at both ends, so a line that starts or ends on a marker stops at its edge. */
export const trimPolyline = (points: Array<[number, number]>, startCut: number, endCut: number) => {
  const cutStart = (line: Array<[number, number]>, cut: number) => {
    let remaining = cut;
    for (let i = 1; i < line.length; i += 1) {
      const [x0, y0] = line[i - 1];
      const [x1, y1] = line[i];
      const length = Math.hypot(x1 - x0, y1 - y0);
      if (remaining < length) {
        const f = remaining / length;
        return [[x0 + (x1 - x0) * f, y0 + (y1 - y0) * f] as [number, number], ...line.slice(i)];
      }
      remaining -= length;
    }
    return line.slice(-1);
  };
  if (points.length < 2) return points;
  const start = startCut > 0 ? cutStart(points, startCut) : points;
  return endCut > 0 ? cutStart([...start].reverse(), endCut).reverse() : start;
};
