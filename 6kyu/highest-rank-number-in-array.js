// Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

function highestRank(arr) {
   return arr.reduce((a,b,i,arr)=> (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b), null)
}
