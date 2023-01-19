const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

console.log("**START**");
const drill = (image) => {
  const rockTypes = [".", "*", "x", "X", "@"];
  const jobs = image.split(/\n/);
  const longestJob = jobs.sort((a, b) => b.length - a.length)[0].length;
  const drillStrengths = jobs.map(
    (e) => (e.match(/-/) ? 1 : 2) * e.match(/>/g).length
  );

  /* for (let i = 0; i < longestJob; i++) {
    for (let x = 0; x < jobs.length; x++) {
      [...jobs.match(/>+(.*)/)[1]].map((e) =>
        Math.ceil(
          rockTypes.indexOf(e) /
            ((line.match(/-/) ? 1 : 2) * line.match(/>/g).length)
        )
      );
    }
  } */
};

console.log(drill(input));
console.log("**END**");
