export const TileType = ["manzu", "pinzu", "souzu", "honors"] as const;
export type Tiles = {
  type: typeof TileType[number] | null;
  value: number | null;
};
