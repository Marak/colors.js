let t = 0;
module.exports = function americanFlag () {
  console.log('LIBERTY LIBERTY LIBERTY'.yellow);
  console.log('LIBERTY LIBERTY LIBERTY'.america);
  console.log('LIBERTY LIBERTY LIBERTY'.yellow);
  t ++;
  let flag = 
  `
  
                                  !
              H|H|H|H|H           H__________________________________
              H|§|§|§|H           H|* * * * * *|---------------------|
              H|§|∞|§|H           H| * * * * * |---------------------|
              H|§|§|§|H           H|* * * * * *|---------------------|
              H|H|H|H|H           H| * * * * * |---------------------|
              H|H|H|H|H           H|---------------------------------|
          ===============        H|---------------------------------|
            /| _   _ |\\          H|---------------------------------|
            (| O   O |)          H|---------------------------------|
            /|   U   |\\          H-----------------------------------
              |  \\=/  |           H
              \\_..._/            H
              _|\\I/|_            H
      _______/\\| H |/\\_______    H
      /       \\ \\   / /       \\   H
    |         \\ | | /         |  H
    |          ||o||          |  H
    |    |     ||o||     |    |  H
    |    |     ||o||     |    |  H
  `.split('\n')
    .map((e) => e.padEnd(67))
    .map((e, il, a) => {
      if (il > 14) {
          return e;
      }

      let line = e.split('');

      for(let i = 36; i < e.length; i ++) {
        let o = Math.round(Math.sin(t + 2 * 3.14 * (i - 36) / 36) * 2);

        o += il;

        if (o >= a.length) o -= a.length;
        if (o < 0) o += a.length;

        line[i] = a[o][i];
      }

      return line.join('');
    }).join('\n');

  console.log(flag);
}
