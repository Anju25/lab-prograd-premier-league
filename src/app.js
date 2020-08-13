//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
  let Manager=[managerName,managerAge,currentTeam,trophiesWon];
  return Manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation)
{  
  if(formation.length==0)
  return null;
  let format={
    "defender":formation[0],
    "midfield":formation[1],
    "forward":formation[2]
  };
     return format;
  
}

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year)
{
 let arr=[];
 for(var i=0;i<players.length;i++)
 {
   if(players[i].debut==year)
   arr.push(players[i]);
 }
return arr;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position)
{ 
  let arr=[];
  for(var i=0;i<players.length;i++)
  {
    if(players[i].position==position)
    arr.push(players[i]);
  }
  return arr;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName)
{
  let arr=[];
  for(var i=0;i<players.length;i++)
  {
    for(var j=0;j<players[i].awards.length;j++)
    {
       if(players[i].awards[j].name==awardName)
       arr.push(players[i]);
    }
  }
  return arr;
}




//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes)
{
  let arr=[]; let count=0; 
  for(var i=0;i<players.length;i++)
  { count=0;
    for(var j=0;j<players[i].awards.length;j++)
    { 
      if(players[i].awrads[j].name==awardName)
      count++;
    }
      if(count==noOfTimes)
      arr.push(players[i]);
  }
  return arr;

}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country)
{
  let arr=[];
  for(var i=0;i<players.length;i++)
  {
    if(players[i].country==country)
    {
    for(var j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName)
      arr.push(players[i]);
    }
  }
  }
return arr;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age)
{
var arr=[];
for(var i=0;i<=players.length;i++)
{
 if(players[i].team==team && players[i].age<=age)
 for(var j=0;j<=players[i].awards.length;j++)
 {
   if(players[i].awards[j]<=noOfAwards)
   arr.push(players[i]);
 } 
}
return arr;
}
//Progression 9 - Sort players in descending order of their age
 function SortByAge()
 {
   let temp=[];
   for(var i=0;i<=players.length;i++)
   {
     for(var j=i+1;j<=players.length;j++)
     {
       if(players[i].age<players[j].age)
       {
             temp[i]=players[i];
             players[i]=players[j];
             players[j]=temp[i];
       }
       temp.push(players[i]);
     }
   }
   return temp;

 }
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamSortByNoOfAwards(team)
{
  let arr=[]; let noofawards=[];
  for(var i=0;i<=players.length;i++)
  {
     noofawards[i]=players[i].awards.length;
     players[i].push({"noOfAwards":noofawards[i]});
  }
  for(var i=0;i<=players.length;i++)
  { 
    if(players[i].team==team)
    for(var j=i+1;j<=players.length;j++)
    {
      if(players[i].noOfAwards<players[j].noOfAwards)
      {
        arr[i]=players[i];
        players[i]=players[j];
        players[j]=arr[i];
      }
      arr.push(players[i]);
    }
  }
  return arr;
}
    

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
