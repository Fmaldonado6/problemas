let maxLength = 0;
let cost = 0;
function main(n, cuts) {
  maxLength = n;
  solve(n, n, 0, [...cuts]);
  console.log(cost);
}

function solve(n, previousLength, initial, cuts) {
  if (n == undefined || initial == undefined) return;

  if (cuts.length == 0 || n <= 1) return;

  let nextPieceLength = maxLength;

  let piece1;
  let piece2;

  for (let i = 0; i < cuts.length; i++) {
    const cut = cuts[i];

    if (cut < initial || cut > n + initial) continue;

    const piece1Length = n - cut + initial;
    const piece2Length = Math.abs(cut - initial);

    const difference = Math.abs(piece1Length - piece2Length);

    if (difference < nextPieceLength) {
      nextPieceLength = difference;
      piece1 = { initial: cut, length: piece1Length, index: i };
      piece2 = { initial: initial, length: piece2Length, index: i };
    }
  }

  if (piece1 != null && piece2 != null) {
    cost += n;
    cuts.splice(piece1.index, 1);
    solve(piece1.length, n, piece1.initial, [...cuts]);
    solve(piece2.length, n, piece2.initial, [...cuts]);
  }
}

main(7, [1, 3, 4, 5]);
