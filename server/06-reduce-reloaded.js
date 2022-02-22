const items = [1,2,2,3,3,3,4,4,4,4,5];

const result = items.reduce((obj, item) => {
  if(!obj[item]){
    obj[item] = 1;
  }else{
    obj[item]+=1;
  }
  return obj;
},{});
console.log('respuesta', result);

console.log('--------------------');

// ---------------------

const dates = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
  {
    name: "Lucho",
    level: "hight",
  },
];

resDates = dates
.map(item => item.level)
.reduce((obj, item) =>{
  if(!obj[item]){
    obj[item] = 1;
  }else{
    obj[item]++;
  }
  return obj;
},{});
console.log('answer levels',resDates);
