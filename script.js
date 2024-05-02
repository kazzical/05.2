let musicFestivalLineup=[];
musicFestivalLineup.push("Laufey","Perfume","IU","New Jeans","Ginger Root","Ado","Atarashii Gakko!","Jhariah","Vansire","Yoasobi");
musicFestivalLineup.pop([9]);
console.log(musicFestivalLineup.length);

musicFestivalLineup.unshift("Dvwn");
console.log(musicFestivalLineup);

let headliners=[];
headliners.push("Jhariah","Vansire","Yoasobi");
headliners.indexOf("Vansire");
console.log(headliners);

firstSetList=["Laufey","Perfume","IU","New Jeans"];
console.log(firstSetList);

let festivalSchedule = firstSetList.concat(headliners);
Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
festivalSchedule.myUcase();
console.log(festivalSchedule);
