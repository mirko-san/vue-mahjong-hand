<template>
  <ul>
    <li class="tile" v-for="tile in fromString(toArray)" :key="tile.id">
      <span style="font-size:50px" v-text="toString(tile)"></span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TileType, Tiles } from "./types";

export default defineComponent({
  name: "VueMahjongHand",
  props: {
    msg: String
  },
  setup() {
    const manzuMap = ["🀇", "🀈", "🀉", "🀊", "🀋", "🀌", "🀍", "🀎", "🀏"];
    const pinzuMap = ["🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"];
    const souzuMap = ["🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘"];
    const honorsMap = ["🀀", "🀁", "🀂", "🀃", "🀆", "🀅", "🀄"];
    return {
      manzuMap,
      pinzuMap,
      souzuMap,
      honorsMap
    };
  },
  computed: {
    toArray(): string[] {
      if (this.msg) {
        if (!this.msg.match(/,/)) {
          return [this.msg];
        }
        return this.msg.split(",");
      }
      return [""];
    }
  },
  methods: {
    fromString(arr: string[]): Tiles[] {
      const results: Tiles[] = arr.map(item => {
        const isManzu = item.match(/^m([1-9])r?/);
        const isPinzu = item.match(/^p([1-9])r?/);
        const isSouzu = item.match(/^s([1-9])r?/);
        const isHonors = item.match(/^E|S|W|N|P|F|C$/);
        let type: typeof TileType[number] | null = null;
        let value: number | null = null;
        if (isManzu) {
          type = "manzu";
          value = parseInt(isManzu[1]) - 1;
        } else if (isPinzu) {
          type = "pinzu";
          value = parseInt(isPinzu[1]) - 1;
        } else if (isSouzu) {
          type = "souzu";
          value = parseInt(isSouzu[1]) - 1;
        } else if (isHonors) {
          const parseHonors = (str: string) => {
            const map = ["E", "S", "W", "N", "P", "F", "C"];
            return map.indexOf(str);
          };
          const parsedHonors = parseHonors(item);
          type = "honors";
          value = parsedHonors;
        }
        return { type, value };
      });
      return results;
    },
    toString(value: Tiles): string {
      if (!value.type || value.value === null) {
        return "";
      }
      switch (value.type) {
        case "manzu":
          return this.manzuMap[value.value];
        case "pinzu":
          return this.pinzuMap[value.value];
        case "souzu":
          return this.souzuMap[value.value];
        case "honors":
          return this.honorsMap[value.value];
      }
    }
  }
});
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.tile {
  list-style-type: none;
  display: inline;
}
</style>
