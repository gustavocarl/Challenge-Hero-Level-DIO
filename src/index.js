const heroName = "Gustavo";
let quantityOfExperience = 0;
let heroLevel = "";

for (let heroBattles = 1; heroBattles <= 10; heroBattles++){
    const battleExperience = Math.round(Math.random() * (1500 - 1) + 1);
    console.log(`Batalha ${heroBattles} - Experiência: ${battleExperience}`);
    quantityOfExperience += battleExperience;
}

console.log(`Experiência total: ${quantityOfExperience}`);


if(quantityOfExperience <= 1000)
{
    heroLevel = "Ferro";
}
else if (quantityOfExperience <= 2000)
{
    heroLevel = "Bronze";
}
else if (quantityOfExperience <= 5000)
{
    heroLevel = "Prata";
}
else if (quantityOfExperience <= 7000)
{
    heroLevel = "Ouro";
}
else if (quantityOfExperience <= 8000)
{
    heroLevel = "Platina";
}
else if (quantityOfExperience <= 9000)
{
    heroLevel = "Ascendente";
}
else if (quantityOfExperience <= 10000)
{
    heroLevel = "Imortal";
}
else 
{
    heroLevel = "Radiante";
}

console.log(`O Herói de nome: ${heroName} está no nível de ${heroLevel}`);