function mainEquipGen(){
  const mainEquip = [
    "Força (STR)",
    "Destreza (DEX)",
    "Quality (STR e/ou DEX)"
  ];
  return mainEquip[Math.floor(Math.random() * 3)];
}

function magicEquipGen(){
  const magicEquip = [
    "Feiticeiro (INT)",
    "Clérigo (FTH)",
    "Piromante (INT e/ou FTH)",
    "Bruxo (INT e FTH)"
  ];
  return magicEquip[Math.floor(Math.random() * 4)];
}

function armorTypeGen(){
  const armorType = [
    "Pesada",
    "Média",
    "Leve"
  ];
  return armorType[Math.floor(Math.random() * 3)];
}

function dragonFighterGen(){
  const dragonFighter = [
    "Rafael",
    "Vítor"
  ];
  return dragonFighter[Math.floor(Math.random() * 2)]
}

function newBuild(){
  document.getElementById("main-equip").innerHTML = `${mainEquipGen()}`;
  document.getElementById("magic-equip").innerHTML = `${magicEquipGen()}`;
  document.getElementById("armor-type").innerHTML = `${armorTypeGen()}`;
}

function luckyFighter(){
  document.getElementById("dragon-fighter").innerHTML = `${dragonFighterGen()}`;
}