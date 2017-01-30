var age, child, yearsOld,
  hasProp = {}.hasOwnProperty;

yearsOld = {
  max: 10,
  ida: 9,
  tim: 11
};

for (child in yearsOld) {
  if (!hasProp.call(yearsOld, child)) continue;
  age = yearsOld[child];
  console.log(child + " is " + age);
}
